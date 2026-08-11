# DLAB_SOMNIA

학술/저널용 **프로젝트 페이지** 뼈대입니다.  
참고 구성: [MDAgents project page](https://mdagents2024.github.io/) (Nerfies academic template 계열)

## 구조

```
index.html                # 페이지 본문 (TODO 주석으로 채울 곳 표시)
static/
  css/index.css           # 스타일
  js/index.js             # BibTeX 복사 등
  images/                 # 그림 (teaser / main_result / case_study)
  videos/                 # 데모 영상 (선택)
```

## 페이지 섹션 (MDAgents와 동일한 흐름)

| 섹션 | 역할 |
|------|------|
| Hero | 제목, 저자, 소속, Paper/arXiv/Code/Demo 버튼, News |
| Teaser | 한 줄 소개 + 대표 그림 |
| Abstract | 논문 초록 |
| Platform / Main Result | 핵심 결과·아키텍처 + figure |
| Method / Case Study | 파이프라인·사례 + figure |
| Demo | 영상/링크 (선택) |
| BibTeX | 인용 |

`index.html` 안의 `TODO` 주석을 따라 문구·링크·이미지를 바꾸면 됩니다.

## 로컬 미리보기

```bash
python -m http.server 8000
# → http://localhost:8000
```

## GitHub Pages 배포

배포 후 예상 URL: **https://dlab-amc.github.io/DLAB_SOMNIA/**

1. 이 저장소를 push
2. GitHub → **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` / Folder: `/ (root)` → Save

몇 분 후 위 URL로 접속할 수 있습니다.
