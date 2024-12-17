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

