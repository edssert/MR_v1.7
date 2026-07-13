// L-Acoustics A Series 스피커 데이터 (4개 모델).
// 필드 스키마 설명은 speakers.schema.js 참조.
// 파생 필드(wayCount / network / lowUnitConfig)는 로드 시 normalize 함수가 생성하므로 저장하지 않는다.
export const LA_A_SERIES = [
  {
    "id": "spk-la-a10-focus",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "A10 Focus",
    "series": "A Series",
    "throwCat": "Medium Throw",
    "type": "Constant Curvature Line",
    "throw": "Medium throw <45m",
    "lowInch": 10,
    "lowQty": 1,
    "crossover": "2-way, passive",
    "crossoverTags": [
      "2-way",
      "passive"
    ],
    "spl": 140,
    "cov": {
      "h": "70°,110°,55°/35°,35°/55°",
      "v": "10°"
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "75 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "70 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "66 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 22,
    "transducers": "LF: 1 × 10″ · HF: 1 × 2.5″",
    "connectors": "4-point speakON",
    "ip": "IP55",
    "dims": "581 x 354 x 339 mm / 22.9 x 13.9 x 13.3 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 12,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 140
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
            "perCh": 1,
            "total": 2,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 140
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
                "preset": "[A10]",
                "spl": 136
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
                "preset": "[A10]",
                "spl": 140
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
            "total": 16,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 140
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/12), LA2Xi(BTL1/2), LA2Xi(SE2/8), LA4X(2/8), LA7.16(1/16)",
    "img": "assets/img/speakers/la/a-series/spk-la-a10-focus.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/a-series/spk-la-a10-focus.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/a-series/spk-la-a10-focus-array.webp"
      }
    ],
    "relations": {
      "ampIds": []
    },
    "watt": 296
  },
  {
    "id": "spk-la-a10i-focus",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "A10i Focus",
    "series": "A Series",
    "throwCat": "Medium Throw",
    "type": "Constant Curvature Line",
    "throw": "Medium throw <45m",
    "lowInch": 10,
    "lowQty": 1,
    "crossover": "2-way, passive",
    "crossoverTags": [
      "2-way",
      "passive"
    ],
    "spl": 140,
    "cov": {
      "h": "70°,110°,55°/35°,35°/55°",
      "v": "10°"
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "75 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "70 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "66 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 19,
    "transducers": "LF: 1 × 10″ · HF: 1 × 2.5″",
    "connectors": "4-point terminal block with push-in connection",
    "ip": "IP55",
    "dims": "569 x 350 x 339 mm / 22.4 x 13.8 x 13.3 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 12,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 140
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
            "perCh": 1,
            "total": 2,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 140
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
                "preset": "[A10]",
                "spl": 136
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
                "preset": "[A10]",
                "spl": 140
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
            "total": 16,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 140
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/12), LA2Xi(BTL1/2), LA2Xi(SE2/8), LA4X(2/8), LA7.16(1/16)",
    "img": "assets/img/speakers/la/a-series/spk-la-a10i-focus.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/a-series/spk-la-a10i-focus.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/a-series/spk-la-a10i-focus-array.webp"
      }
    ],
    "notes": "A10 Wide/Focus의 설치용(install) 버전. L-Acoustics preset_guide_EN.pdf(v29.0)에 A10/A10i가 동일 인클로저로 팩토리 프리셋·앰프 매칭을 공유한다고 명시되어 있어 음향 스펙은 A10 Focus와 동일하게 반영. 물리 스펙은 공식 스펙시트(A10i_AE_EN.docx, 2026-07-10 확보)로 채움.",
    "relations": {
      "ampIds": []
    },
    "watt": 296
  },
  {
    "id": "spk-la-a10-wide",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "A10 Wide",
    "series": "A Series",
    "throwCat": "Medium Throw",
    "type": "Constant Curvature Line",
    "throw": "Medium throw <45m",
    "lowInch": 10,
    "lowQty": 1,
    "crossover": "2-way, passive",
    "crossoverTags": [
      "2-way",
      "passive"
    ],
    "spl": 137,
    "cov": {
      "h": "70°,110°,55°/35°,35°/55°",
      "v": "30°"
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "78 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "72 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "67 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 20,
    "transducers": "LF: 1 × 10″ · HF: 1 × 2.5″",
    "connectors": "4-point speakON",
    "ip": "IP55",
    "dims": "581 x 347 x 180 mm / 22.9 x 13.7 x 7.1 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 12,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 137
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
            "perCh": 1,
            "total": 2,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 137
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
                "preset": "[A10]",
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
                "preset": "[A10]",
                "spl": 137
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
            "total": 16,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 137
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/12), LA2Xi(BTL1/2), LA2Xi(SE2/8), LA4X(2/8), LA7.16(1/16)",
    "img": "assets/img/speakers/la/a-series/spk-la-a10-wide.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/a-series/spk-la-a10-wide.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/a-series/spk-la-a10-wide-array.webp"
      }
    ],
    "relations": {
      "ampIds": []
    },
    "watt": 296
  },
  {
    "id": "spk-la-a10i-wide",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "A10i Wide",
    "series": "A Series",
    "throwCat": "Medium Throw",
    "type": "Constant Curvature Line",
    "throw": "Medium throw <45m",
    "lowInch": 10,
    "lowQty": 1,
    "crossover": "2-way, passive",
    "crossoverTags": [
      "2-way",
      "passive"
    ],
    "spl": 137,
    "cov": {
      "h": "70°,110°,55°/35°,35°/55°",
      "v": "30°"
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "78 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "72 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "67 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 18,
    "transducers": "LF: 1 × 10″ · HF: 1 × 2.5″",
    "connectors": "4-point terminal block with push-in connection",
    "ip": "IP55",
    "dims": "569 x 347 x 345 mm / 22.4 x 13.7 x 13.6 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 12,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 137
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
            "perCh": 1,
            "total": 2,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 137
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
                "preset": "[A10]",
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
                "preset": "[A10]",
                "spl": 137
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
            "total": 16,
            "splByPreset": [
              {
                "preset": "[A10]",
                "spl": 137
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/12), LA2Xi(BTL1/2), LA2Xi(SE2/8), LA4X(2/8), LA7.16(1/16)",
    "img": "assets/img/speakers/la/a-series/spk-la-a10i-wide.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/a-series/spk-la-a10i-wide.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/a-series/spk-la-a10i-wide-array.webp"
      }
    ],
    "notes": "A10 Wide/Focus의 설치용(install) 버전. L-Acoustics preset_guide_EN.pdf(v29.0)에 A10/A10i가 동일 인클로저로 팩토리 프리셋·앰프 매칭을 공유한다고 명시되어 있어 음향 스펙은 A10 Wide와 동일하게 반영. 물리 스펙은 공식 스펙시트(A10i_AE_EN.docx, 2026-07-10 확보)로 채움.",
    "relations": {
      "ampIds": []
    },
    "watt": 296
  },
  {
    "id": "spk-la-a15-focus",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "A15 Focus",
    "series": "A Series",
    "throwCat": "Medium Throw",
    "type": "Constant Curvature Line",
    "throw": "Medium throw <45m",
    "lowInch": 15,
    "lowQty": 1,
    "crossover": "2-way, passive",
    "crossoverTags": [
      "2-way",
      "passive"
    ],
    "spl": 144,
    "cov": {
      "h": "70°,110°,55°/35°,35°/55°",
      "v": "10°"
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "47 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "44 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "41 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 35,
    "transducers": "LF: 1 × 15″ · HF: 1 × 3″",
    "connectors": "4-point speakON",
    "ip": "IP55",
    "dims": "762 x 427 x 490 mm / 30 x 16.8 x 19.3 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 12,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 144
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
            "perCh": 1,
            "total": 2,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 144
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
            "perCh": 1,
            "total": 4,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 139
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
            "total": 4,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 144
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
            "total": 10,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 144
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/12), LA2Xi(BTL1/2), LA2Xi(SE1/4), LA4X(1/4), LA7.16(1/10)",
    "img": "assets/img/speakers/la/a-series/spk-la-a15-focus.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/a-series/spk-la-a15-focus.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/a-series/spk-la-a15-focus-array.webp"
      }
    ],
    "relations": {
      "ampIds": []
    },
    "watt": 446
  },
  {
    "id": "spk-la-a15i-focus",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "A15i Focus",
    "series": "A Series",
    "throwCat": "Medium Throw",
    "type": "Constant Curvature Line",
    "throw": "Medium throw <45m",
    "lowInch": 15,
    "lowQty": 1,
    "crossover": "2-way, passive",
    "crossoverTags": [
      "2-way",
      "passive"
    ],
    "spl": 144,
    "cov": {
      "h": "70°,110°,55°/35°,35°/55°",
      "v": "10°"
    },
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "47 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "44 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "41 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 33,
    "transducers": "LF: 1 × 15″ · HF: 1 × 3″",
    "connectors": "4-point terminal block with push-in connection",
    "ip": "IP55",
    "dims": "752 x 427 x 490 mm / 30 x 16.8 x 19.3 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 12,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 144
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
            "perCh": 1,
            "total": 2,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 144
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
            "perCh": 1,
            "total": 4,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 139
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
            "total": 4,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 144
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
            "total": 10,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 144
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/12), LA2Xi(BTL1/2), LA2Xi(SE1/4), LA4X(1/4), LA7.16(1/10)",
    "img": "assets/img/speakers/la/a-series/spk-la-a15i-focus.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/a-series/spk-la-a15i-focus.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/a-series/spk-la-a15i-focus-array.webp"
      }
    ],
    "notes": "A15 Wide/Focus의 설치용(install) 버전. L-Acoustics preset_guide_EN.pdf(v29.0)에 A15/A15i가 동일 인클로저로 팩토리 프리셋·앰프 매칭을 공유한다고 명시되어 있어 음향 스펙은 A15 Focus와 동일하게 반영. 물리 스펙은 공식 스펙시트(A15i_AE_EN.docx, 2026-07-10 확보)로 채움.",
    "relations": {
      "ampIds": []
    },
    "watt": 446
  },
  {
    "id": "spk-la-a15-wide",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "A15 Wide",
    "series": "A Series",
    "throwCat": "Medium Throw",
    "type": "Constant Curvature Line",
    "throw": "Medium throw <45m",
    "lowInch": 15,
    "lowQty": 1,
    "crossover": "2-way, passive",
    "crossoverTags": [
      "2-way",
      "passive"
    ],
    "spl": 141,
    "cov": null,
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "52 Hz",
        "hi": "19 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "47 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "42 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 33,
    "transducers": "LF: 1 × 15″ · HF: 1 × 3″",
    "connectors": "4-point speakON",
    "ip": "IP55",
    "dims": "762 x 424 x 494 mm / 30 x 16.7 x 19.4 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 12,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 141
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
            "perCh": 1,
            "total": 2,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 141
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
            "perCh": 1,
            "total": 4,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 136
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
            "total": 4,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 141
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
            "total": 10,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 141
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/12), LA2Xi(BTL1/2), LA2Xi(SE1/4), LA4X(1/4), LA7.16(1/10)",
    "img": "assets/img/speakers/la/a-series/spk-la-a15-wide.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/a-series/spk-la-a15-wide.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/a-series/spk-la-a15-wide-array.webp"
      }
    ],
    "relations": {
      "ampIds": []
    },
    "watt": 446
  },
  {
    "id": "spk-la-a15i-wide",
    "mfr": "L-Acoustics",
    "mk": "la",
    "name": "A15i Wide",
    "series": "A Series",
    "throwCat": "Medium Throw",
    "type": "Constant Curvature Line",
    "throw": "Medium throw <45m",
    "lowInch": 15,
    "lowQty": 1,
    "crossover": "2-way, passive",
    "crossoverTags": [
      "2-way",
      "passive"
    ],
    "spl": 141,
    "cov": null,
    "freqs": [
      {
        "db": "-3 dB",
        "lo": "52 Hz",
        "hi": "19 kHz"
      },
      {
        "db": "-6 dB",
        "lo": "47 Hz",
        "hi": "20 kHz"
      },
      {
        "db": "-10 dB",
        "lo": "42 Hz",
        "hi": "20 kHz"
      }
    ],
    "weight": 29,
    "transducers": "LF: 1 × 15″ · HF: 1 × 3″",
    "connectors": "4-point terminal block with push-in connection",
    "ip": "IP55",
    "dims": "752 x 424 x 494 mm / 30 x 16.7 x 19.4 in",
    "amps": [
      {
        "model": "LA12X",
        "configs": [
          {
            "mode": "",
            "perCh": 3,
            "total": 12,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 141
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
            "perCh": 1,
            "total": 2,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 141
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
            "perCh": 1,
            "total": 4,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 136
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
            "total": 4,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 141
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
            "total": 10,
            "splByPreset": [
              {
                "preset": "[A15]",
                "spl": 141
              }
            ]
          }
        ]
      }
    ],
    "ampRaw": "LA12X(3/12), LA2Xi(BTL1/2), LA2Xi(SE1/4), LA4X(1/4), LA7.16(1/10)",
    "img": "assets/img/speakers/la/a-series/spk-la-a15i-wide.webp",
    "views": [
      {
        "label": "Front",
        "src": "assets/img/speakers/la/a-series/spk-la-a15i-wide.webp"
      },
      {
        "label": "Array",
        "src": "assets/img/speakers/la/a-series/spk-la-a15i-wide-array.webp"
      }
    ],
    "notes": "A15 Wide/Focus의 설치용(install) 버전. L-Acoustics preset_guide_EN.pdf(v29.0)에 A15/A15i가 동일 인클로저로 팩토리 프리셋·앰프 매칭을 공유한다고 명시되어 있어 음향 스펙은 A15 Wide와 동일하게 반영. 물리 스펙은 공식 스펙시트(A15i_AE_EN.docx, 2026-07-10 확보)로 채움.",
    "relations": {
      "ampIds": []
    },
    "watt": 446
  }
];
