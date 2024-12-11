# Node.js Study Notes
### 리액트를 공부하려는데 왜 node.js를 알아야 할까?
- React.js는 node.js를 기반으로 동작하는 기술이기 때문
- 나중에 학습하게 될 Next.js나 Vue.js, Svelte 등 모두 node.js를 기반으로 동작하는 기술들

# Node.js란?
웹 브라우저가 아닌 환경에서도 JavaScript를 실행시켜주는 실행 환경(run time)
- 실행환경 = 구동기 (무엇인가를 구동시키는 기기나 프로그램)

## Node.js는 왜 만들어졌을까?
### JavaScript 역사
JavaScript는 웹 페이지 내부에 필요한 아주 단순한 기능만을 개발하기 위해 만들어짐
- 매우 유연하고 설계 되었음
- 생산성이 높음
웹 페이지를 만드는 것 뿐만 아니라 웹 바깥에서도 사용하고자 했음
- node.js가 나타났고, 이후 웹 사이트는 물론, 웹 애플리케이션 뿐만 아니라 모바일 애플리케이션에도 사용할 수 있게 되었음.

# Node.js 설치하기
1. 구글에 node.js 검색하기
    - 최상단 홈페이지 클릭
    - [Node.js](https://nodejs.org/en)
2. 홈페이지 중앙 Download Node.js(LTS) 설치
3. 설치 파일 실행하여 약관 동의하고, next 눌러 넘어가 완료.

## 잘 설치 되었는지 확인하기
- 터미널 열기
    ```
    node -v 
    ```
    - 노드에 버전 확인할 수 있는 명령어
    - 버전의 앞자리가 짝수 번호면서 20 이상이면 ok
- node.js와 함께 설치되는 NPM이라는 도구도 잘 설치 되었는지 확인해야 함.
    - Node Package Manager
    터미널 열기
    ```
    npm -v
    ```

# 프로젝트(Project)
## 패키지
- Node.js에서 사용하는 프로그램 단위
```
npm init
```
- 상세정보를 설정하거나 기본 값으로 엔터를 쳐서 넘어가 패키지를 만들어준다.
```
{
  "name": "section03",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```
## index.js
파일을 만들어 console.log("안녕 node.js") 이라고 작성 한 후 브라우저로 확인하지 않고 터미널에서 바로 확인할 수 있음
```
node index.js
```
만약 src폴더 안에 index.js를 열고 싶다면 경로 설정하여 명령
```
node src/index.js
```
## 파일 관리
파일이 많아지면 관리하기 힘들어짐.
- package.json 안에 script에 다음과 같이 작성
    ```"start": "node src/index.js"```
    - 그럼 터미널에 경로를 작성하는 게 아니라 작성한 명령어를 입력하면 됨
    ```
    npm run start
    ```

# 모듈 시스템(Module System)
모듈을 다루는 시스템
## 모듈이란?
- 웹 페이지에는 회원관리 기능, 장바구니 기능, 결제 기능 등 다양한 기능들이 존재하는데 이를 하나의 js 파일에 담게 되면 파일이 상당히 무겁고 복잡해 짐.
    - 코드 유지보수가 어려워 짐
- 때문에 기능별로 파일을 나눠 관리하는 것이 효율적.
- 이 나눠진 파일들을 모듈이라고 함.
## 모듈 시스템
- 모듈을 생성하고 불러오고 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템
### JavaScript의 모듈 시스템 (우리가 공부할 것 ✅)
- Common JS (CJS) ✅
- ES Module (ESM) ✅
- AMD
- UMD
- ...

### Commeon JS
- 내보낼 파일에 내보내는 명령어 작성
    ```
    // 모듈 내보내기
    module.exports = { 
        add,
        sub,
    }
    ```
- 불러올 파일애 불러오는 명령어 작성
    ```
    const moduleData = require('./math'); // 모듈 가져오기
    const {add, sub} = require('./math'); // 객체 구조분해할당으로 다음과 같이도 가능
    ```

### ES Module
- pacage.json에 맨 아래 ``` "type": "module"``` 작성하면 es 모듈 시스템을 사용하겠다고 선언하는 것.
- 이 경우 common js 모델을 함께 사용할 수 없음

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


