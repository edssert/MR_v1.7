/**
 * @module domains/brand/controller
 * Brand 탭 컨트롤러 — 카드/모달 없이, 한 번에 브랜드 하나의 전체 페이지
 * 섹션만 보여준다. [사용자 요청] 브랜드를 전부 세로로 나열하던 이전 방식
 * 대신, 상단의 텍스트+언더라인 셀렉터(박스 없음)로 브랜드를 전환하는
 * 방식으로 변경 — 브랜드가 3개뿐이라 검색/정렬 컨트롤은 실익이 적어 제거.
 *
 * 구성 요소:
 *   brand.data.js   — 데이터
 *   brand.schema.js — 표시 순서/제조사 맵 정의
 *   brand.view.js   — 페이지 섹션 마크업 (순수 함수)
 */
import { $, esc } from "../../core/dom.js";
import { registerDomain } from "../../core/router.js";
import { refreshNavCounts } from "../../ui/nav.js";
import { renderLegend } from "../../ui/legend.js";

import { BRANDS } from "./brand.data.js";
import { BRAND_MFR, BRAND_MK_ORDER } from "./brand.schema.js";
import { pageHTML as brandPageHTML } from "./brand.view.js";

let activeMk = null;

/** 탭 활성화: 최초 1회 UI 빌드 후 렌더 */
function mountBrand() {
  renderLegend(BRANDS, BRAND_MK_ORDER, BRAND_MFR, d => d.mfr);
  const wrap = $("#view-brand");
  wrap.hidden = false;
  if (!wrap.dataset.built) {
    wrap.dataset.built = "1";
    if (!activeMk) activeMk = BRANDS[0]?.mfr || null;
    buildBrandUI(wrap);
  }
  renderBrand();
}

/** 탭 비활성화: 뷰 숨김 */
function unmountBrand() { $("#view-brand").hidden = true; }

/**
 * 브랜드 전환 셀렉터(텍스트+언더라인) + 결과 영역 골격을 1회 빌드한다.
 * @param {HTMLElement} wrap #view-brand 컨테이너
 */
function buildBrandUI(wrap) {
  const tabsHTML = BRAND_MK_ORDER
    .filter(mk => BRANDS.some(b => b.mfr === mk))
    .map(mk => `<button class="brand-switch__tab" type="button" data-mk="${mk}" style="--mfr:${BRAND_MFR[mk].color}">${esc(BRAND_MFR[mk].name)}</button>`)
    .join("");

  wrap.innerHTML = `
    <div class="content-wrap">
      <div class="brand-switch" id="brand-switch">${tabsHTML}</div>
      <div id="brand-results"></div>
    </div>`;

  wrap.querySelectorAll(".brand-switch__tab").forEach(tab => {
    tab.addEventListener("click", () => {
      activeMk = tab.dataset.mk;
      renderBrand();
    });
  });
}

/** 현재 선택된 브랜드 하나만 렌더링 */
function renderBrand() {
  const resultsEl = $("#brand-results");
  document.querySelectorAll("#brand-switch .brand-switch__tab").forEach(tab => {
    tab.classList.toggle("brand-switch__tab--active", tab.dataset.mk === activeMk);
  });

  const b = BRANDS.find(x => x.mfr === activeMk) || BRANDS[0];
  $("#count").innerHTML = b ? `<b>1</b> / ${BRANDS.length} brands` : `<b>0</b> / ${BRANDS.length} brands`;
  resultsEl.innerHTML = b ? brandPageHTML(b) : "";
  refreshNavCounts();
}

/** Brand 도메인을 라우터에 등록 — main.js 가 호출하는 유일한 공개 API */
export function initBrandDomain() {
  registerDomain("brand", { label: "Brand", mount: mountBrand, unmount: unmountBrand, count: () => BRANDS.length });
}

/**
 * 데이터에 포함된 모든 브랜드 이름 — index.html 상단바 부제에 사용 (main.js).
 * @returns {string[]}
 */
export function getBrandNames() {
  return BRANDS.map(b => b.name);
}
