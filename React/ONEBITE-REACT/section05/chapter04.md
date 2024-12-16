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