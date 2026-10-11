# Hyeonseo Yang — Personal website

- 홈페이지: https://yhs0602.github.io/
- 저장소: https://github.com/yhs0602/yhs0602.github.io

별도 빌드 도구 없이 HTML/CSS로 구성한 개인 홈페이지입니다.

## 수정하기

`index.html`에서 자기소개, 프로젝트, 링크를 수정합니다. CSS도 같은 파일의 `<style>`에 있습니다.
학력, 연구 논문 6편, CraftGround 프로젝트, LinkedIn/GitHub 링크를 수록합니다.
각 논문은 `<article class="publication">`으로 작성되어 있으며, `<details>`에 한국어 초록 요약이 있습니다.

로컬 미리보기:

```sh
python3 -m http.server 8000
```

브라우저에서 http://localhost:8000 을 엽니다. 서버 종료는 Ctrl+C입니다.

## 배포하기

```sh
git add index.html
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
[LinkedIn](https://www.linkedin.com/in/yhs0602/)의 공개 정보에서 HYPERCONNECT를 확인했으며 직책이나 재직 기간은 추정하지 않았습니다.

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
