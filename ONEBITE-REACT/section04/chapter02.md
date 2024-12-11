# React App 생성하기
- 과정
    1. Node.js 패키지 생성
    2. React 라이브러리 설치
    3. 기타 도구 설치 및 설정
        - 입문자에게 권장하기 어려움
## Vite
- 차세대 프론트엔드 개발 툴
- 기본 설정이 적용된 React App 생성 가능
- React 공식문서에서도 권장되고 있음
## 생성 방법
1. 터미널에 `npm create vite@latest` 작성
2. project name 설정 
3. framwork 설정
4. variant 설정
    ```
    ✔ Project name: … section04
    ✔ Select a framework: › React
    ✔ Select a variant: › JavaScript
    ```
## 생성 완료 후 살펴보기
- package.json에 들어가서 "dependencies" - "react-dom"이 18버전 아래라면 잘못 설치된 것으로 프로젝트 폴더 삭제 후 재생성 해야 함. 
- devDependencies에는 개발용 라이브러리로 배포시에는 포함되지 않음
- 위 라이브러리를 설치하기 위해 터미널에 `npm i` 입력
## 서버 접속해보기
- 터미널에 `npm run dev` 작성하기
- local 주소 `cmd + click` 하여 접속
- 서버 종료하기 : `ctrl + c`
