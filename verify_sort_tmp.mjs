import { BRANDS } from '/sessions/amazing-zen-wright/mnt/MR_v1.7/js/domains/brand/brand.data.js';
import { compareHTML } from '/sessions/amazing-zen-wright/mnt/MR_v1.7/js/domains/brand/brand.view.js';

const selected = BRANDS.slice(0, 3);

function extractRules(html) {
  return [...html.matchAll(/brand-compare__rule" data-year="(\d+)" style="top:([\d.]+)%"/g)]
    .map(m => ({ year: Number(m[1]), top: Number(m[2]) }));
}
function extractPoints(html) {
  return [...html.matchAll(/brand-compare__point[^"]*" style="top:([\d.]+)%"/g)]
    .map(m => Number(m[1]));
}

const htmlAsc = compareHTML(selected, false);
const htmlDesc = compareHTML(selected, true);

const rulesAsc = extractRules(htmlAsc);
const rulesDesc = extractRules(htmlDesc);

console.log("=== 오름차순(기본) rules ===");
rulesAsc.forEach(r => console.log(`year=${r.year} top=${r.top}%`));

console.log("\n=== 내림차순(반전) rules ===");
rulesDesc.forEach(r => console.log(`year=${r.year} top=${r.top}%`));

console.log("\n=== 반전 검증: asc.top + desc.top === 100 (같은 연도) ===");
let allOk = true;
rulesAsc.forEach(a => {
  const d = rulesDesc.find(x => x.year === a.year);
  const sum = +(a.top + d.top).toFixed(2);
  const ok = Math.abs(sum - 100) < 0.05;
  if (!ok) allOk = false;
  console.log(`year=${a.year} asc=${a.top} desc=${d.top} sum=${sum} ${ok ? "OK" : "FAIL"}`);
});
console.log(allOk ? "\n[PASS] 모든 rule이 정확히 반전됨" : "\n[FAIL]");

// 오름차순: 연도가 클수록 top%가 커야 함 (과거 위, 최근 아래)
const ascSorted = [...rulesAsc].sort((a,b) => a.year - b.year);
const ascMonotonic = ascSorted.every((r, i) => i === 0 || r.top >= ascSorted[i-1].top);
console.log("\n오름차순: 연도↑ → top%↑ (과거=위, 최근=아래)?", ascMonotonic ? "PASS" : "FAIL");

const descSorted = [...rulesDesc].sort((a,b) => a.year - b.year);
const descMonotonic = descSorted.every((r, i) => i === 0 || r.top <= descSorted[i-1].top);
console.log("내림차순: 연도↑ → top%↓ (최근=위, 과거=아래)?", descMonotonic ? "PASS" : "FAIL");
