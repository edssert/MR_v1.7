# 남은 작업 목록 (2026-07-09 세션 종료 시점)

## 진행 중이던 큰 작업 — 프리셋 호버 툴팁 프로젝트
5XT를 파일럿으로 시작하기로 확정했으나 아직 코드 작업은 시작 전(투자
구조 파악만 완료).

- [ ] **#9 프리셋별 주파수/컨투어 데이터 보강** — preset_guide_EN.pdf 에서
      각 프리셋의 주파수 밴드/딜레이/컨투어 설명을 추출해 `splByPreset`
      항목에 필드 추가. 5XT부터 시작.
- [ ] **#10 SPL 측정 기준 풋노트 추가** — 스피커/앰프 모달에 "1m, free
      field, pink noise crest factor 4" 측정 조건 각주 추가.
- [ ] **#11 프리셋 셀 호버 툴팁 UI 구현** — `.match-table__cell--preset`
      에 마우스 호버 시 #9에서 보강한 주파수/컨투어 데이터를 보여주는
      팝오버. 현재는 브라우저 기본 `title` 속성만 있음
      (`speakers.view.js` ampMatchingHTML 참고).

## 이번 세션에서 남긴 확인 필요 항목

- [ ] **Syva / Syva-Low / Syva-Sub 이미지 재검토 보류** — Upload에 있던
      사진이 기존 카드와 같은 검정 컬러라 신규 뷰인지 중복인지 판단을
      미루고 현상태 유지로 확정(사용자 확인). 필요시 나중에 재검토.
- [ ] **Soka inWall 사진 검증 필요** — 기존 Soka 카드의 "Install
      (In-Wall)" 뷰 이미지(`spk-la-soka-inwall.webp`)가 이번에 신규
      분리한 Soka inWall 카드(무게 11.7kg, 별도 SKU)의 실제 사진인지
      아직 미검증. 데이터만 먼저 반영(2026-07-10)했고 사진 작업은 보류
      상태 — 검증 후 Soka inWall 카드의 `img`/`views`를 정리해야 함.

## 완료된 작업 (참고용 요약)

- **LA-RAK III System Elements(연관 액세서리) 반영 완료(2026-07-10)** —
  원문 데이터를 `raw-data/raw-specs/la/accessories/rigging.md`(Rigging
  3종)와 `cables.md`(Cables 22종)로 분리 보관(기존 단일 파일
  `system-elements.md`는 남겨둠). LA-RAK III 앰프 모달에 System Elements
  섹션 추가 — 접기/펼치기 토글(기본 접힘)로 모달 최상단에 배치,
  칩 클릭 시 스피커↔앰프와 동일한 Split View로 액세서리 상세 확인 가능
  (`amplifiers.view.js`/`amplifiers.controller.js`/`spec-table.css`).

- 신규 카드 6개(A10i/A15i/K3i/Kara IIi/KS21i/SB18 IIi) 데이터+이미지 완비.
- Upload 폴더 이미지 대량 반영 — 기존 카드 다수에 Rear/White/Install
  (In-Wall/In-Tile/In-Situ)/Array 추가 뷰 반영.
- 모달 이미지 확대(hover-zoom) ↔ Front/Rear/Array 토글 상호작용 CSS 버그
  완전히 해결(z-index + wrap 클리핑 구조로 정리).
- 카드 배지 축약 로직 분리(`cardTagsHTML`) + 줄바꿈 버그 수정
  (`min-width:0`).
- 앰프 카드 정렬 순서 커스텀화(LA7.16 → LA1.16i → LA12X → LA4X → LA2Xi).
- CS1 Rear 이미지 배경 제거 — 다각형 마스크 방식으로 최종 해결.
- **K Series 전체(K1/K1-SB/K2/K3/K3i/Kara II/Kara IIi/Kiva II) 원문 스펙
  정리 완료(2026-07-10)** — docx + 사용자 채팅 제공 원문 두 출처를
  `raw-data/raw-specs/la/speakers/k-series/*.md`에 출처별로 병합 보관(원본
  docx도 같은 폴더에 보관). K3i·Kara IIi는 이전에 null이었던 물리 스펙
  (weight/dims/connectors/ip/transducers)을 전용 스펙시트 기준으로 채움.
  Kara II depth 값은 출처 간 불일치(383mm vs 500mm) 확인 후 500mm로
  확정(data.js 기존값 유지).
- **Amplification Reference technical bulletin v16.0 정리 완료
  (2026-07-10)** — 특정 모델이 아닌 라인업 전체 공용 참조 문서라
  `raw-data/raw-specs/la/references/`를 신설해 원본 PDF + 마크다운 정리본
  보관. Drive capacity / SPL 표는 pdfplumber로 셀 단위 재추출해 검증.
- **Preset Guide(owner's manual EN v29.0, 126p) 정리 완료(2026-07-10)**
  — `raw-data/raw-specs/la/references/preset-guide-en.md`에 목차/개정이력/
  preset design 요약/Impedance·Drive·SPL 크로스레퍼런스 보관, 시리즈별
  프리셋 구성표(loudspeaker configuration/preset/acoustic properties)는
  `references/presets/<series>/<model>.md` 20개 파일로 분리(기존
  `speakers/` 폴더명과 동일한 시리즈 폴더링). TODO #9 작업 시 5XT는
  `presets/x-series/5xt.md` 참고.

- **A10i Focus/Wide, A15i Focus/Wide, KS21i, SB18 IIi 물리 스펙 반영
  완료(2026-07-10)** — 공식 스펙시트(A10i_AE_EN.docx, A15i_AE_EN.docx,
  KS21i_AE_EN.docx, SB18_IIi_AE_EN.docx) 확보해 weight/dims/
  connectors/ip/transducers 채움. `raw-data/raw-specs/la/speakers/
  a-series/`, `subwoofers/`에 원본 docx + 정리본 보관(기존
  "역재구성본" 상태였던 6개 파일 교체). KS21i·SB18 IIi는 비-install
  버전과 무게/치수가 다른 별개 실측치로 확인.

- **S Series(Soka/Syva/Syva Low/Syva Sub) 원문 스펙 확보 및 데이터 수정
  완료(2026-07-10)** — 공식 스펙시트 4종 + 사용자 제공 L-Acoustics
  공식 홈페이지 텍스트 확보. Syva Low dims 오타(334x549x350 →
  849x334x350mm) 수정. Soka inWall이 무게(11.7kg vs Soka 9.4kg)가 다른
  별도 SKU임을 확인해 신규 카드로 분리. S Series 카드 정렬을 Syva →
  Syva Low → Syva Sub → Soka → Soka inWall 순으로 조정. "출처 기록 +
  교차검증 필수" 원칙을 CLAUDE.md에 추가.
- **docs 폴더를 raw-data로 이름 변경(2026-07-10)** — 원본 문서(raw-specs)
  뿐 아니라 원본 사진 아카이브(raw-images, 신설)까지 담게 되어 "docs"라는
  이름이 좁아 사용자가 직접 폴더명을 `raw-data`로 변경. 코드/문서 내
  `docs/` 참조를 전부 `raw-data/`로 수정.

자세한 변경 이력은 CHANGELOG.md v1.5 항목 참고.
