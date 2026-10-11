# Hyeonseo Yang — Personal website

- 홈페이지: https://yhs0602.github.io/
- 저장소: https://github.com/yhs0602/yhs0602.github.io

별도 빌드 도구 없이 HTML/CSS로 구성한 개인 홈페이지입니다.

## 수정하기

`index.html`에서 자기소개, 프로젝트, 링크를 수정합니다. CSS도 같은 파일의 `<style>`에 있습니다.
현재 소개와 프로젝트 문구는 초기 설정용 자리표시자입니다.

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
