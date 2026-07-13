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
    // (출처: preset_guide_EN.pdf p.49-50, owner's manual EN v29.0).
    "presets": {
      "rows": [
        { "config": "K1 line source", "preset": "[K1]", "acoustic": "35 Hz - 20 kHz", "acousticShort": "35 Hz - 20 kHz" },
        { "config": "K1 + K1-SB (on top)", "preset": "[K1] + [K1SB_X]", "acoustic": "enhanced LF throw, down to 30 Hz", "acousticShort": "enhanced throw, down to 30 Hz" },
        { "config": "K1 + coupled K1-SB (beside/behind)", "preset": "[K1] + [K1SB_60]", "acoustic": "reinforced LF contour, LF rejection(side polarized or rear cardioid), down to 33 Hz", "acousticShort": "side/rear cardioid, down to 33 Hz" },
        { "config": "K1 + coupled K1-SB (behind, NC)", "preset": "[K1] + [K1SB_100_NC]", "acoustic": "reinforced LF contour, LF rejection(rear cardioid), down to 25 Hz", "acousticShort": "rear cardioid, down to 25 Hz" },
        { "config": "K1 + subwoofers (KS28/SB28)", "preset": "[K1] + [xx28_60]", "acoustic": "reinforced LF contour, down to 25 Hz", "acousticShort": "reinforced contour, down to 25 Hz" },
        { "config": "K1 + coupled CS1 (beside/behind)", "preset": "[K1] + [CS1_60]", "acoustic": "reinforced LF contour, LF rejection(rear cardioid), down to 25 Hz", "acousticShort": "rear cardioid, down to 25 Hz" },
        { "config": "K1 + coupled CS1 (supercardioid)", "preset": "[K1] + [CS1_60_S]", "acoustic": "reinforced LF contour, supercardioid pattern, down to 25 Hz", "acousticShort": "supercardioid, down to 25 Hz" }
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
      "notes": [
        { "text": "카디오이드 배열(측면·후면으로 향하는 저역을 상쇄해 무대 뒤나 옆으로 새는 저음을 줄이는 배치)로 세울 때는 [xx28_60_C] 또는 [xx28_60_Cx] 프리셋을 쓴다." },
        {
          "text": "Downfill(무대 바로 앞 관객 등 어레이 아래쪽 사각지대를 보완하는 추가 수직 커버리지) 옵션은 라인마다 다르다.",
          "subs": [
            "K2 라인: [K2 110] / [K2 90] / [K2 70]",
            "Kara: [KARADOWNK1]",
            "Kara II: [KARAIIDOWNK1](110°) / [KARAIIDOWNK1 70] / [KARAIIDOWNK1 90] — 이 중 [KARAIIDOWNK1]은 Kara II를 110° 핀 설정으로 조립했을 때 맞춰 최적화된 프리셋."
          ]
        },
        { "text": "호환성 주의: 프리셋 라이브러리 4.0 버전을 기점으로 [K1] · [KARADOWNK1] · [K2 xxx] 프리셋의 내부 구성이 바뀌어, 4.0 이후 버전과 4.0 이전 버전은 서로 호환되지 않는다. 같은 라인 소스(어레이) 안의 모든 유닛은 반드시 동일한 라이브러리 버전을 써야 한다 — 일부만 다른 버전이면 유닛 간 특성이 어긋난다." },
        {
          "text": "출력 라우팅(공식 매뉴얼 Preset Description, p.50 기준)은 프리셋 그룹에 따라 다음 두 가지로 나뉜다.",
          "subs": [
            "[K1] / [K2 xxx] 계열: OUT1=좌측 LF, OUT2=우측 LF, OUT3=MF, OUT4=HF. 네 채널 모두 입력 IN A · 게인 0dB · 딜레이 0ms · 극성은 반전 없는 정상(+) · 뮤트 해제(ON).",
            "[K1SB_X] / [K1SB_60] / [K1SB_100_NC] 등 K1-SB 서브우퍼 계열: OUT1~4 네 채널 전부 SB(서브우퍼) 채널로 통일. 나머지 입력·게인·딜레이·극성·뮤트 값은 위와 동일."
          ]
        }
      ],
      "source": "preset_guide_EN.pdf p.49-50 (owner's manual EN v29.0); 교차검증: L-Acoustics K1 User Manual \"Preset description\" p.23 (manualslib.com 게재본, v6.0)"
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
    "img": "assets/img/speakers/la/k-series/spk-la-k2.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/k-series/spk-la-k2.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/k-series/spk-la-k2-array.webp"
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
        "label": "Horizontal",
        "src": "assets/img/speakers/la/k-series/spk-la-k2-horizontal.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-k2-vertical.webp"
      },
      {
        "label": "Panflex Detail",
        "src": "assets/img/speakers/la/k-series/spk-la-k2-panflex-detail.webp"
      }
    ],
    "relations": {
      "ampIds": []
    },
    "watt": 752
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
    "img": "assets/img/speakers/la/k-series/spk-la-k3.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/k-series/spk-la-k3.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/k-series/spk-la-k3-array.webp"
      },
      {
        "label": "Array (12x + K3-BUMP + K3-BAR)",
        "src": "assets/img/speakers/la/k-series/spk-la-k3-array2.webp"
      },
      {
        "label": "With KS28 (4x + K3-TILT)",
        "src": "assets/img/speakers/la/k-series/spk-la-k3-ks28-tilt.webp"
      },
      {
        "label": "Rigging (8x + K3-RIGBAR)",
        "src": "assets/img/speakers/la/k-series/spk-la-k3-rigbar.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-k3-vertical.webp"
      }
    ],
    "relations": {
      "ampIds": []
    },
    "watt": 830
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
    "img": "assets/img/speakers/la/k-series/spk-la-k3i.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/k-series/spk-la-k3i.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/k-series/spk-la-k3i-array.webp"
      },
      {
        "label": "Array White RAL (8x + K3i-BUMP + K3i-SCREENS)",
        "src": "assets/img/speakers/la/k-series/spk-la-k3i-array-white.webp"
      },
      {
        "label": "Array Black (8x + K3i-BUMP + K3i-BAR)",
        "src": "assets/img/speakers/la/k-series/spk-la-k3i-array-black.webp"
      },
      {
        "label": "Horizontal",
        "src": "assets/img/speakers/la/k-series/spk-la-k3i-horizontal.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-k3i-vertical.webp"
      }
    ],
    "notes": "K3의 설치용(install) 버전. 전용 인클로저로 K3와 치수/무게가 다름(K3i_AE_EN.docx 원문 확보, raw-data/raw-specs/la/speakers/k-series/k3i.md 참고).",
    "relations": {
      "ampIds": []
    },
    "watt": 830
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
    "img": "assets/img/speakers/la/k-series/spk-la-kara-ii.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-ii.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-ii-array.webp"
      },
      {
        "label": "Array (12x + M-BUMP + M-BAR)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-ii-array2.webp"
      },
      {
        "label": "With SB18 (3x SB18 + 9x Kara II)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-ii-sb18.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-ii-vertical.webp"
      },
      {
        "label": "Vertical (Panflex)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-ii-vertical-panflex.webp"
      }
    ],
    "relations": {
      "ampIds": []
    },
    "watt": 355
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
    "img": "assets/img/speakers/la/k-series/spk-la-kara-iii.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii-array.webp"
      },
      {
        "label": "Array (8x + KARAIIi-BUMP + M-BARi)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii-array2.webp"
      },
      {
        "label": "With SB18 IIi (3x SB18 IIi + 9x Kara IIi + KARAIIi-BUMP)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii-sb18-iii.webp"
      },
      {
        "label": "Vertical",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii-vertical.webp"
      },
      {
        "label": "Vertical (Panflex)",
        "src": "assets/img/speakers/la/k-series/spk-la-kara-iii-vertical-panflex.webp"
      }
    ],
    "notes": "Kara II의 설치용(install) 버전. 전용 인클로저로 Kara II와 치수/무게가 다름(Kara_IIi_AE_EN.docx 원문 확보, raw-data/raw-specs/la/speakers/k-series/kara-iii.md 참고). Depth 치수는 출처 간 미세 불일치(409mm vs 403mm) 있음 — docx 값 채택, 각주 참고.",
    "relations": {
      "ampIds": []
    },
    "watt": 355
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
    "watt": 186
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
