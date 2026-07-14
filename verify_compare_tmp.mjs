import { BRANDS } from './js/domains/brand/brand.data.js';
import { compareHTML } from './js/domains/brand/brand.view.js';

const selected = BRANDS.slice(0, 3);
const html = compareHTML(selected);

// rule과 point의 top% 정밀도, 구조 확인
const ruleMatches = [...html.matchAll(/brand-compare__rule" data-year="(\d+)" style="top:([\d.]+)%"/g)];
const pointMatches = [...html.matchAll(/brand-compare__point[^"]*" style="top:([\d.]+)%"/g)];

console.log("=== Rules (연도 눈금선) ===");
ruleMatches.forEach(m => console.log(`year=${m[1]} top=${m[2]}%`));

console.log("\n=== Points count ===", pointMatches.length);

// 구조 검증: axis, gridlines, head-rule 잔재 없는지
console.log("\n=== 잔재 체크 ===");
console.log("brand-compare__axis 존재?", html.includes("brand-compare__axis"));
console.log("brand-compare__gridline 존재?", html.includes("brand-compare__gridline"));
console.log("brand-compare__head-rule 존재?", html.includes("brand-compare__head-rule"));
console.log("brand-compare__rules 존재?", html.includes("brand-compare__rules"));
console.log("brand-compare__tick 존재?", html.includes("brand-compare__tick"));

// 같은 연도값이 rule에서 축 계산과 일치하는지 재계산 검증
const years = [];
selected.forEach(b => {
  if (Number.isFinite(b.founded)) years.push(b.founded);
  (b.timeline || []).forEach(t => { if (Number.isFinite(t.year)) years.push(t.year); });
});
const minYear = Math.min(...years);
const maxYear = Math.max(...years);
const axisMin = minYear - 1;
const axisMax = Math.ceil(maxYear / 10) * 10;
const axisSpan = Math.max(axisMax - axisMin, 1);
const yearToPct = year => ((year - axisMin) / axisSpan) * 100;

console.log("\n=== 독립 재계산과 rule top% 일치 검증 ===");
let allMatch = true;
ruleMatches.forEach(m => {
  const y = Number(m[1]);
  const expected = yearToPct(y).toFixed(2);
  const actual = m[2];
  const ok = expected === actual;
  if (!ok) allMatch = false;
  console.log(`year=${y} expected=${expected}% actual=${actual}% ${ok ? "OK" : "MISMATCH"}`);
});
console.log(allMatch ? "\n✅ 모든 rule top% 일치" : "\n❌ 불일치 발견");
