/**
 * @module main
 * 앱 진입점(entry point).
 *
 * 아키텍처 요약:
 *   - 각 도메인(Speaker/Amplifier/DSP/Software/Brand)은 자기 폴더의
 *     <이름>.controller.js 안에서 mount/build/render/모달 수명주기를 전부
 *     소유하고, import 되는 순간 라우터에 스스로 등록된다.
 *   - 이 파일은 도메인 controller 들을 import 하고 모달/내비/라우터를
 *     부팅만 한다.
 *
 * 새 도메인(탭) 추가 절차:
 *   1) js/domains/<이름>/ 폴더에 controller/schema/view/data 4개 파일 생성
 *   2) 아래에 initXxxDomain() import + 호출 한 줄씩 추가
 *   3) index.html 의 <main> 에 <div id="view-<이름>" hidden></div> 추가
 *   — 이것으로 끝. 다른 파일은 수정할 필요 없음 (자세한 내용: ARCHITECTURE.md)
 */
import { initRouter } from "./core/router.js";
import { renderNav } from "./ui/nav.js";
import { initModal } from "./ui/modal.js";
import { initTheme } from "./ui/theme.js";
import { initMediaToggle } from "./ui/media-toggle.js";
import { initStickyHeader } from "./ui/sticky-header.js";
import { $ } from "./core/dom.js";

import { initSpeakersDomain } from "./domains/speakers/speakers.controller.js";
import { initAmplifiersDomain } from "./domains/amplifiers/amplifiers.controller.js";
import { initDspsDomain } from "./domains/dsps/dsps.controller.js";
import { initAccessoriesDomain } from "./domains/accessories/accessories.controller.js";
import { initSoftwareDomain } from "./domains/software/software.controller.js";
import { initBrandDomain, getBrandNames } from "./domains/brand/brand.controller.js";
// [사용자 요청] 카드/모달의 각 블록이 실제로 어떤 CSS 클래스명에 대응하는지
// 확인하기 위한 개발용 라벨링 탭 — 정식 도메인이 아니라 speakers 데이터
// 샘플 1개를 재사용하는 정적 뷰(js/domains/test/test.controller.js 참고).
import { initTestDomain } from "./domains/test/test.controller.js";

initModal();

initSpeakersDomain();
initAmplifiersDomain();
initDspsDomain();
initAccessoriesDomain();
initSoftwareDomain();
initBrandDomain();
initTestDomain();

// [사용자 요청] 사진/다크모드 토글 버튼이 이제 topbar 가 아니라 renderNav()
// 가 그리는 topnav__tools 안에 있으므로, 버튼을 DOM 에서 찾아 연결하는
// initTheme/initMediaToggle 은 반드시 renderNav 이후에 호출해야 한다
// (이전 순서대로 두면 #theme-toggle/#media-toggle 이 아직 없어 null).
renderNav($("#topnav"));
initTheme($("#theme-toggle"));
initMediaToggle($("#media-toggle"));
initRouter("speakers");

// 상단바 부제: 데이터에 포함된 전체 브랜드 목록 — BRANDS 데이터로 구동되므로
// 새 제조사(JBL, Coda, Clair, ...)를 추가해도 index.html 을 손댈 필요가 없다.
const subtitleEl = $("#brand-subtitle");
if (subtitleEl) subtitleEl.textContent = getBrandNames().join(" · ");

// [사용자 요청] topnav(도메인 탭) 상단 고정 — 실제 렌더링된 높이를 측정해
// controls(검색/필터 바)가 그 바로 아래 이어 붙도록 한다.
initStickyHeader($("#topnav"));
