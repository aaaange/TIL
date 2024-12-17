# React 입문
목차
1. [실습 준비하기](#01-실습-준비하기)
2. [React 컴포넌트](#02-react-컴포넌트)
3. [JSX로 UI 표현하기](#03-jsx로-ui-표현하기)
4. [Props로 데이터 전달하기](#04-props로-데이터-전달하기)
5. [이벤트 처리기](#05-이벤트-처리기)
6. [State로 상태 관리하기 ](#06-state로-상태-관리하기)

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

# 03 JSX로 UI 표현하기
## JSX란?
- 자바스크립트에서 html을 리턴하는 함수를 컴포넌트라고 이야기했는데, 자바스크립트에서는 함수가 html을 리턴하는 경우 문법적 오류로 판단함.
- 그러나 리액트에서는 순수한 자바스크립트가 아닌 확장된 자바스크립트인 JSX 문법을 사용하여 위와 같은 문법을 적합하다고 판단함.
### JSX
- JavaScript Extensions
- 확장된 자바스크립트의 문법
- 자바스크립트와 html을 혼용하여 사용할 수 있음
```js
function Main () {

    const number = 10;

    return (
        <main>
            <h1>this is main Component!</h1>
            <h2>{number}</h2>
        </main>
    );
}
```
- 이 처럼 자바스크립트의 변수를 중괄호{}를 이용하여 html에서 바로 출력할 수 있음 
- 중괄호 안에는 문자나 숫자 값으로 평가할 수 있는 경우 뭐든 사용 가능 함.
- 삼항연산자도 가능 `{number % 2 === 0 ? "짝수" : "홀수"}`
## JSX 주의 사항
1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
    - 한 줄의 코드가 특정한 값으로 표현할 수 있는 경우
    - 문자, 숫자, 삼항연산자 등
    - if, for문의 경우 한 줄로 특정한 값이 표현되지 않아 자바스크립트 표현식으로 볼 수 없음
2. 숫자, 문자열, 배열 값만 렌더링 된다.
    - boolean 방식 (true/false) ❌
    - undefined ❌
    - null ❌
    - object를 그대로 렌더링❌
        ```js
        const obj = { a: 1};

        return (
            {obj}
        )
        ```
        - 이와 같이 작성하면 페이지가 백지가 됨. 오류 발생.
        - object를 렌더링하기 위해서는 점표기법을 사용해야 함.
            - `{obj.a}`
3. 모든 태그는 닫혀있어야 한다.
    ```js
    <img></img>
    // 혹은 
    <img /> // 셀프클로징
    ```
4. 최상위 태그는 반드시 하나여야만 한다.
    - 가장 높은 태그가 하나만 존재해야 하고, 두 개가 존재할 경우 오류가 발생
    - 최상위 태그로 묶어줄 마땅한 태그가 없다면 빈 태그로 묶는 것도 가능함
        ```jsx
        <>
            <img></img>
            <h1></h1>
            ...
        </>
        ```
    - 빈 태그로 묶으면 JSX에서는 최상위 태그로 묶었다고 판단되지만 실제로 렌더링 될 때는 렌더링 되지 않음.
## return 값에 따라 UI 다르게 출력하기
```jsx
function Main () {
    const user = {
        name: "홍길동",
        isLogin: true,
    }
    return (
        <>
        {user.isLogin ? (
            <div>로그아웃</div>
        ) : (
            <div>로그인</div>
        )}
        </>
    );
}
```
- 이 경우 isLogin이 true일 경우 화면에 "로그아웃"이라고 출력되고, false일 경우 "로그인"으로 출력될 수 있다.
```jsx
function Main () {
    const user = {
        name: "홍길동",
        isLogin: true,
    }

    if (user.isLogin) {
        return <div>로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
}
```
- 이렇게 작성하는 것도 가능함.
## 요소에 style 적용하기
### 1. 직접 태그에 style 작성하기
```jsx
function Main () {
    const user = {
        name: "홍길동",
        isLogin: true,
    }

    if (user.isLogin) {
        return (
          <div 
            style={{
              backgroundColor: "red",
              borderBottom: "5px solid blue",
            }}
          >
            로그아웃
          </div>
        );
    } else {
        return <div>로그인</div>;
    }
}
```
- `<div style={{}} >`
    - 객체를 전달하기 위해 중괄호를 두 개 작성한다 `{{}}`
- 스타일을 작성할 때 CSS에서 작성했던 것 처럼 `background-color` 와 같이 작성해서는 안된다.
  - `backgroundColor: "red"`
  - 연결되는 문자를 띄어쓰기 없이 대문자로 작성해야 함.
    - 이와 같은 작성법을 **카멜케이스(camelCase)**라고 부름
### 2. 별도의 css 파일을 만들어 작성하기
- main 컴포넌트를 위한 css 파일을 만들기 위해 **components**폴더에 `Main.css` 파일을 만들어준다.
- 그리고 원하는 스타일을 css 형식으로 작성한다.
  ```css
  .logout{
    background-color: red;
    border-bottom: 5px solid skyblue;
  }
  ```
- main 컴포넌트 파일 최상단에 `import "./Main.css"`를 작성하여 불러와 준다.
  - 컴포넌트에서 css 파일을 불러올 때 import 뒤에 경로만 작성해줘도 알아서 불러와 줌 (리액트 기능)
- 이 전에 요소에 직접 작성하였던 style을 삭제 후 className을 css에서 작성했던 것과 동일하게 작성하기.
  ```jsx
  <div className="logout">로그아웃</div>
  ```
- html에서는 `class=""`로 클래스 이름을 설정해줬었는데, JSX에서는 `className=""`로 작성하는 것을 알 수 있음

# 04 Props로 데이터 전달하기
## props란?
- 리액트에서는 페이지를 컴포넌트라는 단위로 나눠 마치 레고를 조립하듯 개발함.
- 예로 네이버 메인페이지를 개발한다면, 검색바 컴포넌트를 따로 개발하고, 아래 아이콘 모양만 다르고 구성은 같은 버튼의 경우 버튼 컴포넌트를 개발하여 반복 렌더링할 수 있음.
    ```jsx
    function App() {
        return (
            <>
              <Button text={"메일"} img={"mail.png"} />
              <Button text={"카페"} img={"cafe.png"} />
              <Button text={"블로그"} img={"blog.png"} />
              ...
            </>
        )
    }
    ```
    - 이와 같이 버튼 하나 하나에 값을 전달할 수 있음
    - 함수의 인수를 전달하듯이.
    - 컴포넌트에 전달되는 값들을 **Props(Properties의 줄임말)**이라고 부름
    - Props를 이용하면 컴포넌트를 마치 함수처럼 각각 전달하는 값에 따라서 출력되는 UI가 다르게 명령할 수 있음.
## 실습
- **components** 폴더에 `Button.jsx` 파일을 만들고, 다음과 같이 컴포넌트를 만들어준다.
  ```jsx
  const Button = () => {
      return <button>click</button>
  };

  export default Button;
  ```
- App.jsx로 가 import문을 작성하고 return 안에 내용을 모두 지운 후 Button 컴포넌트를 3개 작성해준다.
  ```jsx
  import './App.css';
  import Header from "./components/Header";
  import Main from "./components/Main";
  import Footer from "./components/Footer";
  import Button from "./components/Button";

  function App() {

    return (
      <>
        <Button />
        <Button />
        <Button />
      </>
    );
  }

  export default App
  ```
- 각각의 버튼들이 서로 다른 Props를 전달하게 하기 위해 text를 작성한다.
  ```jsx
  <Button text={"메일"} color={"blue"}/>
  <Button text={"카페"} />
  <Button text={"블로그"}/>
  ```
- 버튼 컴포넌트 파일에서 매개변수로 props를 작성 후 console.log를 작성
  ```jsx
  const Button = (props) => {
      console.log(props)
      return <button>클릭</button>
  };
  ```
  - 그럼 "메일", "카페", "블로그" 세 가지가 모두 출력됨.
    - 앱 컴포넌트에서 버튼 컴포넌트를 3개 랜더링하도록 해서 그렇다.
- 컴포넌트에 props를 작성해주면 해당 props는 객체 형태로 묶여서 자식 컴포넌트(Button 컴포넌트)의 매개변수로 전달된다.
- 전달되는 매개변수를 이용하여 다음과 같이 점 표기 법으로 text를 출력한다.
  ```jsx
  const Button = (props) => {
      console.log(props)
      return (
        <button style={{color: props.color}}>
          {props.text}
        </button>)
  };
  ```
### Props 기본 값 설정
  - color props는 "메일" 버튼에만 제공되어 나머지 버튼에는 갖고 있지 않은 props임.
  - 그런데 이 때 color를 모두 가지고 있다고 확정하여 명령어를 다음과 같이 작성할 경우 오류가 발생함
    ```jsx
    <button style={{color: props.color}}>
      {props.text} - {props.color.toUppercase()}
    </button>
    ```
    - color를 제공 받지 않는 props의 경우 undefined 상태인데, undefined에 점 표기법을 사용하니 오류가 발생하는 것.
  - 이러한 경우 기본 값을 설정하여 오류를 해결할 수 있음
    ```jsx
    Button.defaultProps = {
      color: "black",
    }
    ```
### Props를 받아 사용할 때 편리하게 사용하는 방법
- props는 객체로 묶여 매개변수로 전달되는데 객체로 받아오지 않고 구조분해할당을 이용하여 직접 받아오는 방법이 있음
  ```jsx
  const Button = ({text, color}) => {
      return (
        <button style={{color: color}}>
          {text} - {color.toUpperCase()}
        </button>)
  };
  ```
- App.jsx에 작성된 부모 컴포넌트의 경우에도 전달할 props가 많아진다면 다음과 같이 객체로 묶은 다음 스프레드 연산자로 작성할 수도 있음.
  ```jsx
  function App() {
    const buttonProps = {
      text: "메일",
      color: "blue",
      a: 1,
      b: 2,
      c: 3,
    }

    return (
      <>
        <Button {...buttonProps}/>
        <Button text={"카페"} />
        <Button text={"블로그"}/>
      </>
    );
  }
  ```
### Props가 전달할 수 있는 것들
- 프롭스는 일반적인 문자열같은 자바스크립트 값 뿐만 아니라 html 요소나 리액트 컴포넌트도 전달할 수 있음.
  ```jsx
  <Button text={"블로그"}>
    <div>자식요소</div>
  </Button>
  ```
  ```jsx
  const Button = ({ text, color, children }) => {
    return (
      <button style={{ color: color }}>
        {text} - {color.toUpperCase()}
        {children}
      </button>)
  };
  ```
  - 자식 요소들은 자동으로 children이라는 매개변수로 전달이 됨.
  - 컴포넌트도 가능
    ```jsx
      <Button text={"블로그"}>
        <Header />
      </Button>
      ```
### Props는 부모 컴포넌트에서 자식 컴포넌트로만 전달할 수 있음
- 반대로 자식 컴포넌트에서 부모 컴포넌트로 값을 전달하는 것은 리액트에서 불가능하다.

# 05 이벤트 처리기
## Event Handing
### Event
- 웹 내부에서 발생하는 사용자의 행동
    - ex. 버튼 클릭, 메세지 입력, 스크롤 등
### Handing
- 다루다, 취급하다, 처리하다
### Event Handing
- 이벤트가 발생했을 때 그것을 처리하는 것
    - ex. 버튼 클릭시 경고창 노출
## 실습
### 버튼에 Cilck 이벤트 넣기
```jsx
const Button = ({ text, color, children }) => {
  return (
    <button 
      onClick={()=> {
        console.log(text)
      }}
      style={{ color: color }}>
        {text} - {color.toUpperCase()}
        {children}
    </button>)
};
```
- 이렇게 버튼 태그 안에 이벤트 핸들러 onCilck을 작성할 경우 버튼을 클릭했을 때 콘솔로그에 해당 택스트가 출력됨.
```jsx
const onClickButton = () => {
    console.log(text);
  };
  return (
    <button 
      onClick={onClickButton}
```
- 이렇게 전달해도 괜찮음
- 이벤트 핸들러 사용시 주의 점
  - `onClick={onClickButton}` 
  - 함수 이름만 작성해야 하고, onClickButton()이렇게 괄호를 열어주면 안됨
  - 콜백함수를 전달하듯 **이름**만 전달해야 함.
## 이벤트 객체
- 리액트에서 발생하는 모든 이벤트는 이벤트 핸들러 함수를 호출할 때 호출된 이벤트 핸들러 함수의 매개변수인 **이벤트 객체**라는 것을 제공함.
```jsx
const onClickButton = (e) => {
  console.log(e);
};
```
- 위와 같이 이벤트 객체를 콘솔로그에 작성하도록 명령하면 **SynthethicBaseEvent**라는 것이 나옴

### Synthethic Base Event(합성 이벤트)
- 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
- 브라우저마다 Event 객체가 서로 다름
- 브라우저마다 규격도 다르고 동작방식도 다름
  - Cross Browsing Issue
    - 브라우저 별 스펙이 달라 발생하는 문제
- 합성 이벤트 
  - Cross Browsing Issue를 편리하게 해결해주는 것

# 06 State로 상태 관리하기 
## State - 상태
- 어떤 사물이 현재 가지고 있는 상황이나 형편을 이르는 말, 변경할 수 있음
- 컴포넌트의 현재 상태를 보관하는 변수
  - state를 갖는 React 컴포넌트
    - state의 값에 따라 렌더링 되는 UI가 결정된다
    - state 값이 바뀌면 새로 렌더링 된다.
      - 리 랜더(Re-Render)
      - 리 렌더링(Re-Rendering)
## state 만들기
### 사전 준비
```jsx
// App.jsx
import './App.css';

function App() {

  return (
    <>
    </>
  );
}

export default App;
```
- App.jsx를 보이는 것과 같이 리턴 내부 등 모두 지우기
### 실습
```jsx
import './App.css';
import {useState} from "react";

function App() {

  const state = useState();
  console.log(state);
  return (
    <>
    </>
  );
}
```
- state를 사용하기 위해서는 리액트에서 제공하는 내장함수인 `useState`를 import 해야 함.
- 함수 내부에 `useState`를 받아줄 변수를 만들고 cosole.log를 작성해보기.
- 그럼 console에 2가지를 요소를 가진 배열이 출력됨.
  - 0. state의 값 (useState의 인수 값)
  - 1. state를 변화시키는 상태 변환 함수
```jsx
function App() {
  
  const [state, setState] = useState(0);
  return (
    <>
    <h1>{state}</h1>
    </>
  );
}
```
- 때문에 state를 변수로 받아주는 것이 아니라 구조 분해 할당을 통해 받아주는 것이 일반적임.
```jsx
function App() {

  const [state, setState] = useState(0);
  return (
    <>
    <h1>{state}</h1>
    <button onClick={()=> {
      setState(state + 1)
    }}>+</button>
    </>
  );
}
```
- 이와 같이 버튼 이벤트 핸들러에 변화 함수를 넣어주면 버튼이 클릭될 때마다 state가 1씩 증가하게 됨.
- 이 과정에서 변화 함수를 통해 state가 바뀌게 되는데 바뀔 때마다 App.jsx가 다시 렌더링 됨.
  - state가 변화될 때마다 다시 렌더링되고 이를 **리렌더링**이라고 함
#### 새로운 state
이전에 있던 state의 이름을 헷갈리게 하지 않기 위해 변경해줌.
```jsx
function App() {

  const [count, setCount] = useState(0);
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> {
      setCount(count + 1)
    }}>+</button>
    </>
  );
}
```
- count로 변경하고 함수 return 안에도 전반적으로 변경해줌. 
- 브라우저에서 테스트 했을 때 오류가 나지 않아야 함.
```jsx
function App() {

  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={()=> {
        setLight(light === "ON" ? "OFF" : "ON")
      }}>{light === "ON" ? "끄기" : "켜기"}</button>
    </div>
    <div>
    <h1>{count}</h1>
    <button onClick={()=> {
      setCount(count + 1)
    }}>+</button>
    </div>
    </>
  );
}
```
- light라는 새로운 state를 만들어 줌
- 이전에 있던 h1 태그와 button 태그를 div로 묶어주고, 새로 만들어줄 h1 태그와 button도 div로 묶어 가독성을 높임
- 삼항연산자를 활용하여 state가 "OFF"인 경우 전구를 켜고 아니라면 전구를 끌 수 있게 코드를 작성.
## 왜 state를 사용할까?
그냥 let을 사용하여 변수를 만들고 위와 같은 기능을 구현할 수 있는데, 왜 React에서는 state라는 기능을 사용하는 것인가?
```jsx
function App() {
  let light = "OFF";

  return (
    <>
    <div>
      <h1>{light}</h1>
      <button onClick={()=> {
        light = light === "ON" ? "OFF" : "ON";
      }}>{light === "ON" ? "끄기" : "켜기"}</button>
    </div>
    </>
  );
}
```
- 이처럼 let 변수를 사용하여 제작하면 light의 변수 값이 바뀌긴 하지만, 페이지가 리렌더링 되지는 않음.
- 때문에 버튼을 눌러도 h1 태그에 있는 {light}값이 바뀌지 않는 것.
- React에서는 state의 값이 변경되어야 리렌더링 됨.
#### 때문에 리엑트에서 변화하는 가변적인 값을 관리할 때, 그런 값을 화면에 랜더링 시켜주고자 한다면 일반 변수가 아닌 state를 사용함.

