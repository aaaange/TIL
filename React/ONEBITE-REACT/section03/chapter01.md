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

