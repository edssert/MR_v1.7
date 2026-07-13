# CLAUDE.md
Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.
**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.
## 1. Think Before Coding
**Don't assume. Don't hide confusion. Surface tradeoffs.**
Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.
## 2. Simplicity First
**Minimum code that solves the problem. Nothing speculative.**
- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.
Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.
## 3. Surgical Changes
**Touch only what you must. Clean up only your own mess.**
When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.
When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.
The test: Every changed line should trace directly to the user's request.
## 4. Goal-Driven Execution
**Define success criteria. Loop until verified.**
Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"
For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```
Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.
---
**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---
# 프로젝트 고유 규칙 (MR_v1.2)

## 원문 스펙 보관 (필수, 매번)
신규 제품 스펙 텍스트를 받으면:
1. `raw-data/raw-specs/<mk>/speakers/<series>/<model>.md` 또는
   `.../amplifiers/<type>/<model>.md`에 원문 그대로(가공/요약 없이) 저장.
2. 데이터 파일(`js/domains/.../data.js`)에 구조화 반영.
3. 둘 다 해야 완료. 데이터만 채우고 끝내지 않는다.
상세 관례: `raw-data/raw-specs/README.md`.

## 원본 이미지 아카이빙 (필수, 매번)
사용자가 Upload 폴더 등으로 제품 사진 원본을 제공하면:
1. `raw-data/raw-images/<mk>/speakers/<series>/`에 원본 파일을 그대로(또는
   최소한의 파일명 정리만 해서) 복사 보관 — raw-specs와 동일한 폴더
   계층(제조사>speakers>시리즈)을 따른다.
2. 실제 사이트에 쓰는 최적화본(webp, 배경/뱃지 제거 등 가공 포함)은
   기존대로 `assets/img/speakers/<mk>/<series>/`에 저장.
3. 원본 아카이빙 + 가공본 반영 둘 다 해야 완료.

## 응답 스타일 (필수)
- 작업 설명은 길게 늘어놓지 않고 핵심만 간결하게. 과정 나열/재설명 대신
  결과와 변경사항 위주로 짧게 전달한다.
- 조사/디버깅 중 원인을 추론하는 과정을 채팅에 장황하게 서술하지 않는다.
  최종적으로 찾은 원인과 수정 내용만 짧게 보고한다.

## 작업 중 파일 가시성 (필수)
- outputs(임시 작업 폴더)에서 초안 작성 후 최종본만 실제 프로젝트 폴더로
  복사하는 방식은 유지하되, 파일을 옮길 때마다 그 사실과 실제 경로를
  짧게라도 언급한다("~로 복사했습니다" 등). 사용자가 중간 결과물을
  못 보고 지나치지 않도록.
- 새 파일(md/데이터 파일 등)을 만들거나 옮긴 뒤에는 실제로 그 경로에
  존재하는지 `ls`로 확인하고, 사용자가 오탈자/누락을 바로 캐치할 수 있게
  만든 파일을 대충 요약하지 말고 그대로 보여주거나 present_files로 공유한다.
- **예외: 이미지 파일은 present_files로 채팅에 띄우지 않는다.** 사용자가
  VS Code Live Server로 사이트를 실시간으로 띄워놓고 직접 눈으로 확인하는
  방식으로 작업하므로, 이미지는 처리 후 실제 경로(raw-images/assets 등)에
  잘 저장됐는지 `ls`로만 확인하고 넘어간다. md/데이터 파일(js, md 등
  텍스트 기반 산출물)은 기존 규칙대로 계속 보여주거나 공유한다.

## CHANGELOG 작성 (필수)
- 루트 `CHANGELOG.md`는 비전문가용 요약본이다. 파일명/CSS 클래스/함수명
  등 구현 세부사항은 적지 않고, "무엇이 좋아졌는지"를 일상 언어로 짧게
  적는다.
- `raw-data/legacy/CHANGELOG-dev-detailed.md`는 파일명/CSS 클래스/함수명 등
  구현 세부사항을 포함한 개발자용 상세 기록이다.
- **두 CHANGELOG 모두 세션 진행 중에는 건드리지 않고, 세션이 완전히
  끝나는 시점(사용자가 대화를 마무리하거나 명시적으로 요청할 때) 딱
  한 번만 그날 작업 전체를 모아 각 파일 최상단에 새 날짜 섹션으로
  추가한다.** 작업 하나 끝날 때마다 중간중간 갱신하지 않는다.

## 작업 순서 (필수)
- UI/기능(앱) 개발 작업은 그 작업이 다루는 데이터가 먼저 채워진 뒤에
  시작한다. 예: 프리셋 호버 툴팁 UI(#11)를 만들기 전에 그 툴팁이 보여줄
  주파수/컨투어 데이터(#9)부터 채운다.
- 착수 전 관련 카드/필드에 `null`이나 미확인 항목이 있는지 먼저 점검하고,
  있으면 데이터부터 보강한 다음 UI/기능 작업으로 넘어간다.

## 출처 기록 및 교차검증 (필수)
- 사용자가 채팅으로 붙여넣는 제조사 공식 홈페이지 텍스트는 페이지 종류가
  최소 두 가지다: (1) 제품 개요(Overview) 페이지의 대표 스펙 요약 —
  "Fixed Install / 2-way passive.../ Max SPL / Bandwidth / Directivity /
  Dimensions" 정도의 짧은 목록, (2) Discovery(상세) 페이지의 Full spec —
  "Electroacoustic specs / Physical specs" 형식(Usable bandwidth, Maximum
  SPL, Nominal directivity, Connectors, Rigging and handling, Dimensions,
  Weight (net), Cabinet, Front, Finish, IP 순서)의 훨씬 상세한 전체 목록.
  raw-data/raw-specs의 해당 모델 md에 "출처 N: 사용자가 채팅으로 제공한
  L-Acoustics 공식 홈페이지 텍스트 (Overview 페이지 대표 스펙)" 또는
  "(Discovery/상세 페이지의 Full spec)"처럼 어느 페이지 종류인지 구분해
  원문 그대로 기록만 해두면 된다 — 어느 쪽이든 docx보다 자동으로 우선하는
  것은 아니다.
- **어느 출처든 값 하나를 최종 채택하기 전에 반드시 docx 등 다른 확보된
  출처와 교차검증한다.** 값이 다르면 임의로 하나를 취사선택하지 말고,
  모든 출처를 병기한 뒤 어느 값을 채택했는지와 그 판단 근거(계산 검증,
  다른 출처와의 일치 여부 등)를 각주로 남긴다. 판단이 애매하면 사용자에게
  묻는다.
- 사용자가 제공한 텍스트/문서에 등장하는 제품명이 기존 데이터에 없는
  별도 SKU(예: 같은 제품의 in-wall/in-ceiling 변형처럼 물리 스펙 일부만
  다른 경우)일 수 있으니, 이름과 스펙(특히 weight)이 기존 카드와 정확히
  일치하는지 먼저 확인한 뒤 다르면 새 카드로 분리한다.

## 사용자 선호
- 카드 태그: 짧은 crossover 태그(active/16-channel)는 이름 옆 줄, 긴 Type
  라벨은 config 줄 아래.
- 불확실한 배치(Front/Rear 순서 등)는 과도한 재확인 대신 일단 반영 후
  피드백으로 정정.
- 이미지: 사용자가 Photoroom 등으로 배경 제거한 파일 제공 시 그대로 채택
  (자체 폴리곤 마스크보다 우선).
- 이미지에 "Best of Show" 등 어워드/수상 뱃지가 함께 찍혀 있으면 항상
  크롭해서 제거하고 제품만 남긴다. 매번 물어보지 않고 자동으로 처리.
- 큰 디자인 변경은 신중히, 되돌리기 쉬운 상태 확보 후 진행.

## 모달/스크롤 관련 기술 노트 (v1.7에서 확인된 함정, 재발 방지용)
- **webkit 커스텀 스크롤바의 한계**: `::-webkit-scrollbar-thumb`는 항상
  "트랙 길이 × (가시영역/전체콘텐츠)" 비율로 브라우저가 강제 렌더링한다.
  margin/min-height/`background-clip`+`border` 등 어떤 CSS 트릭을 써도
  실제 점유 길이는 줄일 수 없다(칠해진 색만 줄어들 뿐). 막대 길이를
  자유롭게(짧게) 고정해야 하면 네이티브 스크롤바를 완전히 숨기고
  (`scrollbar-width: none` + `::-webkit-scrollbar{display:none}`) JS로
  직접 그리는 커스텀 오버레이가 유일한 방법이다(js/ui/modal.js
  wireScrollbarAutoShow 참고).
- **스크롤 컨테이너 안에 커스텀 스크롤바 DOM을 두지 않는다**: position이
  sticky/absolute/fixed든 상관없이, 스크롤 컨테이너의 자식으로 있으면
  scrollHeight 계산에 얽혀 스크롤이 실제 콘텐츠보다 훨씬 아래까지
  내려가는 문제가 생길 수 있다. 스크롤과 무관한 오버레이는
  `document.body`에 직접 붙이고 `getBoundingClientRect()`로 매번 화면
  좌표를 계산해 `position: fixed`로 배치한다.
- **`scrollTop = 0` 리셋은 요소가 보이게 된 *뒤*에 대입한다**: 오버레이가
  아직 `display:none`인 시점에 `scrollTop`을 설정하면, Chrome이 나중에
  다시 보이는 순간 이전 스크롤 위치를 복원해버려 리셋이 무효화될 수 있다.
- **애니메이션은 "매번 재생"과 "최초 1회만" 클래스를 분리한다**: 재사용되는
  고정 DOM 요소(모달 등)에 `animation`을 기본 규칙으로 걸어두면, 그
  요소의 클래스가 바뀔 때마다(관련 없는 상태 토글이라도) 브라우저가
  애니메이션을 재생시킬 수 있다. 최초 진입 시에만 재생돼야 하는
  애니메이션은 전용 modifier 클래스로 분리해 그 진입 함수에서만 붙인다.
- **`document.body.style.overflow = "hidden"`만으로 배경 스크롤이 안
  막힐 수 있다**: `html` 자체에 `overflow-y: scroll` 등이 전역으로
  걸려있으면(이 프로젝트는 스크롤바 자리 고정을 위해 걸어둠) body만
  잠가서는 소용없다 — `document.documentElement.style.overflow`도 함께
  잠가야 한다.
- **DOM 노드를 다른 부모로 옮길 때(`appendChild`/`insertBefore`) 그 안에
  JS가 동적으로 붙여둔 보조 DOM(커스텀 스크롤바, 오버레이 등)이 함께
  섞여 들어가지 않도록 미리 제거·재생성한다** — 옮겨진 보조 DOM은 원래
  기준으로 계산된 값이라 새 위치에서 잘못된 좌표/크기로 보인다.

## 해결됨 — DO3WFILL/SP-Y1 등 흰 배경 다이어그램 뷰 전환 시 실루엣 (v1.7 세션3에서 해결)
`js/ui/modal.js`의 `wireViewSwitch`(Front↔Signal Flow 등 뷰 전환 버튼)에서
흰 배경 다이어그램(`modal__img--whitebg`, DO3WFILL/SP-Y1 등)으로 전환할 때
사각형 실루엣이 보이던 버그. 그라디언트/크로스페이드 타이밍 동기화 등
여러 시도가 모두 실패한 후, **근본적으로 다른 접근으로 해결**:
- **핵심 아이디어(사용자 지시)**: 다크/라이트 모드나 그라디언트 매칭을
  신경 쓸 필요 없이, 원본 이미지 자체의 흰색 배경을 캔버스 확장으로
  넉넉히 늘려서 저장하고, hover/전환 시 카드·모달 배경색도 그냥 흰색
  하나로 통일한다 — "사진과 배경이 별개로 움직이는" 방식 자체를 없앤다.
- 이미지 재생성 시 표시 크기(카드 132px)보다 훨씬 큰 해상도(400px)로
  다이어그램을 리사이즈한 뒤 넓은 흰 캔버스 중앙에 붙여넣어야 화질
  저하 없이 여백을 확보할 수 있다(처음엔 132px로 만들어 화질 열화 발생).
- CSS: `.card__media`/`.modal__media-wrap`에 `:has(img.card__img--whitebg)`
  등으로 hover/전환 시 배경을 그라디언트 대신 `#fff`로 전환,
  `background-color`와 `background-image`를 분리해 색상 부분만 트랜지션
  (그라디언트 자체는 애니메이션 불가하므로).
- whitebg 이미지의 `transform-origin`은 반드시 `50% 50%`로 고정 —
  기본 규칙의 마우스 추적 zoom 변수(`--zoom-x/y`)를 상속받으면 커서
  위치에 따라 이미지가 드리프트하고 mouseleave에도 복귀하지 않는다.
- 모델별로 확대 배율/위치가 다르게 필요하면(SP-Y1이 DO3WFILL보다 더
  확대 필요) `whitebg`(base) + `whitebg2`(override) 2단계 클래스로 분리,
  CSS 파일에서 `whitebg2` 규칙을 `whitebg` 규칙보다 **아래에** 선언해야
  같은 특이도에서 override가 적용된다(순서 의존).
- `.card__media`에 `overflow: hidden` 필수 — whitebg2 확대 이미지가
  카드 하단 텍스트 영역까지 침범하는 것을 방지.

## 사례 — 스펙 필드 하위호환 없는 세대차 교차검증 (K-series connectors, v1.7 세션3)
같은 "커넥터 2개" 스펙이라도 세대/커넥터 종류에 따라 실제 배선 방식이
다를 수 있다는 사례. K1/K2(8-point PA-COM)는 원문에 "IN 1 + LINK 1"로
역할이 고정 명시되어 있었지만, K3/Kara II/KIVA II(4-point speakON)는
원문(docx, 사용자 채팅 스펙시트)엔 개수(2×)만 있고 역할 구분이 없었다.
사용자가 "아마 다른 것도 2개면 IN/LINK 구조일 것"이라 추정했지만, 공식
오너스 매뉴얼(manualslib.com)을 직접 열어보니 speakON 계열은 "두 포트
모두 IN 또는 LINK 어느 쪽으로도 상호교환 가능"이라고 명시되어 있어
추정과 실제가 달랐다. **패턴**: 스펙 문서에 없는 세부사항을 사용자가
합리적으로 추정해도, 그 추정이 다른 세대/부품 방식에도 그대로 적용되는지
는 반드시 1차 자료(공식 매뉴얼)로 개별 확인 후 보고해야 한다 — 유사해
보이는 스펙끼리 일반화하지 않는다.
