# 라이브러리
프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해놓은 것

## 라이브러리 설치
- 구글에 npmjs 검색
    - 제일 상단에 NPMJS 홈페이지 클릭
    - [NPMJS](https://www.npmjs.com/)
- 해당 홈페이지가 node.js계의 백화점
    - 모든 라이브러리를 모아놓은 사이트
- 실습에서 사용할 라이브러리 : randomcolor
    - [randomColor](https://www.npmjs.com/package/randomcolor)
    - 어떻게 설치할 수 있는지, 명령어가 뭔지 상세 설명들이 있음. 
    - ```npm i randomcolor```
- 새로운 라이브러리를 설치하면 package.json에 우리가 설치한 라이브러리가 자동으로 등록되어 확인할 수 있음
    - ```"randomcolor": "^0.6.2"``` 
    - 여기서 ^ 표시의 경우 버전 범위로 대략적인 버전이라는 뜻
- 라이브러리를 설치하면 node_modules 폴더와 package-lock.json 파일이 새로 생김
    - 설치한 라이브러리의 코드를 보관하는 폴더
- ```npm install``` 혹은 `npm i`를 입력하면 node_modules 폴더가 삭제되더라도 이전에 설치했던 라이브러리를 그대로 다시 설치할 수 있음
    - 때문에 해당 프로젝트를 배포하거나 github에 업로드할 때 node_modules 폴더는 굳이 업로드 하지 않는다. 


