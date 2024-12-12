# React 입문
목차
1. [실습 준비하기](#01-실습-준비하기)
2. [React 컴포넌트](#02-react-컴포넌트)

# 01 실습 준비하기
## 사전 준비 
### App.jsx 불필요한 파일, 코드 삭제

1. src/App.jsx에 2,3번째 줄에 있는 다음 코드를 삭제한다.
    ```jsx
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    ```
    - src/assets/react.svg 파일 삭제
    - public/vite.svg 파일 삭제
2. src/App.jsx에 App 함수 내에 `const [count, setCount] = useState(0)`를 삭제한다.
    - 그럼 상단에 `import { useState } from 'react'`가 회색으로 변함.
        - 아무데서도 이용되지 않는다는 뜻
        - 해당 문장도 삭제
3. App 함수가 리턴하고 있는 div태그와 안에 모든 내용 삭제
    ```jsx
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    ```
### 완성된 초기 App.jsx
```jsx
import './App.css'

function App() {

  return (
    <>
      
    </>
  )
}

export default App
```
### css 불필요한 파일 삭제
1. App.css 파일 전체 내용 삭제
2. index.css 파일 전체 내용 삭제
3. src/main.jsx에 `<StrictMode> </StrictMode>`만 삭제 
    - 개발 모드로 리액트를 실행하고 있을 때 우리가 작성한 코드에 혹시나 잠재적인 문제가 있는지 내부적으로 검사하여 경고해주는 도구
    - 실습에서는 필요하지 않고, 입문자들에게는 혼란을 야기할 수 있기에 삭제.
## 실습 도구 추가하기
### 방법
1. vscode 좌측 Extensions 클릭
2. `eslint` 검색
3. 검색 결과 최상단에 Microsoft 뱃지가 달려있는 ESLint 확장프로그램이 나옴
4. 해당 확장 프로그램 설치
    - 우리가 작성하는 코드를 정적으로 검사하여 오류가 발생할만한 코드가 있으면 경고를 띄워주는 프로그램
    - 직접 실행해보기 전에 오류를 vscode에서 확인해볼 수 있음
5. 프로젝트 파일로 돌아오면 `eslint.config.js`라는 파일이 생김 
    - 이는 eslint의 옵션을 설정할 수 있는 파일
    - 'rules'에 불필요한 기능들을 끄는 코드를 작성해줌.
        ```
        "no-unused-vars":"off",
        "react/prop-types":"off",
        ```
        - `"no-unused-vars":"off",` : 코드 상에 실제로 사용하지 않는 변수가 있을 때 오류로 알려주는 옵션. 
        - `"react/prop-types":"off",` : 리액트를 안전하게 사용할 수 있도록 하는 옵션 (실습 중엔 오히려 불편함을 야기함.)
# 02 React 컴포넌트
## 컴포넌트
- 함수가 html 코드를 반환하도록 설정할 수 있는데, 이 경우를 컴포넌트라고 함.
- 함수의 이름을 따서 App(함수의 이름) 컴포넌트라고 부름
## 컴포넌트 만들기
- App 컴포넌트 위에 함수를 선언하고 Header 컴포넌트 만들어주기 
```js
function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  )
}
```
- 함수로 만든 컴포넌트를 리액트에서는 함수 컴포넌트라고 부르기도 함.
- 함수 선언식 말고도 화살표 함수로 바꿔서 사용할 수도 있음
```jsx
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  )
}
```
- 둘 다 동일한 경우이기에 편한 방법으로 사용하면 됨
- 함수 말고도 class를 이용하여 컴포넌트를 만들 수도 있는데, 이 경우 작성해야 할 코드가 상당히 많아지기 때문에 함수를 이용하는 방법이 편리

### 컴포넌트 주의사항
- 컴포넌트 이름의 첫 글자는 대문자로 작성해야 함. ⭐️
    - 첫 글자를 소문자로 작성할 경우 리액트에서 내부적으로 해당 함수를 컴포넌트로 인정해주지 않음
## 컴포넌트 랜더링
- 현재 상태로는 컴포넌트가 화면에 나타나지 않음
- main.jsx에서 살펴보면 App 컴포넌트는 rander 안에 넣어져 있는데 Header의 경우 그 안에 들어가 있지 않음
### App 컴포넌트 안에 Header 컴포넌트를 넣어준다.
- App 컴포넌트의 리턴문 안에 Header 컴포넌트를 작성하면 App 컴포넌트가 main에서 랜더링 될 때 함께 랜더링 됨
```jsx
function App() {

  return (
    <>
      <Header />
      <h1>안녕 리액트!</h1>
    </>
  )
}
```
- 이 경우 Header 컴포넌트처럼 다른 컴포넌트의 리턴문 내부에 포함되는 컴포넌트를 **자식 컴포넌트**라고 하고 App 컴포넌트처럼 자식 컴포넌트를 갖는 컴포넌트를 **부모 컴포넌트**라고 부름.
- 이처럼 부모-자식 구조를 갖기 때문에 계층 구조가 생김.
- 추가적으로 Main, Footer 컴포넌트를 만든다고 할 때, Header와 마찬가지로 App 컴포넌트의 자식 컴포넌트로 배치를 시켜줘야 함.
- 리액트의 모든 컴포넌트는 화면에 랜더링 되기 위해서는 App 컴포넌트의 자식 컴포넌트로 작성되어야 함.
    - 때문에 리액트의 모든 컴포넌트는 App 컴포넌트를 **최상위 조상**으로 갖는다. 
- App 컴포넌트
    - 모든 컴포넌트의 최상위 조상.
    - 뿌리 역할을 한다고 하여 **Root** 컴포넌트라고 부름
    - 루트 컴포넌트는 main.jsx에 rander에 인수로서 전달된다.
- 루트 컴포넌트는 다른 컴포넌트로 변경할 수 있음
    - 그러나 관례상 개발자들은 App이라는 이름을 가진 컴포넌트를 루트로 사용함.
## 모듈화
- 컴포넌트 별로 모듈화를 위해 각각의 파일에 작성하는 것이 일반적.
- src 폴더 안에 루트 컴포넌트를 제외한 컴포넌트들을 모아놓기 위한 "components"폴더를 제작
- 해당 폴더 안에 `Header.jsx` 파일을 작성.
- Header 컴포넌트를 해당 파일 안에 작성해준다. 
    - App 컴포넌트에 작성되어 있던 Header 컴포넌트 복사 + 붙여넣기
- Header 파일에서 컴포넌트를 내보낼 수 있게 하단에 명령어를 작성해준다.
    - `export default Header;`
- App 파일에서 Header 컴포넌트 불러오기
    - `import Header from "./components/Header";`
        - ES 모듈 시스템으로 해당 컴포넌트를 불러옴에도 불구하고 Header의 확장자명을 생략해도 됨.
        - vite로 만든 리액트 앱에서는 확장자를 작성하지 않아도 자동으로 파일을 찾아가도록 내부적으로 자동 설정 되어 있기 때문.
