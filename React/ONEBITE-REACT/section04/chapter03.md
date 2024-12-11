# React App 구동 원리
- react 내부에는 web server가 내장되어 있었고, npm run dev라는 명령어를 통해 react app 서버를 가동 시키라고 명령한 것.

## 초기화면
`index.html`을 살펴보면 아무것도 없는데 초기화면에 다양한 구성이 들어 있음을 알 수 있음
- 이것은 `main.jsx`를 살펴보면 알 수 있음
    - `createRoot(document.getElementById('root')).render()`
    - 인수로 전달받은 요소를 리액트의 루트로 만드는 역할
    - `document.getElementById('root')` : index.html에 root를 id 값으로 갖는 요소들
    - `.rander()` 를 통해 루트에 무엇인가 랜더해주고 있음
        - React.StrictMode는 무시해도 되고, `<App />`이라는 것을 렌더링 해줌을 알 수 있음
        - 위와 같이 html 태그와 같이 작성하는 것은 컴포넌트를 랜더링하는 문법임.
- 이 App이 어디서 왔는지 위를 살펴보면 `App.jsx`에서 오고 있음을 알 수 있음
    - `App.jsx`를 살펴보면 함수가 html 태그들을 리턴해 주고 있음
    -  리액트에서는 함수가 html 태그들을 리턴하고 있으면 해당 함수를 컴포넌트라고 부름.
    - 때문에 app 컴포넌트라고 할 수 있음
    