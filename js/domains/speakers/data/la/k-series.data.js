// L-Acoustics K Series 스피커 데이터 (6개 모델).
// 필드 스키마 설명은 speakers.schema.js 참조.
// 파생 필드(wayCount / network / lowUnitConfig)는 로드 시 normalize 함수가 생성하므로 저장하지 않는다.
export const LA_K_SERIES = [
  {
    "id": "spk-la-k1",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "K1",
    "series": "K Series",
    "throwCat": "Long Throw",
    "type": "Line Array",
    "throw": "Long throw >35m",
    "lowInch": 15,
    "lowQty": 2,
    "crossover": "3-way, active",
    "crossoverTags": [
      "3-way",
      "active"
    ],
    "spl": 149,
    "cov": {
      "h": "90°",
      "splayList": [
        0.25,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "42 Hz",
        "hi": "19 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "38 Hz",
        "hi": "19 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "35 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 106,
    "transducers": "LF: 2 × 15″ · MF: 4 × 6.5″ · HF: 3 × 3″",
    "connectors": "8-point PA-COM x2 (IN 1 + LINK 1)",
    "ip": "IP43",
    "dims": "1342 x 438 x 520 mm / 52.8 x 17.2 x 20.5 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 2,
            "total": 2,
            "splByPreset": [
              {
                "preset": "[K1]",
                "spl": 149
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(2/2)",
    "img": "assets/img/speakers/la/k-series/spk-la-k1-horizontal.webp",
    "views": [
      {
        "label": "Horizontal",
        "src": "assets/img/speakers/la/k-series/spk-la-k1-horizontal.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-k1-vertical.webp"
      },
      {
        "label": "Array (8x + K1-BUMP)",
        "src": "assets/img/speakers/la/k-series/spk-la-k1-array2.webp"
      }
    ],
    // [사용자 요청] 모달 내 뷰 순서(Horizontal/Vertical/Array)는 그대로
    // 유지하되, 카드 목록에서 마우스를 올렸을 때(hover)만 Vertical 대신
    // Array 뷰가 보이도록 지정. speakers.view.js cardHTML 참고.
    "cardHoverView": "Array (8x + K1-BUMP)",
    "relations": {
      "ampIds": [],
      // [사용자 제공, K1 System Elements] amplifiers.rack.relatedAccessoryIds
      // 와 동일한 패턴 — accessories.data.js 의 id 를 그대로 참조하고
      // cross-ref.findAccessoriesForSpeaker() 로 조회한다. 원문:
      // raw-data/raw-specs/la/speakers/k-series/k1.md System Elements 섹션.
      // [수정] 최초 반영 시 리깅/프로텍션 15개만 넣고 케이블(acc-la-do,
      // DO25/DO10/DO.7 통합 레코드)을 빠뜨렸다 — System Elements 목록의
      // LA12X/LA-RAK II AVB 는 이미 d.amps(위 amps 필드)로 앰프 매칭 표에
      // 별도 연결되어 있어 액세서리 목록에는 포함하지 않지만, DO 케이블은
      // 앰프 쪽 연결 경로가 없으므로 여기 추가해야 한다.
      "accessoryIds": ["acc-la-k1-bump", "acc-la-k1-delta", "acc-la-la-sling2t", "acc-la-k1-bpchain", "acc-la-k2-link", "acc-la-kara-downk1", "acc-la-k1-lasermount", "acc-la-laser-magplate", "acc-la-k1-chariot2", "acc-la-k1-chariotcov", "acc-la-k-bumpflight", "acc-la-k1-pla", "acc-la-k1-cov", "acc-la-tech-toolcase-ii", "acc-la-maintenance-toolcase", "acc-la-do"]
    },
    "watt": 1118,
    "wattByBand": [
      { "band": "LF", "watt": 422 },
      { "band": "MF", "watt": 497 },
      { "band": "HF", "watt": 199 }
    ],
    // [사용자 요청] 모달 최하단에 프리셋 구성 섹션 추가. 원문:
    // raw-data/raw-specs/la/references/presets/k-series/k1.md
    // (출처: preset_guide_EN.pdf p.49-50, owner's manual EN v29.0;
    // 교차검증/보강: K1_OM_EN.pdf owner's manual EN v4.0 p.34-45).
    // [사용자 요청 — OM v4.0 반영] ratio(권장 매칭 비율)와 minLine(최소
    // 라인 길이, 명시된 구성에만 존재)을 행마다 추가 — OM에서 preset_guide
    // 원문에는 없던 신규 정보. [재검토] 이 표(rows) 자체에는 표시하지
    // 않고, 렌더링(speakers.view.js presetGuideHTML)이 ratio/minLine이
    // 있는 행만 걸러 Preset Guide 하위의 별도 "Matching Ratio & Minimum
    // Line Length" 표로 보여준다(Delay Defaults와 동일 패턴) — 기존
    // 3열 표가 이미 빽빽해 안에 끼워 넣지 않는다.
    "presets": {
      "rows": [
        { "config": "K1 line source", "preset": "[K1]", "acoustic": "35 Hz - 20 kHz", "acousticShort": "35 Hz - 20 kHz" },
        { "config": "K1 + K1-SB (on top)", "preset": "[K1] + [K1SB_X]", "acoustic": "enhanced LF throw, down to 30 Hz", "acousticShort": "enhanced throw, down to 30 Hz", "ratio": "2 K1 : 1 K1-SB", "minLine": "8 K1 + 4 K1-SB" },
        { "config": "K1 + coupled K1-SB (beside/behind)", "preset": "[K1] + [K1SB_60]", "acoustic": "reinforced LF contour, LF rejection(side polarized or rear cardioid), down to 33 Hz", "acousticShort": "side/rear cardioid, down to 33 Hz", "ratio": "1 K1 : 1 subwoofer" },
        { "config": "K1 + coupled K1-SB (behind, NC)", "preset": "[K1] + [K1SB_100_NC]", "acoustic": "reinforced LF contour, LF rejection(rear cardioid), down to 25 Hz", "acousticShort": "rear cardioid, down to 25 Hz", "ratio": "1 K1 : 1 subwoofer" },
        { "config": "K1 + subwoofers (KS28/SB28)", "preset": "[K1] + [xx28_60]", "acoustic": "reinforced LF contour, down to 25 Hz", "acousticShort": "reinforced contour, down to 25 Hz", "ratio": "1 K1 : 1 subwoofer" },
        { "config": "K1 + coupled CS1 (beside/behind)", "preset": "[K1] + [CS1_60]", "acoustic": "reinforced LF contour, LF rejection(rear cardioid), down to 25 Hz", "acousticShort": "rear cardioid, down to 25 Hz", "ratio": "2 K1 : 1 CS1" },
        { "config": "K1 + coupled CS1 (supercardioid)", "preset": "[K1] + [CS1_60_S]", "acoustic": "reinforced LF contour, supercardioid pattern, down to 25 Hz", "acousticShort": "supercardioid, down to 25 Hz", "ratio": "2 K1 : 1 CS1" },
        { "config": "K1 + Kara II (downfill)", "preset": "[K1] + [KARAIIDOWNK1]", "acoustic": "35 Hz - 20 kHz, extends vertical coverage to closer audience", "acousticShort": "35 Hz - 20 kHz, downfill", "ratio": "up to 6 Kara II" },
        { "config": "K1 + K2 (downfill)", "preset": "[K1] + [K2 110]", "acoustic": "35 Hz - 20 kHz, same horizontal coverage as K1 for optimal downfill", "acousticShort": "35 Hz - 20 kHz, downfill" }
      ],
      // [사용자 요청 — 가독성 개선, 웹 검색 교차검증] 기존 각주 4개는
      // 문장 안에 서로 다른 성격의 정보(구성 규칙/호환성 경고/라우팅
      // 표)가 축약된 채 섞여 있어 이해하기 어려웠다(특히 "+ 극성" 표기가
      // 무슨 뜻인지 불명확했음, 사용자 지적). L-Acoustics K1 공식
      // 유저매뉴얼(manualslib.com 게재본, "Preset description" p.23)의
      // 실제 라우팅 표를 직접 확인해 교차검증 후 재작성 —
      // 1) [K1]/[K2 xxx] 프리셋: OUT1=left LF, OUT2=right LF, OUT3=MF,
      //    OUT4=HF 로 밴드별 채널이 나뉘고, 전부 IN A 입력을 받아 게인
      //    0dB·딜레이 0ms·뮤트 해제(ON) 상태다. "+ 극성"은 반전 없는
      //    정상 극성이라는 뜻 — 표 전체가 예외 없이 전부 이 값이라
      //    "설정을 건드릴 필요가 없다"는 게 핵심이었다.
      // 2) [K1SB_X]/[K1SB_60]/[K1SB_100_NC] 등 K1-SB 서브우퍼 프리셋은
      //    OUT1~4 네 채널 모두 SB(서브우퍼 전용 채널)로 통일 라우팅되고,
      //    나머지 값(IN A/0dB/0ms/정상 극성/ON)은 위와 동일하다 — 즉
      //    "라인소스냐 서브냐"만 다르고 나머지 파라미터 값 자체는
      //    프리셋 종류와 무관하게 항상 같다는 것을 명확히 했다.
      // [사용자 요청 — 가독성 2차 개선] notes 를 단순 문자열 배열 대신
      // { text, subs? } 객체 배열로 바꿔 항목 안에서도 하위 글머리 기호
      // (2단계 불렛)를 쓸 수 있게 한다 — Downfill 옵션(라인별 3가지)과
      // 출력 라우팅(프리셋 그룹별 2가지)처럼 한 항목 안에 여러 갈래
      // 정보가 나열되면 문장으로 줄줄이 이어붙이는 것보다 하위 목록으로
      // 나누는 쪽이 항목 간 경계가 분명해진다(사용자 요청). subs 가 없는
      // 항목(카디오이드/호환성 주의)은 기존처럼 단일 문장 그대로 둔다.
      // 렌더링은 speakers.view.js presetGuideHTML 이 subs 유무를 보고
      // 중첩 <ul> 을 추가로 그린다.
      // [사용자 요청 — 참고 사항 3분할, 최종] 표가 3개(메인/Matching
      // Ratio/Delay Defaults)로 늘어나 각 표 바로 아래 그 표에 해당하는
      // 참고 사항만 두도록 재배치했다(전에는 5개 항목이 전부 메인 표
      // 밑 하나에 뭉쳐 있어 Matching Ratio/Delay Defaults 표와 내용이
      // 섞여 보였다).
      // - 메인 표(notes): Acoustic Properties 각주, 카디오이드 프리셋,
      //   호환성 주의, 출력 라우팅 — 전부 rows(Loudspeaker Configuration/
      //   Preset/Acoustic Properties) 열과 직접 관련된 내용만 남김.
      // - Matching Ratio 표(ratioNotes): Downfill 옵션(K2/Kara/Kara II
      //   프리셋 목록)을 이쪽으로 이동 — ratio/minLine 자체가 "몇 대를
      //   어떻게 매칭하느냐"는 질문이라 Downfill 목록과 같은 맥락.
      // - Delay Defaults 표(delayDefaults.notes): 기존 그대로(딜레이 관련
      //   각주만 원래도 거기 있었음, 변경 없음).
      "notes": [
        { "text": "Acoustic Properties 열의 주파수 대역(예: \"35 Hz - 20 kHz\", \"down to 25 Hz\")은 원문 서문(p.49)에 명시된 대로 -10 dB 기준 대역폭/저역 한계다." },
        { "text": "카디오이드 배열(측면·후면으로 향하는 저역을 상쇄해 무대 뒤나 옆으로 새는 저음을 줄이는 배치)로 세울 때는 [xx28_60_C] 또는 [xx28_60_Cx] 프리셋을 쓴다." },
        { "text": "호환성 주의: 프리셋 라이브러리 4.0 버전을 기점으로 [K1] · [KARADOWNK1] · [K2 xxx] 프리셋의 내부 구성이 바뀌어, 4.0 이후 버전과 4.0 이전 버전은 서로 호환되지 않는다. 같은 라인 소스(어레이) 안의 모든 유닛은 반드시 동일한 라이브러리 버전을 써야 한다 — 일부만 다른 버전이면 유닛 간 특성이 어긋난다." },
        {
          "text": "출력 라우팅(공식 매뉴얼 Preset Description, p.50/p.16 기준)은 프리셋 그룹에 따라 다음 두 가지로 나뉜다. 게인·딜레이·극성 등 나머지 파라미터 기본값은 Delay Defaults 표 참고.",
          "subs": [
            "[K1] / [K2 xxx] 계열: OUT1=좌측 LF, OUT2=우측 LF, OUT3=MF, OUT4=HF.",
            "[K1SB_X] / [K1SB_60] / [K1SB_100_NC] 등 K1-SB 서브우퍼 계열: OUT1~4 네 채널 전부 SB(서브우퍼) 채널로 통일."
          ]
        }
      ],
      "ratioNotes": [
        {
          "text": "Downfill(무대 바로 앞 관객 등 어레이 아래쪽 사각지대를 보완하는 추가 수직 커버리지) 프리셋은 라인마다 다르다. 위 표의 K1(신형) 라인 외에 구형 라인은 다음 프리셋을 쓴다.",
          "subs": [
            "K2 라인: [K2 110] / [K2 90] / [K2 70]",
            "Kara: [KARADOWNK1]",
            "Kara II: [KARAIIDOWNK1](110°) / [KARAIIDOWNK1 70] / [KARAIIDOWNK1 90] — 이 중 [KARAIIDOWNK1]은 Kara II를 110° 핀 설정으로 조립했을 때 맞춰 최적화된 프리셋."
          ]
        }
      ],
      "ratioSource": "K1_OM_EN.pdf (K1 owner's manual EN version 4.0) p.35-45; 구형 라인 Downfill 프리셋명은 preset_guide_EN.pdf p.49-50 (owner's manual EN v29.0)",
      // [사용자 요청 — 극성 오류 수정, 최종] pdfplumber 텍스트 추출로는
      // 원문 표의 극성 아이콘(회색 [+]/빨간 [-] 배지, 텍스트 레이어에
      // 없음)이 누락되어 "전부 극성 정상(+)"으로 잘못 옮겨졌었다 —
      // 사용자 지적으로 PyMuPDF 로 p.37/38/40/42 를 실제 이미지 렌더링해
      // 재확인. 실제로는 아래처럼 서브우퍼 계열마다 다르다.
      // - K1: 모든 조합에서 항상 +
      // - K1-SB: [K1SB_X]/[K1SB_60](라인소스 편입/측면·후면 배치용) 조합
      //   에서는 +, [K1SB_100_NC](노이즈 컨트롤 카디오이드) 조합에서는 -
      // - KS28: 모든 조합(단독/K1-SB 병용 불문)에서 항상 -
      // - CS1: 모든 조합(단독/K1-SB 병용 불문)에서 항상 -
      // [사용자 요청 — 극성 표기 간소화] +(정상)는 기본값이라 당연하므로
      // 표시를 생략하고, −(반전)만 "(−)"로 표기 — 렌더링(presetGuideHTML)
      // 이 이 문자열 안의 "−" 기호만 빨간색으로 강조한다(괄호 자체는
      // 일반 색 그대로, polarity-flip span은 "−"만 감쌈).
      // [사용자 요청 — 표 구분 기능으로 교체] 텍스트 문자 "|"로 이어붙이는
      // 대신, values를 문자열 배열(items)로 구조화해 렌더링이 각 항목을
      // 별도 span으로 나누고 그 사이에 실제 CSS border-left 세로 구분선을
      // 그린다(위아래 표 가로선과 끊겨 보이는 짧은 구분선, 사용자가 요청한
      // "표 안에서 나눌 수 있는 기능"). 이전 values 단일 문자열 필드는
      // 더 이상 쓰지 않는다.
      "delayDefaults": {
        "rows": [
          { "combo": "[K1] + [K1SB_X]", "items": ["K1 = 0 ms", "K1-SB = 0 ms"] },
          { "combo": "[K1] + [K1SB_60]", "items": ["K1 = 6 ms", "K1-SB = 0 ms"] },
          { "combo": "[K1] + [K1SB_100_NC]", "items": ["K1 = 8.3 ms", "K1-SB = 0 ms (−)"] },
          { "combo": "[K1] + [KS28_60]", "items": ["K1 = 0.5 ms", "KS28 = 0 ms (−)"] },
          { "combo": "[K1] + [KS28_60_C]", "items": ["K1 = 6 ms", "KS28 = 0 ms (−)"] },
          { "combo": "[K1] + [KS28_60_Cx]", "items": ["K1 = 4 ms", "KS28 = 0 ms (−)"] },
          { "combo": "[K1] + [K1SB_X] + [KS28_60]", "items": ["K1 = 0 ms", "K1-SB = 0 ms", "KS28 = 0 ms (−)"] },
          { "combo": "[K1] + [K1SB_X] + [KS28_60_C]", "items": ["K1 = 5.5 ms", "K1-SB = 5.5 ms", "KS28 = 0 ms (−)"] },
          { "combo": "[K1] + [K1SB_X] + [KS28_60_Cx]", "items": ["K1 = 3.5 ms", "K1-SB = 3.5 ms", "KS28 = 0 ms (−)"] },
          { "combo": "[K1] + [CS1_60] / [CS1_60_S]", "items": ["K1 = 7.5 ms", "CS1 = 0 ms (−)"] },
          { "combo": "[K1] + [K1SB_X] + [CS1_60] / [CS1_60_S]", "items": ["K1 = 7.5 ms", "K1-SB = 7.5 ms", "CS1 = 0 ms (−)"] }
        ],
        // [사용자 요청 — notes 문구 정정] 첫 항목이 "딜레이 + 극성
        // 기본값"이라고 적어 마치 "극성은 항상 +"라는 뜻으로 읽힐 수
        // 있었다 — 실제로는 아래 두 번째 항목에서 설명하듯 조합에 따라
        // −(반전)인 경우도 있으므로, 첫 항목은 "딜레이 및 극성 기본값
        // (아래 표에 함께 표기)"으로만 서술하고 +/− 여부 판단은 두 번째
        // 항목에 전적으로 맡긴다.
        "notes": [
          { "text": "위 표의 값은 pre-alignment(사전 정렬) 딜레이와 극성 기본값을 함께 표기한 것이며, 실제 현장에서는 여기에 배치 간격에 따른 geometric(기하학적) 딜레이를 추가로 더해야 한다(극성은 geometric 딜레이와 무관하게 표에 적힌 그대로 유지)." },
          { "text": "별도 표기가 없으면 극성은 반전 없는 정상(+). 빨간색 (−) 표시가 있는 엘리먼트만 반전이다. K1은 모든 조합에서 항상 정상(+). K1-SB는 [K1SB_X]/[K1SB_60] 조합에서는 정상, [K1SB_100_NC](노이즈 컨트롤) 조합에서는 반전. KS28과 CS1은 K1과 병용하는 모든 조합에서 항상 반전(카디오이드/서브우퍼 위상 상쇄를 위한 의도된 설정)." },
          { "text": "geometric 딜레이(K1-SB를 서브우퍼로 배치 시): 간격 1.5 m(5 ft)면 4.5 ms, 2 m(7 ft)면 6 ms 추가." },
          { "text": "[K1]과 [K1SB_X]([K1-SB]를 K1과 같은 라인소스 안에 편입할 때)는 서로 딜레이를 추가하지 않는다 — 동일 라인소스 내 엘리먼트이기 때문. K1-Kara II, K1-K2(다운필) 조합도 마찬가지로 딜레이 추가 금지." }
        ],
        "source": "K1_OM_EN.pdf (K1 owner's manual EN version 4.0) p.37-38, 40, 42 — 표 안 극성(+/−) 배지를 PyMuPDF 페이지 이미지 렌더링으로 재확인(pdfplumber 텍스트 추출은 아이콘을 누락함)"
      },
      "source": "preset_guide_EN.pdf p.49-50 (owner's manual EN v29.0); 교차검증: L-Acoustics K1 User Manual \"Preset description\" p.23 (manualslib.com 게재본, v6.0); K1_OM_EN.pdf(owner's manual EN v4.0) p.34-45(매칭 비율/최소 라인 길이/딜레이), p.16(라우팅 재검증)"
    },
    // [사용자 요청] K1 owner's manual "Mechanical safety"(p.31-33) 중 K1
    // 자체에 해당하는 부분만 발췌 — K1-SB/KS28/CS1의 리깅 한계 표는
    // 각자 제품 데이터에 정리할 항목이라 여기서는 제외(원문 전체는
    // raw-data/raw-specs/la/speakers/k-series/k1.md 출처 3 참고).
    // 렌더링은 speakers.view.js mechanicalSafetyHTML 이 Preset Guide와
    // 동급(섹션 레벨) 토글로 그린다.
    "mechanicalSafety": {
      "flownRows": [
        { "config": "flown", "accessory": "K1-BUMP", "safeLimit": "16", "maxLimit": "24" },
        { "config": "flown", "accessory": "K1-BUMP", "safeLimit": "14 K1 + 3 LA-RAK II AVB", "maxLimit": "23 K1 + 4 LA-RAK II AVB" },
        { "config": "flown with a downfill", "accessory": "KARA-DOWNK1", "safeLimit": "6 Kara II", "maxLimit": "6 Kara II" }
      ],
      "stackedRows": [
        { "config": "stacked", "accessory": "K1-CHARIOT", "safeLimit": "4", "maxLimit": "4" }
      ],
      "warnings": [
        "항상 혼합 어레이(mixed array)의 안전계수는 Soundvision을 참조할 것 — K1 어레이를 Kara II 다운필과 함께 플라잉할 때는 시스템 전체 엘리먼트의 기계적 안전을 고려해야 하며, 위 표의 maximum limit은 K1에만 적용된다.",
        "LA-RAK II AVB를 위에 얹은 K1 어레이에는 풀백(pullback)을 적용하지 말 것.",
        "Kara II 다운필이 있는 K1 어레이에는 풀백을 적용하지 말 것."
      ],
      "notes": [
        { "text": "Safe limit: 이 매뉴얼에 정의된 용도 내에서, 사이트 각도·인터엘리먼트 각도 등 다른 배치 변수와 무관하게 2006/42/EC 기계지침 기준을 항상 만족하는 최대 엘리먼트 수." },
        { "text": "Maximum limit: 다른 배치 변수가 최선의 기계적 조건을 제공할 때 2006/42/EC 기준을 만족할 수 있는 최대 엘리먼트 수." },
        { "text": "K1 리깅 시스템은 2006/42/EC 기계지침을 준수하며 BGV-C1 가이드라인에 따라 설계됐다. 이 지침은 파단에 대해 안전계수 4를 요구하며, 이 매뉴얼에 기술된 플라잉 배치는 안전계수 4 이상을 달성한다. 특정 배치의 정확한 안전계수는 Soundvision을 참조." },
        {
          "text": "안전성 평가 원칙(Assessing mechanical safety, p.33) — 정격 WLL만으로는 복합 기계 시스템의 안전성을 판단할 수 없다.",
          "subs": [
            "각 연결점의 작업 하중과 안전계수는 어레이 구성(인클로저 종류·수량·스플레이 각도)과 플라잉/스태킹 구조(플라잉 포인트 수·위치, 사이트 각도)에 좌우되며 Soundvision의 복합 기계 모델링 없이는 판단 불가.",
            "전체 안전계수는 항상 모든 연결점 중 가장 낮은 값을 따른다 — Soundvision Mechanics view에서 가장 약한 연결점을 확인할 것.",
            "그라운드 스택 어레이는 Soundvision에서 별도 전도 위험(tipping hazard) 경고가 표시된다 — 어레이 고정 및 경고 무시 여부는 사용자 책임.",
            "플라잉 시 사용 가능한 홀을 활용해 2차 안전장치(secondary safety)를 구현할 것.",
            "극한 고온/저온, 강풍, 장기간 염수 노출 등 특수 환경에서는 더 높은 안전계수가 권장되며, 리깅 전문가와 상담할 것."
          ]
        }
      ],
      "source": "K1_OM_EN.pdf (K1 owner's manual EN version 4.0) p.31-33, K1 관련 부분만 발췌"
    }
  },
  {
    "id": "spk-la-k2",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "K2",
    "series": "K Series",
    "throwCat": "Long Throw",
    "type": "Line Array",
    "throw": "Long throw >35m",
    "lowInch": 12,
    "lowQty": 2,
    "crossover": "3-way, active",
    "crossoverTags": [
      "3-way",
      "active"
    ],
    "spl": 147,
    "cov": {
      "h": "110°,70°,55°/35°,35°/55°",
      "v": "10°",
      "splayList": [
        0.25,
        1,
        2,
        3,
        4,
        5,
        7.5,
        10
      ]
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "40 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "38 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "35 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 56,
    "transducers": "LF: 2 × 12″ · MF: 4 × 6.5″ · HF: 2 × 3″",
    "connectors": "8-point PA-COM x2 (IN 1 + LINK 1)",
    "ip": "IP55",
    "dims": "1338 x 354 x 400 mm / 52.7 x 13.9 x 15.7 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 3,
            "splByPreset": [
              {
                "preset": "[K2 70]",
                "spl": 147
              }
            ]
          }
        ]
      },
      {
        "model": "LA4X",
        "configs": [
          {
            "mode": "",
            "perCh": 1,
            "total": 1,
            "splByPreset": [
              {
                "preset": "[K2 70]",
                "spl": 147
              }
            ]
          }
        ]
      },
      {
        "model": "LA7.16",
        "configs": [
          {
            "mode": "",
            "perCh": 1,
            "total": 4,
            "splByPreset": [
              {
                "preset": "[K2 70]",
                "spl": 147
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/3), LA4X(1/1), LA7.16(1/4)",
    // [사용자 요청] 기존 Front(spk-la-k2.webp)/Array(spk-la-k2-array.webp)
    // 사진 삭제. 메인 이미지를 Horizontal 로 교체.
    "img": "assets/img/speakers/la/k-series/spk-la-k2-horizontal.webp",
    "views": [
      {
        "label": "Horizontal",
        "src": "assets/img/speakers/la/k-series/spk-la-k2-horizontal.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-k2-vertical.webp"
      },
      {
        "label": "Array (12x + K2-BUMP + K2-BAR)",
        "src": "assets/img/speakers/la/k-series/spk-la-k2-array2.webp"
      },
      {
        "label": "On Chariot (4x + K2-JACK)",
        "src": "assets/img/speakers/la/k-series/spk-la-k2-chariot.webp"
      },
      {
        "label": "Panflex Detail",
        "src": "assets/img/speakers/la/k-series/spk-la-k2-panflex-detail.webp"
      }
    ],
    // [사용자 요청] 모달 뷰 전환 토글에서 Horizontal/Vertical/Panflex
    // Detail 3개를 세로로 쌓은 그룹으로 묶는다(speakers.view.js
    // modalBodyHTML STACK_LABELS 참고). 기본값(Vertical (Panflex))과
    // 라벨이 달라 개별 지정이 필요.
    "viewStackLabels": ["Horizontal", "Vertical", "Panflex Detail"],
    // [사용자 요청] 카드 hover 대상을 Array(12x + K2-BUMP + K2-BAR)로 지정
    // (K1 과 동일한 cardHoverView 패턴, speakers.view.js cardHTML 참고).
    "cardHoverView": "Array (12x + K2-BUMP + K2-BAR)",
    "relations": {
      "ampIds": []
    },
    "watt": 752,
    // 원문: raw-data/raw-specs/la/references/presets/k-series/k2.md
    // (출처: preset_guide_EN.pdf p.51-52, owner's manual EN v29.0).
    "presets": {
      "rows": [
        { "config": "K2 line source", "preset": "[K2 xxx]", "acoustic": "35 Hz - 20 kHz, adjustable horizontal directivity", "acousticShort": "35 Hz - 20 kHz, adjustable directivity" },
        { "config": "K2 + K1-SB (on top)", "preset": "[K2 xxx] + [K1SB_X K2]", "acoustic": "enhanced LF throw, down to 30 Hz", "acousticShort": "enhanced throw, down to 30 Hz" },
        { "config": "K2 + coupled K1-SB (beside/behind)", "preset": "[K2 xxx] + [K1SB_60]", "acoustic": "reinforced LF contour, LF rejection(side polarized or rear cardioid), down to 33 Hz", "acousticShort": "side/rear cardioid, down to 33 Hz" },
        { "config": "K2 + coupled K1-SB (behind, NC)", "preset": "[K2 xxx] + [K1SB_100_NC]", "acoustic": "reinforced LF contour, LF rejection(rear cardioid), down to 25 Hz", "acousticShort": "rear cardioid, down to 25 Hz" },
        { "config": "K2 + subwoofers (KS28/SB28)", "preset": "[K2 xxx] + [xx28_60]", "acoustic": "reinforced LF contour, down to 25 Hz", "acousticShort": "reinforced contour, down to 25 Hz" },
        { "config": "K2 + coupled CS1 (beside/behind)", "preset": "[K2 xxx] + [CS1_60]", "acoustic": "reinforced LF contour, LF rejection(rear cardioid), down to 25 Hz", "acousticShort": "rear cardioid, down to 25 Hz" },
        { "config": "K2 + coupled CS1 (supercardioid)", "preset": "[K2 xxx] + [CS1_60_S]", "acoustic": "reinforced LF contour, supercardioid pattern, down to 25 Hz", "acousticShort": "supercardioid, down to 25 Hz" }
      ],
      "notes": [
        { "text": "Acoustic Properties 열의 주파수 대역(예: \"35 Hz - 20 kHz\", \"down to 25 Hz\")은 원문 서문(p.49)에 명시된 대로 -10 dB 기준 대역폭/저역 한계다." },
        { "text": "카디오이드 배열 시 [xx28_60_C] 또는 [xx28_60_Cx] 프리셋을 쓴다." },
        { "text": "[K2 xxx]의 xxx는 70/90/110(조정 가능한 수평 지향각) — 반드시 K2 조정핀 설정과 일치하는 프리셋을 선택할 것: [K2 70]=70º, [K2 90]=90º, [K2 110]=110º." },
        {
          "text": "Downfill(어레이 아래쪽 추가 수직 커버리지) 옵션: K2가 자체적으로 Kara/Kara II의 downfill 소스로도 쓰인다.",
          "subs": [
            "Kara: [KARADOWNK2]",
            "Kara II: [KARAIIDOWNK2](110°) / [KARAIIDOWNK2 70] / [KARAIIDOWNK2 90] — 11 dB 헤드룸 제공, [KARAIIDOWNK2]는 Kara II 110° 핀 설정에 최적화."
          ]
        },
        {
          "text": "출력 라우팅(p.52 기준)은 프리셋 그룹에 따라 다음과 같다.",
          "subs": [
            "[K2 xxx]: OUT1=좌측 LF, OUT2=우측 LF, OUT3=MF, OUT4=HF. 전부 입력 IN A · 게인 0dB · 딜레이 0ms · 정상 극성(+) · 뮤트 해제(ON).",
            "[K1SB_X K2] / [K1SB_60] / [K1SB_100_NC]: OUT1~4 전부 SB 채널. [K1SB_X K2]는 10 dB 헤드룸 제공."
          ]
        }
      ],
      "source": "preset_guide_EN.pdf p.51-52 (owner's manual EN v29.0)"
    }
  },
  {
    "id": "spk-la-k3",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "K3",
    "series": "K Series",
    "throwCat": "Long Throw",
    "type": "Line Array",
    "throw": "Long throw >35m",
    "lowInch": 12,
    "lowQty": 2,
    "crossover": "2-way, active",
    "crossoverTags": [
      "2-way",
      "active"
    ],
    "spl": 143,
    "cov": {
      "h": "110°,70°,55°/35°,35°/55°",
      "v": "10°",
      "splayList": [
        0.25,
        1,
        2,
        3,
        4,
        5,
        7.5,
        10
      ]
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "50 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "46 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "42 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 43,
    "transducers": "LF: 2 × 12″ · HF: 1 × 4″",
    "connectors": "4-point speakON x2 (IN/LINK 상호교환)",
    "ip": "IP55",
    "dims": "950 x 357 x 403 mm / 37.4 x 14.1 x 15.9 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 6,
            "splByPreset": [
              {
                "preset": "[K3 70]",
                "spl": 143
              }
            ]
          }
        ]
      },
      {
        "model": "LA4X",
        "configs": [
          {
            "mode": "",
            "perCh": 1,
            "total": 2,
            "splByPreset": [
              {
                "preset": "[K3 70]",
                "spl": 143
              }
            ]
          }
        ]
      },
      {
        "model": "LA7.16",
        "configs": [
          {
            "mode": "",
            "perCh": 1,
            "total": 8,
            "splByPreset": [
              {
                "preset": "[K3 70]",
                "spl": 143
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/6), LA4X(1/2), LA7.16(1/8)",
    // [사용자 요청] 기존 Front 사진(spk-la-k3.webp)을 Horizontal로 개명
    // (실 파일도 spk-la-k3-horizontal.webp로 리네임), 단독 Array 사진
    // (spk-la-k3-array.webp)은 삭제. 순서: Horizontal/Vertical/
    // Array(12x+K3-BUMP+K3-BAR)/Rigging/With KS28.
    "img": "assets/img/speakers/la/k-series/spk-la-k3-horizontal.webp",
    "views": [
      {
        "label": "Horizontal",
        "src": "assets/img/speakers/la/k-series/spk-la-k3-horizontal.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-k3-vertical.webp"
      },
      {
        "label": "Array (12x + K3-BUMP + K3-BAR)",
        "src": "assets/img/speakers/la/k-series/spk-la-k3-array2.webp"
      },
      {
        "label": "Rigging (8x + K3-RIGBAR)",
        "src": "assets/img/speakers/la/k-series/spk-la-k3-rigbar.webp"
      },
      {
        "label": "With KS28 (4x + K3-TILT)",
        "src": "assets/img/speakers/la/k-series/spk-la-k3-ks28-tilt.webp"
      }
    ],
    // [사용자 요청] 카드 hover 대상을 Array(12x + K3-BUMP + K3-BAR)로 지정
    // (K1/K2 와 동일한 cardHoverView 패턴, speakers.view.js cardHTML 참고).
    "cardHoverView": "Array (12x + K3-BUMP + K3-BAR)",
    "relations": {
      "ampIds": []
    },
    "watt": 830,
    // 원문: raw-data/raw-specs/la/references/presets/k-series/k3.md
    // (출처: preset_guide_EN.pdf p.53-54, owner's manual EN v29.0).
    // K3/K3i는 동일 인클로저의 다른 버전 — 팩토리 프리셋/권장 구성 공유(원문 명시).
    "presets": {
      "rows": [
        { "config": "K3 line source", "preset": "[K3 xxx]", "acoustic": "42 Hz - 20 kHz, adjustable horizontal directivity", "acousticShort": "42 Hz - 20 kHz, adjustable directivity" },
        { "config": "K3 + subwoofers (KS28/KS21)", "preset": "[K3 xxx] + [KSxx_60]", "acoustic": "reinforced LF contour, down to 29 Hz (KS21) or 25 Hz (KS28)", "acousticShort": "reinforced contour, down to 29/25 Hz" },
        { "config": "K3 + coupled CS1 (beside/behind)", "preset": "[K3 xxx] + [CS1_60]", "acoustic": "reinforced LF contour, LF rejection(rear cardioid), down to 25 Hz", "acousticShort": "rear cardioid, down to 25 Hz" },
        { "config": "K3 + coupled CS1 (supercardioid)", "preset": "[K3 xxx] + [CS1_60_S]", "acoustic": "reinforced LF contour, supercardioid pattern, down to 25 Hz", "acousticShort": "supercardioid, down to 25 Hz" }
      ],
      "notes": [
        { "text": "Acoustic Properties 열의 주파수 대역(예: \"42 Hz - 20 kHz\", \"down to 25 Hz\")은 원문 서문(p.49)에 명시된 대로 -10 dB 기준 대역폭/저역 한계다." },
        { "text": "카디오이드 배열 시 [KSxx_xx_C] 또는 [KSxx_xx_Cx] 프리셋을 쓴다." },
        { "text": "[K3 xxx] 조정핀: [K3 70]=70º, [K3 90]=90º, [K3 110]=110º — 반드시 선택한 프리셋과 일치시킬 것." },
        {
          "text": "Downfill(어레이 아래쪽 추가 수직 커버리지) 옵션은 K3/K3i에 따라 다르다(15 dB 헤드룸 제공).",
          "subs": [
            "K3용: Kara [KARADOWNK3] 또는 Kara II [KARAIIDOWNK3](110°) / [KARAIIDOWNK3 70] / [KARAIIDOWNK3 90]",
            "K3i용: Kara IIi [KARAIIDOWNK3](110°) / [KARAIIDOWNK3 70] / [KARAIIDOWNK3 90]",
            "[KARAIIDOWNK3]은 Kara II(i) 110° 핀 설정에 최적화."
          ]
        },
        { "text": "출력 라우팅(p.53-54 기준): [K3 xxx] 및 Downfill 프리셋 모두 OUT1=LF, OUT2=HF(IN A) + OUT3=LF, OUT4=HF(IN A), 게인 0dB · 딜레이 0ms · 정상 극성(+) · 뮤트 해제(ON)." }
      ],
      "source": "preset_guide_EN.pdf p.53-54 (owner's manual EN v29.0)"
    }
  },
  {
    "id": "spk-la-k3i",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "K3i",
    "series": "K Series",
    "throwCat": "Long Throw",
    "type": "Line Array",
    "throw": "Long throw >35m",
    "lowInch": 12,
    "lowQty": 2,
    "crossover": "2-way, active",
    "crossoverTags": [
      "2-way",
      "active"
    ],
    "spl": 143,
    "cov": {
      "h": "110°,70°,55°/35°,35°/55°",
      "v": "10°",
      "splayList": [
        0.25,
        1,
        2,
        3,
        4,
        5,
        7.5,
        10
      ]
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "50 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "46 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "42 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 35,
    "transducers": "LF: 2 × 12″ · HF: 1 × 4″",
    "connectors": "4-point terminal block x2",
    "ip": "IP55",
    "dims": "907 x 357 x 429 mm / 35.7 x 14.1 x 16.9 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 6,
            "splByPreset": [
              {
                "preset": "[K3 70]",
                "spl": 143
              }
            ]
          }
        ]
      },
      {
        "model": "LA4X",
        "configs": [
          {
            "mode": "",
            "perCh": 1,
            "total": 2,
            "splByPreset": [
              {
                "preset": "[K3 70]",
                "spl": 143
              }
            ]
          }
        ]
      },
      {
        "model": "LA7.16",
        "configs": [
          {
            "mode": "",
            "perCh": 1,
            "total": 8,
            "splByPreset": [
              {
                "preset": "[K3 70]",
                "spl": 143
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/6), LA4X(1/2), LA7.16(1/8)",
    // [사용자 요청] 기존 Front(spk-la-k3i.webp)/단독 Array(spk-la-k3i-array.webp)
    // 사진 삭제. 순서: Horizontal/Vertical/Array White/Array Black.
    "img": "assets/img/speakers/la/k-series/spk-la-k3i-horizontal.webp",
    "views": [
      {
        "label": "Horizontal",
        "src": "assets/img/speakers/la/k-series/spk-la-k3i-horizontal.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-k3i-vertical.webp"
      },
      {
        "label": "Array White RAL (8x + K3i-BUMP + K3i-SCREENS)",
        "src": "assets/img/speakers/la/k-series/spk-la-k3i-array-white.webp"
      },
      {
        "label": "Array Black (8x + K3i-BUMP + K3i-BAR)",
        "src": "assets/img/speakers/la/k-series/spk-la-k3i-array-black.webp"
      }
    ],
    // [사용자 요청] 카드 hover 대상을 Array White RAL로 지정
    // (K1/K2/K3 와 동일한 cardHoverView 패턴, speakers.view.js cardHTML 참고).
    "cardHoverView": "Array White RAL (8x + K3i-BUMP + K3i-SCREENS)",
    "notes": "K3의 설치용(install) 버전. 전용 인클로저로 K3와 치수/무게가 다름(K3i_AE_EN.docx 원문 확보, raw-data/raw-specs/la/speakers/k-series/k3i.md 참고).",
    "relations": {
      "ampIds": []
    },
    "watt": 830,
    // 원문: raw-data/raw-specs/la/references/presets/k-series/k3.md
    // (출처: preset_guide_EN.pdf p.53-54, owner's manual EN v29.0).
    // K3i는 K3와 동일 인클로저의 다른 버전 — 팩토리 프리셋/권장 구성 공유(원문 명시).
    "presets": {
      "rows": [
        { "config": "K3 line source", "preset": "[K3 xxx]", "acoustic": "42 Hz - 20 kHz, adjustable horizontal directivity", "acousticShort": "42 Hz - 20 kHz, adjustable directivity" },
        { "config": "K3 + subwoofers (KS28/KS21)", "preset": "[K3 xxx] + [KSxx_60]", "acoustic": "reinforced LF contour, down to 29 Hz (KS21) or 25 Hz (KS28)", "acousticShort": "reinforced contour, down to 29/25 Hz" },
        { "config": "K3 + coupled CS1 (beside/behind)", "preset": "[K3 xxx] + [CS1_60]", "acoustic": "reinforced LF contour, LF rejection(rear cardioid), down to 25 Hz", "acousticShort": "rear cardioid, down to 25 Hz" },
        { "config": "K3 + coupled CS1 (supercardioid)", "preset": "[K3 xxx] + [CS1_60_S]", "acoustic": "reinforced LF contour, supercardioid pattern, down to 25 Hz", "acousticShort": "supercardioid, down to 25 Hz" }
      ],
      "notes": [
        { "text": "Acoustic Properties 열의 주파수 대역(예: \"42 Hz - 20 kHz\", \"down to 25 Hz\")은 원문 서문(p.49)에 명시된 대로 -10 dB 기준 대역폭/저역 한계다." },
        { "text": "카디오이드 배열 시 [KSxx_xx_C] 또는 [KSxx_xx_Cx] 프리셋을 쓴다." },
        { "text": "[K3 xxx] 조정핀: [K3 70]=70º, [K3 90]=90º, [K3 110]=110º — 반드시 선택한 프리셋과 일치시킬 것." },
        {
          "text": "Downfill(어레이 아래쪽 추가 수직 커버리지) 옵션은 K3i용 — Kara IIi를 사용한다(15 dB 헤드룸 제공).",
          "subs": [
            "Kara IIi: [KARAIIDOWNK3](110°) / [KARAIIDOWNK3 70] / [KARAIIDOWNK3 90]",
            "[KARAIIDOWNK3]은 Kara II(i) 110° 핀 설정에 최적화."
          ]
        },
        { "text": "출력 라우팅(p.53-54 기준): [K3 xxx] 및 Downfill 프리셋 모두 OUT1=LF, OUT2=HF(IN A) + OUT3=LF, OUT4=HF(IN A), 게인 0dB · 딜레이 0ms · 정상 극성(+) · 뮤트 해제(ON)." }
      ],
      "source": "preset_guide_EN.pdf p.53-54 (owner's manual EN v29.0)"
    }
  },
  {
    "id": "spk-la-kara-ii",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "Kara II",
    "series": "K Series",
    "throwCat": "Long Throw",
    "type": "Line Array",
    "throw": "Long throw >35m",
    "lowInch": 8,
    "lowQty": 2,
    "crossover": "2-way, active",
    "crossoverTags": [
      "2-way",
      "active"
    ],
    "spl": 142,
    "cov": {
      "h": "110°,70°,55°/35°,35°/55°",
      "v": "10°",
      "splayList": [
        0,
        1,
        2,
        3,
        4,
        5,
        7.5,
        10
      ]
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "80 Hz",
        "hi": "19 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "63 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "55 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 26,
    "transducers": "LF: 2 × 8″ · HF: 1 × 3″",
    "connectors": "4-point speakON x2 (IN/LINK 상호교환)",
    "ip": "IP55",
    "dims": "733 x 252 x 500 mm / 28.9 x 9.9 x 19.7 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 6,
            "splByPreset": [
              {
                "preset": "[KARA II 70]",
                "spl": 142
              }
            ]
          }
        ]
      },
      {
        "model": "LA2Xi",
        "configs": [
          {
            "mode": "SE",
            "perCh": 2,
            "total": 4,
            "splByPreset": [
              {
                "preset": "[KARA II 70]",
                "spl": 137
              }
            ]
          }
        ]
      },
      {
        "model": "LA4X",
        "configs": [
          {
            "mode": "",
            "perCh": 2,
            "total": 4,
            "splByPreset": [
              {
                "preset": "[KARA II 70]",
                "spl": 142
              }
            ]
          }
        ]
      },
      {
        "model": "LA7.16",
        "configs": [
          {
            "mode": "",
            "perCh": 1,
            "total": 8,
            "splByPreset": [
              {
                "preset": "[KARA II 70]",
                "spl": 142
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/6), LA2Xi(SE2/4), LA4X(2/4), LA7.16(1/8)",
    // [사용자 요청] 기존 Front 사진(spk-la-kara-ii.webp)을 Horizontal로
    // 개명(실 파일도 spk-la-kara-ii-horizontal.webp로 리네임), 단독 Array
    // 사진(spk-la-kara-ii-array.webp)은 삭제. 순서: Horizontal/Vertical/
    // Vertical(Panflex)/Array(12x+M-BUMP+M-BAR)/With SB18.
    "img": "assets/img/speakers/la/k-series/spk-la-kara-ii-horizontal.webp",
    "views": [
      {
        "label": "Horizontal",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-ii-horizontal.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-ii-vertical.webp"
      },
      {
        "label": "Vertical (Panflex)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-ii-vertical-panflex.webp"
      },
      {
        "label": "Array (12x + M-BUMP + M-BAR)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-ii-array2.webp"
      },
      {
        "label": "With SB18 (3x SB18 + 9x Kara II)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-ii-sb18.webp"
      }
    ],
    // [사용자 요청] 카드 hover 대상을 Array(12x + M-BUMP + M-BAR)로 지정
    // (K1/K2/K3/K3i 와 동일한 cardHoverView 패턴, speakers.view.js cardHTML 참고).
    "cardHoverView": "Array (12x + M-BUMP + M-BAR)",
    "relations": {
      "ampIds": []
    },
    "watt": 355,
    // 원문: raw-data/raw-specs/la/references/presets/k-series/kara-ii.md
    // (출처: preset_guide_EN.pdf p.55-56, owner's manual EN v29.0).
    // Kara II/Kara IIi는 동일 인클로저의 다른 버전 — 팩토리 프리셋/권장 구성 공유(원문 명시).
    "presets": {
      "rows": [
        { "config": "line source", "preset": "[KARA II xxx]", "acoustic": "55 Hz - 20 kHz", "acousticShort": "55 Hz - 20 kHz" },
        { "config": "line source + coupled subwoofers (SB18/KS21)", "preset": "[KARA II xxx] + [xxxx_100]", "acoustic": "down to 32 Hz(SB18)/31 Hz(KS21)/25 Hz(KS28/SB28)", "acousticShort": "down to 32/31/25 Hz" },
        { "config": "line source + separated subwoofers", "preset": "[KARA II xxx] + [xxxx_60]", "acoustic": "reinforced LF contour", "acousticShort": "reinforced LF contour" },
        { "config": "line source + coupled subwoofers + KS28/SB28", "preset": "[KARA II xxx] + [xxxx_100] + [xxxx_60]", "acoustic": "reinforced LF contour, high-pass at 100 Hz", "acousticShort": "reinforced contour, HPF 100 Hz" },
        { "config": "single or pair of enclosures", "preset": "[KARA II_FI]", "acoustic": "flat response", "acousticShort": "flat response" },
        { "config": "single/pair + coupled subwoofers (SB18/KS21)", "preset": "[KARA II_FI] + [xxxx_100]", "acoustic": "down to 32 Hz(SB18) or 31 Hz(KS21), reinforced LF contour", "acousticShort": "down to 32/31 Hz, reinforced contour" },
        { "config": "up to three enclosures", "preset": "[KARA II_MO]", "acoustic": "55 Hz - 20 kHz, low latency", "acousticShort": "55 Hz - 20 kHz, low latency" },
        { "config": "up to three + coupled subwoofers", "preset": "[KARA II_MO] + [xxxx_60]", "acoustic": "down to 32 Hz(SB18) or 29 Hz(KS21), reinforced LF contour, low latency", "acousticShort": "down to 32/29 Hz, low latency" }
      ],
      "notes": [
        { "text": "Acoustic Properties 열의 주파수 대역(예: \"55 Hz - 20 kHz\", \"down to 25 Hz\")은 원문 서문(p.49)에 명시된 대로 -10 dB 기준 대역폭/저역 한계다." },
        { "text": "카디오이드 배열 시 [xxxx_xx_C] 또는 [xxxx_xx_Cx] 프리셋을 쓴다." },
        { "text": "조정핀: [KARA II 70]=70º, [KARA II 90]=90º, [KARA II 110]=110º. [KARA II_FI]/[KARA II_MO]는 110° 핀 설정에 최적화." },
        { "text": "주의(원문 경고): Kara와 Kara II는 같은 라인 소스에서 함께 쓰지 말 것 — 두 시스템 간 음향 커플링이 최적이 아님." },
        {
          "text": "출력 라우팅(p.56 기준)은 프리셋 그룹에 따라 다음과 같다.",
          "subs": [
            "[KARA II 70]/[KARA II 90]/[KARA II 110]: OUT1=LF, OUT2=HF(IN A) + OUT3=LF, OUT4=HF(IN A).",
            "[KARA II_FI]/[KARA II_MO]: OUT1=LF, OUT2=HF(IN A) + OUT3=LF, OUT4=HF(IN B) — 뒤 2채널이 별도 입력(IN B)으로 분리됨."
          ]
        }
      ],
      "source": "preset_guide_EN.pdf p.55-56 (owner's manual EN v29.0)"
    }
  },
  {
    "id": "spk-la-kara-iii",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "Kara IIi",
    "series": "K Series",
    "throwCat": "Long Throw",
    "type": "Line Array",
    "throw": "Long throw >35m",
    "lowInch": 8,
    "lowQty": 2,
    "crossover": "2-way, active",
    "crossoverTags": [
      "2-way",
      "active"
    ],
    "spl": 142,
    "cov": {
      "h": "110°,70°,55°/35°,35°/55°",
      "v": "10°",
      "splayList": [
        0,
        1,
        2,
        3,
        4,
        5,
        7.5,
        10
      ]
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "80 Hz",
        "hi": "19 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "63 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "55 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 21,
    "transducers": "LF: 2 × 8″ · HF: 1 × 3″",
    "connectors": "4-point terminal block x2",
    "ip": "IP55",
    "dims": "701 x 252 x 409 mm / 27.6 x 9.9 x 16.1 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 6,
            "splByPreset": [
              {
                "preset": "[KARA II 70]",
                "spl": 142
              }
            ]
          }
        ]
      },
      {
        "model": "LA2Xi",
        "configs": [
          {
            "mode": "SE",
            "perCh": 2,
            "total": 4,
            "splByPreset": [
              {
                "preset": "[KARA II 70]",
                "spl": 137
              }
            ]
          }
        ]
      },
      {
        "model": "LA4X",
        "configs": [
          {
            "mode": "",
            "perCh": 2,
            "total": 4,
            "splByPreset": [
              {
                "preset": "[KARA II 70]",
                "spl": 142
              }
            ]
          }
        ]
      },
      {
        "model": "LA7.16",
        "configs": [
          {
            "mode": "",
            "perCh": 1,
            "total": 8,
            "splByPreset": [
              {
                "preset": "[KARA II 70]",
                "spl": 142
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/6), LA2Xi(SE2/4), LA4X(2/4), LA7.16(1/8)",
    // [사용자 요청] 기존 Front 사진(spk-la-kara-iii.webp)을 Horizontal로
    // 개명(실 파일도 spk-la-kara-iii-horizontal.webp로 리네임). 기존 단독
    // Array 사진(spk-la-kara-iii-array.webp)은 삭제하지 않고 "Array White
    // (8x + KARAIIi-BUMP)"로 재라벨링, 기존 "Array (8x+KARAIIi-BUMP+M-BARi)"
    // 는 "Array Black"으로 재라벨링. 순서: Horizontal/Vertical/
    // Vertical(Panflex)/Array White/Array Black/With SB18.
    "img": "assets/img/speakers/la/k-series/spk-la-kara-iii-horizontal.webp",
    "views": [
      {
        "label": "Horizontal",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii-horizontal.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii-vertical.webp"
      },
      {
        "label": "Vertical (Panflex)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii-vertical-panflex.webp"
      },
      {
        "label": "Array White (8x + KARAIIi-BUMP)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii-array.webp"
      },
      {
        "label": "Array Black (8x + KARAIIi-BUMP + M-BARi)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii-array2.webp"
      },
      {
        "label": "With SB18 IIi (3x SB18 IIi + 9x Kara IIi + KARAIIi-BUMP)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii-sb18-iii.webp"
      }
    ],
    // [사용자 요청] 카드 hover 대상을 Array White로 지정
    // (K1/K2/K3/K3i/Kara II 와 동일한 cardHoverView 패턴, speakers.view.js cardHTML 참고).
    "cardHoverView": "Array White (8x + KARAIIi-BUMP)",
    "notes": "Kara II의 설치용(install) 버전. 전용 인클로저로 Kara II와 치수/무게가 다름(Kara_IIi_AE_EN.docx 원문 확보, raw-data/raw-specs/la/speakers/k-series/kara-iii.md 참고). Depth 치수는 출처 간 미세 불일치(409mm vs 403mm) 있음 — docx 값 채택, 각주 참고.",
    "relations": {
      "ampIds": []
    },
    "watt": 355,
    // 원문: raw-data/raw-specs/la/references/presets/k-series/kara-ii.md
    // (출처: preset_guide_EN.pdf p.55-56, owner's manual EN v29.0).
    // Kara IIi는 Kara II와 동일 인클로저의 다른 버전 — 팩토리 프리셋/권장 구성 공유(원문 명시).
    "presets": {
      "rows": [
        { "config": "line source", "preset": "[KARA II xxx]", "acoustic": "55 Hz - 20 kHz", "acousticShort": "55 Hz - 20 kHz" },
        { "config": "line source + coupled subwoofers (SB18/KS21)", "preset": "[KARA II xxx] + [xxxx_100]", "acoustic": "down to 32 Hz(SB18)/31 Hz(KS21)/25 Hz(KS28/SB28)", "acousticShort": "down to 32/31/25 Hz" },
        { "config": "line source + separated subwoofers", "preset": "[KARA II xxx] + [xxxx_60]", "acoustic": "reinforced LF contour", "acousticShort": "reinforced LF contour" },
        { "config": "line source + coupled subwoofers + KS28/SB28", "preset": "[KARA II xxx] + [xxxx_100] + [xxxx_60]", "acoustic": "reinforced LF contour, high-pass at 100 Hz", "acousticShort": "reinforced contour, HPF 100 Hz" },
        { "config": "single or pair of enclosures", "preset": "[KARA II_FI]", "acoustic": "flat response", "acousticShort": "flat response" },
        { "config": "single/pair + coupled subwoofers (SB18/KS21)", "preset": "[KARA II_FI] + [xxxx_100]", "acoustic": "down to 32 Hz(SB18) or 31 Hz(KS21), reinforced LF contour", "acousticShort": "down to 32/31 Hz, reinforced contour" },
        { "config": "up to three enclosures", "preset": "[KARA II_MO]", "acoustic": "55 Hz - 20 kHz, low latency", "acousticShort": "55 Hz - 20 kHz, low latency" },
        { "config": "up to three + coupled subwoofers", "preset": "[KARA II_MO] + [xxxx_60]", "acoustic": "down to 32 Hz(SB18) or 29 Hz(KS21), reinforced LF contour, low latency", "acousticShort": "down to 32/29 Hz, low latency" }
      ],
      "notes": [
        { "text": "Acoustic Properties 열의 주파수 대역(예: \"55 Hz - 20 kHz\", \"down to 25 Hz\")은 원문 서문(p.49)에 명시된 대로 -10 dB 기준 대역폭/저역 한계다." },
        { "text": "카디오이드 배열 시 [xxxx_xx_C] 또는 [xxxx_xx_Cx] 프리셋을 쓴다." },
        { "text": "조정핀: [KARA II 70]=70º, [KARA II 90]=90º, [KARA II 110]=110º. [KARA II_FI]/[KARA II_MO]는 110° 핀 설정에 최적화." },
        { "text": "주의(원문 경고): Kara와 Kara II는 같은 라인 소스에서 함께 쓰지 말 것 — 두 시스템 간 음향 커플링이 최적이 아님." },
        {
          "text": "출력 라우팅(p.56 기준)은 프리셋 그룹에 따라 다음과 같다.",
          "subs": [
            "[KARA II 70]/[KARA II 90]/[KARA II 110]: OUT1=LF, OUT2=HF(IN A) + OUT3=LF, OUT4=HF(IN A).",
            "[KARA II_FI]/[KARA II_MO]: OUT1=LF, OUT2=HF(IN A) + OUT3=LF, OUT4=HF(IN B) — 뒤 2채널이 별도 입력(IN B)으로 분리됨."
          ]
        }
      ],
      "source": "preset_guide_EN.pdf p.55-56 (owner's manual EN v29.0)"
    }
  },
  {
    "id": "spk-la-kiva-ii",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "KIVA II",
    "series": "K Series",
    "throwCat": "Long Throw",
    "type": "Line Array",
    "throw": "Long throw >35m",
    "lowInch": 6.5,
    "lowQty": 2,
    "crossover": "2-way, passive",
    "crossoverTags": [
      "2-way",
      "passive"
    ],
    "spl": 138,
    "cov": {
      "h": "100°",
      "splayList": [
        0,
        1,
        2,
        3,
        4,
        5,
        7.5,
        10,
        12.5,
        15
      ]
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "84 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "75 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "70 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 14,
    "transducers": "LF: 2 × 6.5″ · HF: 1 × 1.75″",
    "connectors": "4-point speakON x2 (IN/LINK 상호교환)",
    "ip": "IP55",
    "dims": "525 x 202 x 357 mm / 20.7 x 8 x 14.1 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 6,
            "total": 24,
            "splByPreset": [
              {
                "preset": "[KIVA II]",
                "spl": 138
              }
            ]
          }
        ]
      },
      {
        "model": "LA2Xi",
        "configs": [
          {
            "mode": "BTL",
            "perCh": 2,
            "total": 4,
            "splByPreset": [
              {
                "preset": "[KIVA II]",
                "spl": 138
              }
            ]
          }
        ]
      },
      {
        "model": "LA2Xi",
        "configs": [
          {
            "mode": "SE",
            "perCh": 2,
            "total": 8,
            "splByPreset": [
              {
                "preset": "[KIVA II]",
                "spl": 133
              }
            ]
          }
        ]
      },
      {
        "model": "LA4X",
        "configs": [
          {
            "mode": "",
            "perCh": 2,
            "total": 8,
            "splByPreset": [
              {
                "preset": "[KIVA II]",
                "spl": 138
              }
            ]
          }
        ]
      },
      {
        "model": "LA7.16",
        "configs": [
          {
            "mode": "",
            "perCh": 2,
            "total": 32,
            "splByPreset": [
              {
                "preset": "[KIVA II]",
                "spl": 138
              }
            ]
          }
        ]
      },
      {
        "model": "LA1.16i",
        "configs": [
          {
            "mode": "BTL",
            "perCh": 2,
            "total": 10,
            "splByPreset": [
              {
                "preset": "[KIVA II]",
                "spl": 132
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(6/24), LA2Xi(BTL2/4), LA2Xi(SE2/8), LA4X(2/8), LA7.16(2/32), LA1.16i(BTL2/10)",
    "img": "assets/img/speakers/la/k-series/spk-la-kiva-ii.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/k-series/spk-la-kiva-ii.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/k-series/spk-la-kiva-ii-array.webp"
      },
      {
        "label": "Vertical (Front)",
        "src": "assets/img/speakers/la/k-series/spk-la-kiva-ii-vertical-front.webp"
      },
      {
        "label": "Vertical (Rear)",
        "src": "assets/img/speakers/la/k-series/spk-la-kiva-ii-vertical-rear.webp"
      }
    ],
    "relations": {
      "ampIds": []
    },
    "watt": 186,
    // 원문: raw-data/raw-specs/la/references/presets/k-series/kiva-ii.md
    // (출처: preset_guide_EN.pdf p.58, owner's manual EN v29.0).
    "presets": {
      "rows": [
        { "config": "line source", "preset": "[KIVA II]", "acoustic": "70 Hz - 20 kHz", "acousticShort": "70 Hz - 20 kHz" },
        { "config": "line source + coupled subwoofer (SB15m/SB18)", "preset": "[KIVA II] + [SB15_100] / [SB18_60]", "acoustic": "down to 32 Hz(SB18)/40 Hz(SB15m), reinforced LF contour", "acousticShort": "down to 32/40 Hz, reinforced contour" },
        { "config": "up to three enclosures", "preset": "[KIVA II_FI]", "acoustic": "70 Hz - 20 kHz, flat response", "acousticShort": "70 Hz - 20 kHz, flat response" },
        { "config": "up to three + coupled subwoofer (SB15m)", "preset": "[KIVA II_FI] + [SB15_100]", "acoustic": "down to 40 Hz, reinforced LF contour", "acousticShort": "down to 40 Hz, reinforced contour" }
      ],
      "notes": [
        { "text": "Acoustic Properties 열의 주파수 대역(예: \"70 Hz - 20 kHz\", \"down to 40 Hz\")은 원문 서문(p.49)에 명시된 대로 -10 dB 기준 대역폭/저역 한계다." },
        { "text": "카디오이드 배열 시 [SB1x_xx_C] 또는 [SB1x_xx_Cx] 프리셋을 쓴다." },
        {
          "text": "출력 라우팅(p.58 기준)은 프리셋에 따라 다음과 같다.",
          "subs": [
            "[KIVA II]: OUT1~4 전부 PA 채널, IN A, 게인 0dB · 딜레이 0ms · 정상 극성(+) · 뮤트 해제(ON).",
            "[KIVA II_FI]: OUT1/2=PA(IN A) + OUT3/4=PA(IN B)."
          ]
        }
      ],
      "source": "preset_guide_EN.pdf p.58 (owner's manual EN v29.0)"
    }
  },
  {
    "id": "spk-la-k1-sb",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "K1-SB",
    "series": "K Series",
    "throwCat": "Long Throw",
    "type": "Subwoofer",
    "throw": "Low-end extension",
    "lowInch": 15,
    "lowQty": 2,
    "crossover": "passive",
    "crossoverTags": [
      "passive"
    ],
    "spl": 141,
    "cov": null,
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "38 Hz",
        "hi": "61 Hz"
      },
      {
        "db": "-6 dB",
        "lo": "35 Hz",
        "hi": "70 Hz"
      },
      {
        "db": "-10 dB",
        "lo": "30 Hz",
        "hi": "80 Hz"
      }
    ],
    "weight": 83,
    "transducers": "LF: 2 × 15″",
    "connectors": "4-point speakON",
    "ip": "IP45",
    "dims": "1342 x 438 x 520 mm / 52.8 x 17.2 x 20.5 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 1,
            "total": 4,
            "splByPreset": [
              {
                "preset": "[K1SB_60]",
                "spl": 141
              },
              {
                "preset": "[K1SB_100_NC]",
                "spl": 142
              },
              {
                "preset": "[K1SB_X]",
                "spl": 145
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(1/4)",
    "img": "assets/img/speakers/la/k-series/spk-la-k1-sb.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/k-series/spk-la-k1-sb.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/k-series/spk-la-k1-sb-array.webp"
      },
      {
        "label": "Array (8x + K1-BUMP)",
        "src": "assets/img/speakers/la/k-series/spk-la-k1-sb-array2.webp"
      },
      {
        "label": "Horizontal",
        "src": "assets/img/speakers/la/k-series/spk-la-k1-sb-horizontal.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-k1-sb-vertical.webp"
      }
    ],
    "relations": {
      "ampIds": []
    },
    "watt": 930
  }
];
