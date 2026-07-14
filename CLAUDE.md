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
# 프로젝트 고유 규칙

## 원문 스펙 보관 (필수)
신규 제품 스펙 수신 시: `raw-data/raw-specs/<mk>/speakers|amplifiers/.../<model>.md`에
원문 그대로 저장 + `js/domains/.../data.js`에 구조화 반영. 둘 다 해야 완료.

## 원본 이미지 아카이빙 (필수)
제품 사진 원본 수신 시: `raw-data/raw-images/<mk>/speakers/<series>/`에 원본 그대로 보관 +
가공본은 기존대로 `assets/img/speakers/<mk>/<series>/`에 저장. 둘 다 해야 완료.

## CHANGELOG 작성 (필수)
루트 `CHANGELOG.md`=비전문가용 요약(구현 세부사항 제외), `raw-data/legacy/CHANGELOG-dev-detailed.md`=개발자용 상세.
세션 중엔 건드리지 않고, 세션 종료 시점에 그날 작업을 모아 한 번만 각 파일 최상단에 추가.

## 출처 기록 및 교차검증 (필수)
제조사 스펙 원문은 raw-specs md에 출처(Overview 요약 vs Discovery 상세 등 페이지 종류 구분)와 함께 그대로 기록.
값 확정 전 docx 등 다른 출처와 반드시 교차검증 — 값이 다르면 전부 병기하고 채택 근거를 각주로 남기며,
애매하면 사용자에게 묻는다. 신규 제품명이 기존 카드와 다른 SKU일 수 있으니 이름/스펙 일치 여부 먼저 확인.

