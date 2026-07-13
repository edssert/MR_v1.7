/**
 * @module ui/modal
 * 카드형 상세 팝업(모달)의 열기/닫기 공통 프리미티브.
 * 모든 도메인이 공유하며, 모달 내부 마크업은 호출자(각 도메인의 view)가 공급한다.
 *
 * 관련 CSS: css/components/modal.css (.modal-overlay, .modal)
 * 닫기 경로: 배경 클릭 · ESC 키 · [data-modal-close] 버튼 클릭
 */
let modalBgEl, modalEl;

// [모바일 전용] 데스크탑 Split View 대신 "전체 교체 + 뒤로가기" 방식을 쓸 때
// 이전 모달 내용을 쌓아두는 스택. { color, headHTML, bodyHTML, onMounted }
// 항목 — onMounted 는 그 화면을 원래 열었던 쪽이 넘긴 배선 콜백(예: 스피커
// 모달의 앰프 행 클릭 배선)을 그대로 저장해뒀다가 뒤로가기로 복원할 때 다시
// 실행한다. 모바일에서만 채워지고, 데스크탑 폭에서는 항상 비어있다(뒤로가기
// 버튼도 그래서 안 보임).
let mobileStack = [];
// 현재 modalEl 에 실제로 렌더된 원본 콘텐츠 — DOM 에서 역추출(outerHTML)하면
// 그 사이 추가된 뒤로가기 버튼 등 부산물까지 섞여 들어가 취약하므로, 렌더할
// 때 쓴 문자열 자체를 별도로 계속 들고 있는다(다음 push 때 이 값을 스택에
// 넣는다).
let currentContent = null;

/**
 * 현재 화면 폭이 모바일 브레이크포인트인지 판정 — split-view.css 의 세로
 * 스택 전환 기준(860px)과 동일한 값을 쓴다. 리사이즈 도중 경계값을 오갈 수
 * 있어 호출마다 매번 새로 판정한다(캐시하지 않음).
 * @returns {boolean}
 */
export function isMobileLayout() {
  return window.matchMedia("(max-width: 860px)").matches;
}

/**
 * 모달 시스템 초기화 — 앱 시작 시 1회 호출 (main.js).
 * @param {string} [bgId="modalbg"] 오버레이 요소 id
 * @param {string} [modalId="modal"] 모달 본체 요소 id
 * @returns {{modalBgEl: HTMLElement, modalEl: HTMLElement}}
 */
export function initModal(bgId = "modalbg", modalId = "modal") {
  modalBgEl = document.getElementById(bgId);
  modalEl = document.getElementById(modalId);
  modalBgEl.addEventListener("click", e => { if (e.target === modalBgEl) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  return { modalBgEl, modalEl };
}

/**
 * 모달을 지정한 내용으로 열기.
 * @param {string} color 제조사 색상 (CSS 변수 --mfr 로 주입, 예: "var(--la)")
 * @param {string} headHTML 헤더 영역 마크업 (.modal__head)
 * @param {string} bodyHTML 본문 영역 마크업 (.modal__body)
 * @param {string} [extraClass] 모달에 추가할 변경자 클래스 (선택)
 */
export function openModalWith(color, headHTML, bodyHTML, extraClass) {
  // [버그 방지] 이전에 Split View(.modal--split + .split-view 구조)가 열려
  // 있던 상태로 모달이 닫혔다가 다시 열리는 경우, className/innerHTML 을
  // 아래에서 전부 새로 쓰므로 잔재는 남지 않지만 혹시 모를 경합을 막기 위해
  // 명시적으로도 초기화한다.
  // [사용자 요청] 카드 목록에서 완전히 새 모달을 여는 진입점이므로 이전
  // 세션의 모바일 뒤로가기 스택도 함께 비운다 — 스택이 남아있으면 이번에
  // 새로 연 모달에 관계없는 이전 카드의 "뒤로가기"가 뜨는 문제를 방지.
  mobileStack = [];
  modalEl.className = "modal modal--pop-in" + (extraClass ? " " + extraClass : "");
  modalEl.style.setProperty("--mfr", color);
  modalEl.innerHTML = headHTML + bodyHTML;
  currentContent = { color, headHTML, bodyHTML, onMounted: null };
  modalBgEl.classList.add("modal-overlay--open");
  // [버그 수정] body 만 잠그면 html 자체가 overflow-y: scroll(base.css,
  // 스크롤바 자리 고정용)이라 여전히 스크롤됐다 — html 도 함께 잠가야
  // 모달이 열린 동안 배경(카드 그리드) 스크롤이 완전히 막힌다.
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden"; // 배경 스크롤 잠금
  // [버그 수정] modalEl 은 매번 innerHTML 만 갈아끼우는 재사용 DOM 노드라
  // 브라우저가 이전에 쌓인 scrollTop 을 그대로 기억한다 — 오버레이가 아직
  // display:none 인 시점(modal-overlay--open 클래스 추가 전)에 scrollTop=0
  // 을 대입하면 Chrome 이 그 뒤 다시 보이는 순간 이전 스크롤 위치를
  // 복원해버려 리셋이 무효화됐다. 오버레이를 연 *뒤에* 대입해야 확실히
  // 반영된다.
  modalEl.scrollTop = 0;
  const closeBtn = modalEl.querySelector("[data-modal-close]");
  if (closeBtn) closeBtn.onclick = closeModal;
  wirePaneInteractions(modalEl);
  renderBackButton();
}

/**
 * 모바일 레이아웃에서 Split View 대신 쓰는 "전체 교체" 진입점.
 * 현재 모달 내용(원본 문자열 그대로, DOM 역추출 아님)을 뒤로가기 스택에
 * 쌓아두고, 모달 전체를 새 콘텐츠로 바꾼다(데스크탑의
 * openSplitPane/replaceSplitPane1 이 호출하는 공용 함수 — split-view.js 가
 * 폭을 보고 이 함수로 위임한다).
 * @param {string} color 새 콘텐츠의 --mfr 색상
 * @param {string} headHTML 새 콘텐츠 헤더
 * @param {string} bodyHTML 새 콘텐츠 본문
 * @param {Function} [onMounted] 새 콘텐츠 DOM 이 붙은 직후 modalEl 을 인자로 호출
 */
export function pushMobileModal(color, headHTML, bodyHTML, onMounted) {
  if (currentContent) mobileStack.push(currentContent);
  modalEl.style.setProperty("--mfr", color);
  modalEl.innerHTML = headHTML + bodyHTML;
  currentContent = { color, headHTML, bodyHTML, onMounted: onMounted || null };
  const closeBtn = modalEl.querySelector("[data-modal-close]");
  if (closeBtn) closeBtn.onclick = closeModal;
  wirePaneInteractions(modalEl);
  if (onMounted) onMounted(modalEl);
  renderBackButton();
}

/**
 * 모바일 뒤로가기 스택의 마지막 항목을 복원한다. 스택이 비어있으면 아무
 * 일도 하지 않는다(뒤로가기 버튼 자체가 이 경우 안 보이므로 정상적으로는
 * 호출되지 않는다). 복원된 화면의 원래 onMounted 콜백(예: 앰프/스피커 행
 * 클릭 배선)도 함께 다시 실행해 다음 클릭이 정상 동작하도록 한다.
 */
function popMobileModal() {
  const prev = mobileStack.pop();
  if (!prev) return;
  modalEl.style.setProperty("--mfr", prev.color);
  modalEl.innerHTML = prev.headHTML + prev.bodyHTML;
  currentContent = prev;
  const closeBtn = modalEl.querySelector("[data-modal-close]");
  if (closeBtn) closeBtn.onclick = closeModal;
  wirePaneInteractions(modalEl);
  if (prev.onMounted) prev.onMounted(modalEl);
  renderBackButton();
}

/**
 * 모달 헤더 좌측(닫기 X 의 반대편)에 뒤로가기 버튼을 그린다 — 스택에 이전
 * 항목이 있을 때만 보인다. openModalWith/pushMobileModal/popMobileModal 이
 * 모달 내용을 바꿀 때마다 다시 호출해 버튼 유무·클릭 대상을 최신 상태로
 * 맞춘다.
 */
function renderBackButton() {
  const head = modalEl.querySelector(".modal__head");
  if (!head) return;
  const existing = head.querySelector("[data-modal-back]");
  if (existing) existing.remove();
  // [브라우저 호환] CSS :has() 선택자 없이도 동작하도록, 뒤로가기 버튼
  // 유무를 head 자체의 클래스로도 표시해 eyebrow/제목 줄 왼쪽 여백을 튼다.
  head.classList.toggle("modal__head--has-back", mobileStack.length > 0);
  if (!mobileStack.length) return;
  const btn = document.createElement("button");
  btn.className = "modal__back";
  btn.type = "button";
  btn.setAttribute("data-modal-back", "");
  btn.setAttribute("aria-label", "뒤로가기");
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>`;
  btn.onclick = () => popMobileModal();
  head.appendChild(btn);
}

/**
 * 모달/pane 공통 인터랙션 일괄 배선 — 뷰 전환·mm/in 토글·이미지 줌·
 * Configurations +N 토글. [개선사항 0-1] 원래 openModalWith() 안에서만
 * 호출돼 Split View pane 2 의 인터랙션이 전부 무반응이었다. 이제
 * openModalWith(pane 1)와 split-view.js openSplitPane(pane 2)이 각자의
 * 루트 요소로 이 함수를 호출한다. 모든 하위 배선은 해당 마크업이 없으면
 * 아무 일도 하지 않으므로 어떤 도메인의 pane 에나 안전하다.
 * @param {HTMLElement} root 배선 대상 컨테이너 (모달 전체 또는 pane 2)
 */
export function wirePaneInteractions(root) {
  wireViewSwitch(root);
  wireDimsUnitSwitch(root);
  wireWeightUnitSwitch(root);
  wireMediaZoom(root);
  wireConfigsToggle(root);
  wireSectionToggle(root);
  wireScrollbarAutoShow(root);
  wireAcousticTips(root);
}

/**
 * [버그 수정] speakers.view.js 의 Preset Guide "Acoustic Properties" 호버
 * 팝오버(.acoustic-tip__popover)가 CSS 만으로(부모에 overflow: visible)는
 * 모달/pane 자체의 스크롤 컨테이너(overflow-y: auto, modal.css)를 벗어나지
 * 못하고 잘렸다 — overflow: auto 인 조상이 있으면 그 자손이 아무리
 * visible 이어도 조상 경계 밖으로는 절대 못 나가는 CSS 구조적 한계다.
 * 커스텀 스크롤바(wireScrollbarAutoShow)와 동일한 해법 — 팝오버를
 * document.body 에 직접 옮겨 놓고 position: fixed + getBoundingClientRect()
 * 로 트리거 요소 기준 화면 좌표를 계산해 배치하면 스크롤 컨테이너와
 * 완전히 무관해진다.
 * @param {HTMLElement} root 배선 대상 컨테이너 (모달 전체 또는 pane)
 */
function wireAcousticTips(root) {
  root.querySelectorAll(".acoustic-tip").forEach(tip => {
    const pop = tip.querySelector(".acoustic-tip__popover");
    if (!pop) return;
    // [DOM 이동] 원래 자리(셀 안)는 그대로 두되, 화면에 보일 때만 body 로
    // 옮겨 fixed 배치한다 — 이동 전 원래 부모를 기억해뒀다가 숨길 때
    // 되돌리지는 않고(다음 open 때 항상 새로 만들어지므로) 그냥 제자리에
    // 남겨도 무방하지만, 매번 같은 tip 이 재사용될 수 있어(wirePaneInteractions
    // 반복 호출) 원래 위치 참조를 유지해 중복 이동을 막는다.
    const show = () => {
      const rect = tip.getBoundingClientRect();
      pop.classList.add("acoustic-tip__popover--fixed");
      document.body.appendChild(pop);
      pop.style.left = `${rect.left}px`;
      pop.style.top = `${rect.bottom + 8}px`;
      pop.style.visibility = "visible";
      pop.style.opacity = "1";
      // [화면 밖 방지] 팝오버 폭(max-width 240px)이 뷰포트 오른쪽을
      // 넘으면 왼쪽으로 당겨 잘리지 않게 한다.
      const popRect = pop.getBoundingClientRect();
      if (popRect.right > window.innerWidth - 8) {
        pop.style.left = `${window.innerWidth - 8 - popRect.width}px`;
      }
    };
    const hide = () => {
      pop.style.visibility = "";
      pop.style.opacity = "";
      if (pop.parentElement === document.body) tip.appendChild(pop);
    };
    tip.onmouseenter = show;
    tip.onmouseleave = hide;
    tip.onfocus = show;
    tip.onblur = hide;
  });
}

/**
 * [사용자 요청] "웹툰 스크롤"처럼 평소엔 숨어있다가 스크롤 중(또는 호버)
 * 에만 살짝 나타나는 짧고 얇은 막대 — 커스텀 오버레이 구현.
 * [배경] 네이티브(webkit) 스크롤바 thumb 은 "트랙 길이 × (가시영역/전체
 * 콘텐츠)" 비율로 브라우저가 강제로 그려서, CSS 만으로는 막대의 실제
 * 길이를 원하는 만큼 짧게 고정할 수 없었다(margin/min-height/border-clip
 * 다 시도했지만 칠해진 색만 줄어들 뿐 실제 점유 길이는 그대로). 그래서
 * 네이티브 스크롤바는 CSS 로 완전히 숨기고(modal.css), 여기서 스크롤
 * 비율을 직접 계산해 그린 오버레이 막대(.modal__scrollbar-thumb)로
 * 대체한다 — 길이를 항상 짧게(MIN_THUMB~MAX_THUMB) 고정할 수 있다.
 * root 자체가 스크롤 컨테이너다 — 단일 모달은 #modal 자신, Split View 는
 * 각 .split-view__pane.
 * @param {HTMLElement} root 스크롤 컨테이너 (모달 전체 또는 pane)
 */
const SCROLLBAR_MARGIN = 28; // modal.css .modal__scrollbar-track 의 top 과 동일(라운드 모서리 회피)
const SCROLLBAR_MIN_THUMB = 24;
// [버그 수정] 70px 로 너무 짧게 고정해뒀더니 막대가 트랙 대비 지나치게
// 작아 스크롤량과 막대 이동 거리의 체감 비율이 어긋나(살짝만 스크롤해도
// 막대가 확 움직이는 느낌) 부자연스러웠다. 트랙 실제 비율(clientHeight/
// scrollHeight)에 훨씬 가깝게, 그러나 트랙을 꽉 채우지는 않도록 상한만
// 넉넉히 늘린다.
const SCROLLBAR_MAX_THUMB = 160;

function wireScrollbarAutoShow(root) {
  // [DOM 준비] 트랙은 document.body 에 직접 붙인다 — .modal(스크롤 컨테이너)
  // 의 자식으로 두면 position:fixed 라도 여전히 스크롤 오프셋 계산에
  // 얽혀(브라우저에 따라 scrollHeight 를 부풀리는 경우가 있었다) 스크롤이
  // 실제 콘텐츠보다 훨씬 아래까지 내려가는 문제가 생겼다. body 자식이면
  // root 의 스크롤과 완전히 무관해지고, getBoundingClientRect() 로 매번
  // root 의 화면 좌표를 읽어 track 의 위치만 맞춰주면 된다. root 마다
  // 트랙을 하나씩 재사용(root._scrollbarTrack)한다.
  let track = root._scrollbarTrack;
  if (!track) {
    track = document.createElement("div");
    track.className = "modal__scrollbar-track";
    track.innerHTML = `<div class="modal__scrollbar-thumb"></div>`;
    document.body.appendChild(track);
    root._scrollbarTrack = track;
  }
  const thumb = track.querySelector(".modal__scrollbar-thumb");

  const update = () => {
    const rect = root.getBoundingClientRect();
    const trackH = rect.height - SCROLLBAR_MARGIN * 2;
    track.style.top = `${rect.top + SCROLLBAR_MARGIN}px`;
    track.style.left = `${rect.right - 7}px`;
    track.style.height = `${Math.max(0, trackH)}px`;
    const scrollable = root.scrollHeight - root.clientHeight;
    if (scrollable <= 1) { track.style.display = "none"; return; }
    track.style.display = "";
    const thumbH = Math.min(SCROLLBAR_MAX_THUMB, Math.max(SCROLLBAR_MIN_THUMB, trackH * (root.clientHeight / root.scrollHeight)));
    const maxThumbTop = Math.max(0, trackH - thumbH);
    const thumbTop = (root.scrollTop / scrollable) * maxThumbTop;
    thumb.style.height = `${thumbH}px`;
    thumb.style.top = `${thumbTop}px`;
  };

  // [중복 등록 방지] wirePaneInteractions 는 같은 모달을 열 때마다(카드를
  // 새로 클릭할 때마다) 반복 호출되는데, root(#modal 등)는 고정된 DOM
  // 요소라 addEventListener 를 쓰면 열 때마다 리스너가 계속 누적된다.
  // 다른 wire* 함수들처럼 onXxx 속성 할당(매번 덮어써짐)으로 통일한다.
  // 숨김 타이머 id 도 클로저 변수 대신 root 에 직접 저장해, 재호출로 함수
  // 클로저가 새로 생겨도 이전 타이머를 확실히 취소할 수 있게 한다.
  root.onscroll = () => {
    update();
    track.classList.add("is-visible");
    clearTimeout(root._scrollHideTimer);
    root._scrollHideTimer = setTimeout(() => track.classList.remove("is-visible"), 700);
  };
  root.onmouseenter = () => { update(); track.classList.add("is-visible"); };
  root.onmouseleave = () => { if (!root._scrollHideTimer) track.classList.remove("is-visible"); };
  // 새로 열린 직후에도 트랙 위치/막대 길이를 미리 계산해둔다(스크롤/호버
  // 전에도 다음 상호작용에서 바로 정확한 값이 보이도록).
  update();
  // [버그 수정 — 첫 오픈 시 트랙이 살짝 왼쪽에 붙어있다 스크롤해야 제자리로
  // 오던 문제] 모달이 열리자마자(.modal--pop-in, modal.css) translateY(8px)
  // →none 팝업 애니메이션이 0.18초간 재생되는데, 그 애니메이션이 아직 끝나기
  // 전(카드가 완전히 자리잡기 전) getBoundingClientRect() 를 읽으면 최종
  // 좌표가 아닌 중간 좌표가 잡힌다. 애니메이션이 끝난 뒤 한 번 더 갱신해
  // 최종 위치로 정확히 맞춘다.
  setTimeout(update, 200);
}

/**
 * root(모달/pane)에 연결된 커스텀 스크롤바 트랙(body 에 직접 붙어있음, 위
 * wireScrollbarAutoShow 참고)을 제거한다. Split View 진입/해제로 DOM 이
 * 재구성될 때(split-view.js) 옛 root 기준 트랙이 고아 상태로 화면에 남지
 * 않도록 호출한다.
 * @param {HTMLElement} root
 */
export function removeScrollbarTrack(root) {
  if (root && root._scrollbarTrack) {
    root._scrollbarTrack.remove();
    root._scrollbarTrack = null;
  }
}

/**
 * 모달 안의 이미지 뷰 전환 버튼([data-view-switch])을 활성화한다.
 * 뷰가 2개 이상인 스피커(Front/Rear, Front/Array 등)만 이 마크업이
 * 존재한다(speakers.view.js modalBodyHTML 의 getViews 참조) — 버튼이
 * 없는 모달(대부분의 다른 항목, 뷰 1개짜리 스피커)은 querySelectorAll 이
 * 빈 NodeList 를 반환해 아무 일도 하지 않는다. 버튼 개수·라벨과 무관하게
 * 동작하므로 향후 3번째, 4번째 뷰(I·O 등)가 추가돼도 이 함수는 그대로 쓴다.
 * @param {HTMLElement} root 버튼/이미지를 담고 있는 컨테이너 (모달 전체)
 */
function wireViewSwitch(root) {
  const btns = root.querySelectorAll("[data-view-switch]");
  if (!btns.length) return;
  const media = root.querySelector(".modal__media");
  if (!media) return;
  const imgs = media.querySelectorAll(".modal__img[data-view]");
  btns.forEach(btn => {
    btn.onclick = () => {
      const view = btn.dataset.viewSwitch;
      btns.forEach(b => b.classList.toggle("is-active", b === btn));
      imgs.forEach(img => { img.hidden = img.dataset.view !== view; });
    };
  });
}

/**
 * 모달 안의 Dimensions mm/in 단위 전환 버튼([data-dims-unit])을 활성화한다.
 * wireViewSwitch 와 동일한 토글 패턴 — 버튼이 없는 모달(Dimensions 데이터가
 * 없는 항목)은 querySelectorAll 이 빈 NodeList 를 반환해 아무 일도 하지
 * 않는다 (speakers.view.js weightDimsRow 참조).
 * @param {HTMLElement} root 버튼/값을 담고 있는 컨테이너 (모달 전체)
 */
function wireDimsUnitSwitch(root) {
  const btns = root.querySelectorAll("[data-dims-unit]");
  if (!btns.length) return;
  const mmEl = root.querySelector("[data-dims-mm]");
  const inEl = root.querySelector("[data-dims-in]");
  if (!mmEl || !inEl) return;
  btns.forEach(btn => {
    btn.onclick = () => {
      const unit = btn.dataset.dimsUnit;
      btns.forEach(b => b.classList.toggle("is-active", b === btn));
      mmEl.hidden = unit !== "mm";
      inEl.hidden = unit !== "in";
    };
  });
}

/**
 * 모달 안의 Weight kg/lb 단위 전환 버튼([data-weight-unit])을 활성화한다.
 * wireDimsUnitSwitch 와 동일한 토글 패턴 — 버튼이 없는 모달(Weight 데이터가
 * 없는 항목)은 querySelectorAll 이 빈 NodeList 를 반환해 아무 일도 하지
 * 않는다 (speakers.view.js weightDimsIpRow 참조).
 * @param {HTMLElement} root 버튼/값을 담고 있는 컨테이너 (모달 전체)
 */
function wireWeightUnitSwitch(root) {
  const btns = root.querySelectorAll("[data-weight-unit]");
  if (!btns.length) return;
  const kgEl = root.querySelector("[data-weight-kg]");
  const lbEl = root.querySelector("[data-weight-lb]");
  if (!kgEl || !lbEl) return;
  btns.forEach(btn => {
    btn.onclick = () => {
      const unit = btn.dataset.weightUnit;
      btns.forEach(b => b.classList.toggle("is-active", b === btn));
      kgEl.hidden = unit !== "kg";
      lbEl.hidden = unit !== "lb";
    };
  });
}

/**
 * 모달 이미지 영역(.modal__media)에 마우스 위치 기준 확대(zoom) 인터랙션을
 * 연결한다. mousemove 로 커서 위치를 읽어 CSS 변수 --zoom-x/--zoom-y (0~100%)
 * 로 넘기면, modal.css 의 img:hover 규칙이 transform-origin 을 이 변수로
 * 읽어 커서가 있는 지점을 중심으로 확대한다. 뷰가 없는 모달(.modal__media
 * 자체가 없는 항목)은 querySelector 가 null 을 반환해 아무 일도 하지 않는다.
 * @param {HTMLElement} root 모달 전체 컨테이너
 */
function wireMediaZoom(root) {
  const media = root.querySelector(".modal__media");
  if (!media) return;
  media.addEventListener("mousemove", e => {
    const rect = media.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    media.style.setProperty("--zoom-x", `${x}%`);
    media.style.setProperty("--zoom-y", `${y}%`);
  });
}

/**
 * Configurations 표(스피커 기준, configsBySpeakerTableHTML)의 +N 토글
 * 버튼을 연결한다 — 클릭 시 같은 data-toggle-group 을 가진 하위 행(--sub)
 * 을 펼치거나 접는다. 버튼이 대표 행(match-table__row--clickable) 안에
 * 중첩돼 있으므로, 버튼 클릭이 행의 Split View 이동 클릭으로 버블링되지
 * 않도록 stopPropagation 한다. root 범위로만 탐색하므로 pane 1/pane 2 에
 * 같은 토글 그룹 id 가 있어도 서로 간섭하지 않는다.
 * (amplifiers.controller 전용이었던 것을 pane 공통으로 승격 — 0-1)
 * @param {HTMLElement} root 배선 대상 컨테이너
 */
function wireConfigsToggle(root) {
  root.querySelectorAll(".match-table__toggle-btn").forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const groupId = btn.dataset.toggleGroup;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const members = root.querySelectorAll(`[data-toggle-member="${groupId}"]`);
      members.forEach(row => { row.hidden = expanded; });
      btn.setAttribute("aria-expanded", String(!expanded));
      btn.textContent = expanded ? `+${members.length}` : "−";
    };
  });
}

/**
 * 모달 안의 섹션 통째 접기/펼치기 버튼([data-section-toggle])을 활성화한다.
 * wireConfigsToggle(표 안의 개별 행 펼치기)과 달리, 이건 "Configurations"
 * 같은 section-label 자체를 클릭하면 그 아래 표 전체(data-section-toggle-body)
 * 가 통째로 열리고 닫히는 더 상위 레벨의 토글이다(사용자 요청 — 앰프 모달
 * Configurations 를 기본 접힘 상태로). 버튼이 없는 모달은 querySelectorAll 이
 * 빈 NodeList 를 반환해 아무 일도 하지 않는다.
 * @param {HTMLElement} root 배선 대상 컨테이너
 */
function wireSectionToggle(root) {
  root.querySelectorAll("[data-section-toggle]").forEach(btn => {
    const key = btn.dataset.sectionToggle;
    const bodyEl = root.querySelector(`[data-section-toggle-body="${key}"]`);
    if (!bodyEl) return;
    btn.onclick = () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      bodyEl.hidden = expanded;
    };
  });
}

/**
 * 모달 닫기 (배경 스크롤 잠금 해제 포함).
 * Split View 가 열려 있었다면 함께 정리 — 닫혔다 다시 열릴 때 이전 pane 구조가
 * 남아 있다가 다음 모달과 뒤섞여 보이는 문제를 방지한다.
 */
export function closeModal() {
  modalBgEl.classList.remove("modal-overlay--open");
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  if (modalEl) {
    modalEl.classList.remove("modal--split");
    const splitView = modalEl.querySelector(".split-view");
    if (splitView) {
      // pane1(head+body)만 다시 모달 최상위로 꺼내고 나머지(.split-view, pane2)는 제거.
      const pane1 = splitView.querySelector(".split-view__pane");
      const pane2 = splitView.querySelector(".split-view__pane:nth-child(2)");
      // [커스텀 스크롤바] pane1/pane2 기준으로 body 에 붙어있던 트랙은
      // pane 자체가 사라지면 고아로 남으므로 함께 정리한다.
      removeScrollbarTrack(pane1);
      removeScrollbarTrack(pane2);
      if (pane1) {
        while (pane1.firstChild) modalEl.appendChild(pane1.firstChild);
      }
      splitView.remove();
    }
    removeScrollbarTrack(modalEl);
  }
  // [모바일] 모달을 완전히 닫으면 뒤로가기 스택도 함께 비운다 — 다음에
  // 다른 카드를 열었을 때 이전 세션의 스택이 남아있지 않도록.
  mobileStack = [];
  currentContent = null;
}

/**
 * 현재 모달 본체 요소 반환 — split-view.js 가 pane 래핑에 사용.
 * @returns {HTMLElement}
 */
export function getModalEl() {
  return modalEl;
}

/**
 * 공용 닫기(X) 아이콘 SVG 문자열.
 * @returns {string}
 */
export function closeIconSVG() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>`;
}
