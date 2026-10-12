# Hyeonseo Yang — Personal website

- 홈페이지: https://yhs0602.github.io/
- 저장소: https://github.com/yhs0602/yhs0602.github.io

별도 빌드 도구 없이 HTML/CSS로 구성한 개인 홈페이지입니다.

## 수정하기

`index.html`에서 소개, 경력, 학력, 프로젝트, 링크를 수정합니다. 디자인은 `styles.css`, 언어 전환은 `language.js`에서 관리합니다.
학력, 실무경험, 연구 논문 6편, 프로젝트 3개, 미국 등록 특허, LinkedIn/GitHub/Stack Overflow 링크를 수록합니다.
각 논문은 `<article class="publication">`으로 작성되어 있으며, `<details>`에 한국어 초록 요약이 있습니다.
번역할 문구는 `<span data-ko="한국어" data-en="English">한국어</span>` 형식을 사용합니다.
오른쪽 상단 토글은 메뉴, 본문, 논문 요약, 문서 언어, 제목과 설명을 전환합니다. 선택 언어를 브라우저에 저장하며, URL의 `?lang=ko` 또는 `?lang=en`이 저장값보다 우선합니다.
직접 공유: https://yhs0602.github.io/?lang=en
자바스크립트가 비활성화되면 기본 한국어 본문을 표시합니다.

로컬 미리보기:

```sh
python3 -m http.server 8000
```

브라우저에서 http://localhost:8000 을 엽니다. 서버 종료는 Ctrl+C입니다.

## 배포하기

```sh
git add index.html styles.css language.js
git commit -m "Update personal website"
git push
```

GitHub Pages가 `main` 브랜치의 루트(`/`)를 자동 배포합니다.
`.nojekyll` 파일로 Jekyll 처리를 생략합니다.
배포 반영에는 몇 분이 걸릴 수 있습니다.

## GitHub Pages 설정

저장소 **Settings → Pages → Build and deployment**:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**

개인 대표 홈페이지 주소를 쓰려면 저장소 이름이 정확히 `yhs0602.github.io`여야 합니다.
일반 저장소 이름이 `homepage`라면 주소는 `https://yhs0602.github.io/homepage/`가 됩니다.

공식 안내: https://docs.github.com/en/pages/quickstart

## 논문 및 이력 출처

2026-10-12 기준 확인. 본인 제공 학력과 공개 논문 저자 정보를 대조했습니다.
학사 2023년·석사 2025년은 [Neurocomputing 출판본의 저자 소개](https://www.sciencedirect.com/science/article/pii/S0925231226018333)에서도 확인됩니다.
경기고등학교와 석사 연구실은 본인 제공 정보입니다.
HYPERCONNECT 직책은 [연구실 공식 동문 페이지](https://snu-bi.github.io/team/)에서 확인했으며, 재직 기간과 업무는 본인이 제공한 LinkedIn 경력 내용을 반영했습니다.

| 논문 | 출판 정보 및 확인 자료 |
| --- | --- |
| CraftGround: A High-Performance Reinforcement Learning Environment Based on Minecraft | [IEEE Access / DOI](https://doi.org/10.1109/ACCESS.2026.3690228), [서울대 연구 업적](https://snu.elsevierpure.com/en/publications/craftground-a-high-performance-reinforcement-learning-environment/) |
| From Sparse to Dense | [IEEE TCDS / DOI](https://doi.org/10.1109/TCDS.2025.3642038), [서울대 연구 업적](https://snu.elsevierpure.com/en/publications/from-sparse-to-dense-toddler-inspired-reward-transition-in-goal-o/), [arXiv](https://arxiv.org/abs/2501.17842) |
| Surface-Based Visibility-Guided Uncertainty | [AAAI AIBSD 2026 공식 프로그램](https://aibsdworkshop.github.io/2026/index.html), [arXiv v3](https://arxiv.org/abs/2405.02568), [제1저자 홈페이지](https://hskalena.github.io/) |
| Toward object-centric spatial abstraction | [Neurocomputing 출판본](https://www.sciencedirect.com/science/article/pii/S0925231226018333), [DOI](https://doi.org/10.1016/j.neucom.2026.134435), [OBSER 초판](https://arxiv.org/abs/2507.02929) |
| CraftGround: 최신 마인크래프트 기반의 유연한 강화학습 환경 | [한국정보과학회 원문](https://jok.kiise.or.kr/digital-library/full-text/view?doi=10.5626/JOK.2025.52.3.189), [성신여대 리포지터리](https://repository.sungshin.ac.kr/handle/2025.oak/8678) |
| 새로운 강화학습 환경에서의 부분 관측 마르코프 결정 프로세스 학습 | [KSC 2023 논문 기록 / DBpia](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11705317) |

- Google Scholar 직접 접근은 차단되어 전체 목록을 직접 열람하지 못했습니다. arXiv, 출판사, 대학 리포지터리, DBLP와 LinkedIn을 대조한 확인 목록입니다. 누락이 없음을 보장하는 목록은 아닙니다.
- 국제 저널·워크숍 4편, 국내 저널 1편, KSC 1편입니다. 두 번째 KSC 논문은 확인되지 않았습니다.
- Surface-Based Visibility 논문은 AAAI **워크숍 Oral**입니다. 본 학회 논문으로 표기하지 않습니다. 동일 arXiv ID의 이전 제목은 별도 논문으로 세지 않습니다.
- OBSER와 Neurocomputing 출판본도 한 항목으로 묶습니다. Neurocomputing의 권호 날짜는 2026-11-01이며, 확인 시점에 출판사 온라인 원문과 DOI가 공개되어 있습니다.
- From Sparse to Dense의 arXiv 초판은 2025년, 최종 권호는 2026년입니다. 저자에 Hyeonseo Yang이 없는 AAAI 2024의 유사 제목 논문은 제외했습니다.
- CraftGround의 국내 논문과 IEEE Access 논문은 제목·DOI가 다른 출판물로 각각 수록합니다. IEEE Access 논문에 대응하는 arXiv는 확인되지 않아 링크를 만들지 않았습니다.
- 한국어 초록은 원문 내용을 요약한 것이며 원문 초록을 그대로 복제한 것이 아닙니다. PDF를 확보하지 못한 논문은 출판사/학술 DB 페이지로 연결합니다.

## 경력·특허 및 영문판 출처

- 학위 취득 기간과 덧셈, SNULife, BlueSignum, Softberry, 3R Innovation의 재직 기간·업무는 본인이 제공한 최근 이력서에서 요약했습니다. 영문판도 같은 사실을 번역합니다.
- 피플펀드는 본인이 재직하지 않았다고 확인해 제외했습니다. Softberry는 2022년 1–2월로 기재합니다.
- 바이오시스템공학 입학 후 컴퓨터공학으로 전과한 이력은 본인 제공 정보에 따라 학력 아래 한 줄로 표기합니다.
- HYPERCONNECT: Machine Learning Software Engineer, 정규직, 2025.10–현재, 서울 오피스 근무. 콘텐츠 모더레이션 PaaS 개발·운영. LinkedIn 직접 열람은 로그인 화면으로 제한되어 본인이 제공한 경력 내용을 사용했습니다. 변동하는 근속 개월 수는 표시하지 않습니다.
- 어학: 본인 제공 듀오링고 아랍어 레벨 25, 러시아어 레벨 21. 학습 진행 레벨로 표기하며 공인 어학 등급으로 환산하지 않습니다.
- [Stack Overflow 프로필](https://stackoverflow.com/users/8614565/hyeonseo-yang)은 첨부 이력서의 URL을 사용했습니다. 변동하는 평판·GitHub 별 수는 표시하지 않습니다.
- [US11843471B2](https://patents.google.com/patent/US11843471B2/en): 공동 발명자 Chang-Gun Lee, Seonghyeon Park, Hyeonseo Yang; 등록일 2023-12-12; 특허권자 서울대학교 산학협력단. LinkedIn의 출원번호 17/857,542와 구분해 등록번호를 표시합니다.
- 국내 논문의 영문 제목은 공식 영문 제목이 있는 경우 이를 사용하고, KSC 논문 제목은 설명을 위한 번역입니다. 초록 요약은 한국어와 영어로 제공합니다.
