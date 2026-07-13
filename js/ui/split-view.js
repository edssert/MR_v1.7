/**
 * @module ui/split-view
 * 나란히 비교(Side-by-Side) Split View.
 *
 * 동작 원리: 열려 있는 모달에 .modal--split 변경자를 토글하고, 기존
 * 모달 내용(.modal__head + #modal-body-main)을 pane 1 로 감싼 뒤 그 옆에
 * pane 2 를 추가한다. 기존 모달 DOM 은 파괴하지 않으므로 원본 카드의
 * 상태가 그대로 유지된다. 좁은 화면에서는 CSS 가 세로 스택으로 전환.
 *
 * 관련 CSS: css/components/split-view.css (.split-view, .modal--split)
 */
import { getModalEl, wirePaneInteractions, closeModal, isMobileLayout, pushMobileModal, removeScrollbarTrack } from "./modal.js";

/**
 * Split View pane 2 열기 (pane 2 가 이미 있으면 교체).
 *
 * pane1(기존 모달)과 pane2(Split View 로 새로 여는 상세)가 완전히 동일한
 * 헤더 구조(.modal__head: eyebrow + .modal__title + 우측 상단 고정
 * .modal__close)를 쓰도록, headHTML 을 각 도메인의 modalBodyHTML() 이
 * 만드는 head 마크업을 그대로 받는다 — 이전에는 pane2 만 별도의 축소된
 * 헤더(.split-view__pane-head, 한 줄짜리 작은 텍스트)를 썼는데, pane1 은
 * eyebrow(제조사·부가정보) 위에 큰 제목이 오는 2단 구조라 좌우 X 버튼
 * 위치와 제목 표기 방식이 서로 달라 보였다. 이제 두 pane 모두 같은
 * .modal__head 마크업을 쓰므로 X 버튼이 항상 각 pane 우측 상단 끝에
 * 동일한 오프셋으로 고정되고, 제목 표기 방식(eyebrow/큰 제목)도 통일된다.
 *
 * paneId 로 "같은 대상을 다시 클릭하면 닫기" 토글 동작을 지원한다 — 예를
 * 들어 앰프 모달에서 SB10i 칩을 클릭해 pane 2 에 SB10i 가 열린 상태에서
 * SB10i 를 다시 클릭하면(오른쪽 위 X 버튼까지 마우스를 옮기지 않아도)
 * pane 2 가 닫힌다. 이미 열려있는 pane 2 의 id 는 container 의
 * dataset.paneId 에 저장해 추적한다.
 * @param {Object} opts
 * @param {string} opts.headHTML pane 2 헤더 마크업 — 각 도메인
 *   modalBodyHTML() 이 반환하는 head 를 그대로 전달(.modal__head 구조,
 *   [data-modal-close] 버튼 포함).
 * @param {string} opts.paneColor pane 2 포인트 색 (CSS 변수 --mfr 로 주입)
 * @param {string} opts.bodyHTML pane 2 본문 마크업
 * @param {string} [opts.paneId] pane 2 로 여는 대상의 고유 id(스피커/앰프
 *   id 등). 이미 이 id 로 pane 2 가 열려 있으면 열지 않고 대신 닫는다.
 * @param {Function} [opts.onMounted] pane 2 DOM 이 붙은 직후 pane 2 요소를
 *   인자로 호출되는 콜백 (선택) — 도메인별 추가 배선(칩 클릭 등)에 사용.
 *   공통 인터랙션(뷰 전환·단위 토글·줌·+N 토글)은 여기서 이미 배선되므로
 *   콜백에서 다시 할 필요 없다. [개선사항 0-1]
 * @param {Function} [opts.onClose] pane 2 닫기 시 콜백 (선택)
 * @returns {boolean} pane 2 를 열었으면 true, (토글로) 닫았으면 false
 */
export function openSplitPane({ headHTML, paneColor, bodyHTML, paneId, onMounted, onClose }) {
  // [모바일] 좁은 화면은 나란히 보기 대신 "전체 교체 + 뒤로가기" 방식을
  // 쓴다(사용자 요청 — 모바일에서 Split View 대신 그냥 앰프 모달이 바로
  // 열리는 것처럼). paneId 토글-닫기(같은 대상 재클릭 시 pane2 닫기)는
  // 나란히 보기 개념 자체가 없는 이 모드에서는 의미가 없어 생략한다.
  if (isMobileLayout()) {
    pushMobileModal(paneColor, headHTML, bodyHTML, onMounted);
    return true;
  }
  const modalEl = getModalEl();
  let container = modalEl.querySelector(".split-view");

  // 이미 같은 대상으로 pane 2 가 열려 있으면 여닫이 토글 — 다시 열지 않고 닫는다.
  if (container && paneId && container.dataset.paneId === paneId) {
    closeSplitPane2(modalEl, container);
    if (onClose) onClose();
    return false;
  }

  const isFirstOpen = !container;
  if (isFirstOpen) {
    // 첫 진입: 현재 모달의 자식 전체를 pane 1 로 감싼다.
    // [버그 수정] 이전에는 .modal__head 와 #modal-body-main 만 골라 옮겼는데,
    // 그 사이에 있는 이미지 영역(.modal__media / .modal__media-wrap)은
    // 옮겨지지 않은 채 modalEl.innerHTML = "" 로 파괴돼 — 스피커 모달에서
    // Amplifier Matching 의 앰프 행을 클릭하면 사진이 사라졌다. 모달의
    // 모든 자식을 DOM 순서 그대로 이동시키면 어떤 구조가 와도 안전하다.
    // [사용자 요청 — 스크롤 위치 유지] 자식을 옮기기 전에 지금까지
    // modalEl(단일 모달 상태의 스크롤 컨테이너, modal.css 참고) 이 갖고
    // 있던 스크롤 위치를 기억해뒀다가, pane1(다음 스크롤 컨테이너가 될
    // 요소)에 그대로 복원한다 — 안 하면 스크롤 주체가 바뀌는 순간 항상
    // 0(최상단)으로 리셋되어 보였다.
    const prevScrollTop = modalEl.scrollTop;
    // [버그 수정 — 커스텀 스크롤바] wireScrollbarAutoShow(ui/modal.js) 가
    // modalEl 기준으로 만들어 body 에 붙여둔 트랙은 modalEl 이 더 이상
    // 스크롤 컨테이너가 아니게 되면(pane1 로 대체) 고아 상태로 화면에
    // 남는다 — pane1 은 아래에서 자기 몫의 새 트랙을 따로 받으므로, 옛
    // 것은 미리 제거한다.
    removeScrollbarTrack(modalEl);

    const pane1 = document.createElement("div");
    pane1.className = "split-view__pane";
    while (modalEl.firstChild) pane1.appendChild(modalEl.firstChild);

    container = document.createElement("div");
    container.className = "split-view";
    container.appendChild(pane1);
    modalEl.appendChild(container);
    modalEl.classList.add("modal--split");
    pane1.scrollTop = prevScrollTop;
    // [커스텀 스크롤바] pane1 자신을 기준으로 한 새 오버레이 막대를
    // 만들어준다 — wirePaneInteractions 의 다른 배선(뷰 전환 등)은 이미
    // pane1 이 갖고 있던 원본 이벤트라 다시 호출해도 onXxx 재할당으로
    // 안전하게 덮어써진다.
    wirePaneInteractions(pane1);
  }

  // 기존 pane 2 제거 후 새로 추가 (다른 항목 클릭 시 교체 동작)
  const oldPane2 = container.querySelector(".split-view__pane:nth-child(2)");
  if (oldPane2) oldPane2.remove();

  if (paneId) container.dataset.paneId = paneId; else delete container.dataset.paneId;

  const pane2 = document.createElement("div");
  // [사용자 요청] pane 2 가 이미 열려있는 상태에서 다른 항목으로 "교체"될
  // 때는(예: Split View 안에서 앰프를 바꿔가며 확인) 모달 자체의 폭 확장이
  // 없으므로 최초 오픈 때의 .22s 지연(모달 확장 트랜지션과 맞추기 위한
  // 것)이 불필요해 체감상 느리게 느껴졌다 — 최초 오픈에만
  // split-view__pane--enter(지연 있는 페이드인)를 쓰고, 교체 시에는 지연
  // 없는 split-view__pane--swap 을 쓴다.
  pane2.className = `split-view__pane ${isFirstOpen ? "split-view__pane--enter" : "split-view__pane--swap"}`;
  pane2.style.setProperty("--mfr", paneColor);
  pane2.innerHTML = headHTML + bodyHTML;
  container.appendChild(pane2);
  const closeBtn = pane2.querySelector("[data-modal-close]");
  if (closeBtn) {
    closeBtn.onclick = () => {
      closeSplitPane2(modalEl, container);
      if (onClose) onClose();
    };
  }
  // [개선사항 0-1] pane 2 공통 인터랙션 배선 — 이전에는 openModalWith()
  // 에서만 배선돼 pane 2 의 뷰 전환·mm/in·줌·+N 토글이 전부 무반응이었다.
  wirePaneInteractions(pane2);
  if (onMounted) onMounted(pane2);
  return true;
}

/**
 * Split View 가 열린 상태에서 pane 1(왼쪽, 원래 모달) 내용을 교체한다.
 * pane 2(오른쪽) 안에서 다른 항목을 클릭했을 때 "왼쪽도 그 항목으로
 * 바뀌는" 동작에 사용 — pane 2 는 그대로 두고 pane 1 만 새로 그린다.
 * @param {Object} opts
 * @param {string} opts.headHTML 새 pane 1 헤더 마크업
 * @param {string} opts.paneColor 새 pane 1 포인트 색 (--mfr)
 * @param {string} opts.bodyHTML 새 pane 1 본문 마크업
 * @param {Function} [opts.onMounted] pane 1 DOM 이 붙은 직후 pane 1 요소를
 *   인자로 호출되는 콜백(도메인별 추가 배선용).
 * @returns {boolean} pane 1 을 교체했으면 true, Split View 가 열려있지 않으면 false
 */
export function replaceSplitPane1({ headHTML, paneColor, bodyHTML, onMounted }) {
  // [모바일] Split View 자체가 없는 모드이므로 "pane1 교체"라는 개념도
  // 없다 — 지금 보이는 화면(이전에 전체교체로 열린 것) 역시 새 대상으로
  // 전체교체하고 스택에 쌓는다. openSplitPane 의 모바일 분기와 동일한 처리.
  if (isMobileLayout()) {
    pushMobileModal(paneColor, headHTML, bodyHTML, onMounted);
    return true;
  }
  const modalEl = getModalEl();
  const container = modalEl.querySelector(".split-view");
  if (!container) return false;
  const pane1 = container.querySelector(".split-view__pane:first-child");
  if (!pane1) return false;
  pane1.style.setProperty("--mfr", paneColor);
  pane1.innerHTML = headHTML + bodyHTML;
  // pane1 의 X 버튼은 기존과 동일하게 모달 전체 닫기(openModalWith 가 최초
  // 연결한 것과 같은 동작) — Split View 해제가 아니라 닫기.
  const closeBtn = pane1.querySelector("[data-modal-close]");
  if (closeBtn) closeBtn.onclick = closeModal;
  wirePaneInteractions(pane1);
  if (onMounted) onMounted(pane1);
  return true;
}

/**
 * pane 2 를 제거하고 pane1(head+body)을 .split-view 래핑에서 꺼내 모달
 * 최상위 자식으로 되돌린다 — X 버튼 클릭과 paneId 토글 닫기가 이 로직을
 * 공유해 두 경로 모두 동일하게 깨끗한 DOM 상태로 복귀한다(모달을 닫았다
 * 다시 열 때 .split-view 잔재가 남지 않도록).
 * @param {HTMLElement} modalEl
 * @param {HTMLElement} container .split-view 컨테이너
 */
function closeSplitPane2(modalEl, container) {
  const pane2 = container.querySelector(".split-view__pane:nth-child(2)");
  if (pane2) { removeScrollbarTrack(pane2); pane2.remove(); }
  const pane1 = container.querySelector(".split-view__pane");
  // [버그 수정 — 스크롤 위치 유지] 반드시 modal--split 클래스를 떼기
  // *전에* scrollTop 을 읽어야 한다. 클래스를 먼저 떼면 .modal 이 그
  // 순간 단일 모달 CSS(width:628px 등, modal.css)로 즉시 리레이아웃되고,
  // 그 안의 pane1 은 아직 .split-view 안에 있어 크기가 뒤틀리면서
  // scrollHeight <= clientHeight 가 돼버려(스크롤 불가능한 상태) scrollTop
  // 이 읽는 시점에 이미 0으로 꺾여 있었다 — 이전 시도에서 순서가 이렇게
  // 잘못돼 있었다.
  const prevScrollTop = pane1 ? pane1.scrollTop : 0;
  // [커스텀 스크롤바] pane1 자신 기준으로 body 에 붙어있던 트랙은 modalEl
  // 로 넘겨받으면 잘못된 값으로 남는다 — 옮기지 않고 미리 제거, modalEl
  // 은 아래에서 자기 몫의 새 트랙을 받는다.
  removeScrollbarTrack(pane1);
  modalEl.classList.remove("modal--split");
  if (pane1) {
    while (pane1.firstChild) modalEl.insertBefore(pane1.firstChild, container);
  }
  container.remove();
  // 자식을 modalEl 로 다 옮긴 뒤, modalEl 이 이제 스크롤 컨테이너다.
  modalEl.scrollTop = prevScrollTop;
  // modalEl 자신을 기준으로 한 새 오버레이 막대를 다시 만든다.
  wirePaneInteractions(modalEl);
}

/** Split View 해제 — pane 2 제거 + 모달 폭 원복. 외부(모달 전체 닫기 등)에서 호출. */
export function closeSplitView() {
  const modalEl = getModalEl();
  const container = modalEl.querySelector(".split-view");
  if (container) { closeSplitPane2(modalEl, container); return; }
  modalEl.classList.remove("modal--split");
  const pane2 = modalEl.querySelector(".split-view__pane:nth-child(2)");
  if (pane2) pane2.remove();
}
