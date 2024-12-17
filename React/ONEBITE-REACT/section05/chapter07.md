# 07 State와 Props
### 실습
```jsx
// App.jsx
const Bulb = ({light}) => {
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor : "orange"}}>ON</h1>
      ):(
        <h1 style={{ backgroundColor: "gray"}}>OFF</h1>
      )} 
    </div>
  )
}
```
- 앱 컴포넌트 위에 전구 역할을 하는 Bulb 함수를 선언해 줌.
- Bulb는 부모 컴포넌트로부터 프롭스(Props)로 전구의 상태, 전구가 꺼져 있는지 켜져 있는지를 받아 올 것.
```jsx
function App() {

  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  return (
    <>
    <div>
      <Bulb light={light} />
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
- 그리고 h1 태그 대신 자식 컴포넌트로 Bulb를 넣고, props로 light도 넣어주기.
- 그리고 "끄기/켜기" 버튼을 클릭하면 배경이 잘 설정되어 자식 컴포넌트인 Bulb가 잘 작동한다.
#### 여기서 알 수 있는 중요한 사실
- 버튼을 클릭해 light state를 계속 변경해주면 Bulb 컴포넌트가 계속 리렌더링 되는 것.
- 자식 컴포넌트는 부모로부터 받는 Props의 값이 바뀌면 리렌더링 된다는 사실을 알 수 있음.
- 자식 컴포넌트는 자신이 가지고 있는 state의 값이 변경되지 않아도 부모로 받는 Props의 값이 변경되면 리 렌더링 된다. ⭐️
#### 이 상태에서 count 버튼 클릭
- count 버튼을 클릭하면 Bulb 컴포넌트의 값이 리랜더링 된다.
  - console.log가 클릭 시 반복적으로 뜸
- count와는 상관이 없어 보이는 Bulb 컴포넌트가 왜 리렌더링 될까?
  - React의 컴포넌트는 3가지 상황에서 리렌더링 됨.
### React 컴포넌트가 리렌더링 되는 3가지 상황
1. 자신이 관리하는 state의 값이 변경되었을 때
2. 자신이 제공받는 Props의 값이 변경되었을 때
3. 부모 컴포넌트가 리렌더링 될 때

#### count 버튼 클릭시 Bulb 컴포넌트가 리렌더링된 이유
- count 버튼을 클릭하면 App컴포넌트의 state가 변경되었기에 1번에 의해 리렌더링
- App 컴포넌트가 리렌더링 되면서 App 컴포넌트를 부모로 가지고 있는 Bulb 컴포넌트가 리렌더링 된 것
#### 그러나 Bulb 컴포넌트는 count 버튼과 관련이 없음 -- 불필요한 리렌더링
- 이처럼 불필요한 리렌더링이 발생하고, 이러한 경우가 많아질 경우 성능이 저하 될 수 있음
- 때문에 count와 light처럼 관련이 없는 state를 하나의 컴포넌트에 함께 두지 않고 서로 다른 컴포넌트로 분리해주는 것이 좋음
```jsx
const Bulb = () => {

  const [light, setLight] = useState("OFF");

  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor : "orange"}}>ON</h1>
      ):(
        <h1 style={{ backgroundColor: "gray"}}>OFF</h1>
      )}
      <button onClick={()=> {
        setLight(light === "ON" ? "OFF" : "ON")
      }}>
        {light === "ON" ? "끄기" : "켜기"}
      </button> 
    </div>
    
  )
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={()=> {
          setCount(count + 1)
        }}>+</button>
      </div>
    </>
  )
}

function App() {
  
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}
```
- 이 처럼 Count 컴포넌트를 App 컴포넌트에서 분리하여 자식컴포넌트로 만들기
- light state는 Bulb 컴포넌트 안으로 옮겨주고 props를 지워줌.
  - App 컴포넌트 안에 Bulb 컴포넌트의 props를 제공하는 코드도 지워줌.
  - light 버튼들도 잘라내어 Bulb 컴포넌트 안에 넣어줌.
- **컴포넌트 파일로 분리하기**
  - 'src/components/'폴더에 `Bulb.jsx`, `Counter.jsx` 파일을 만들어 컴포넌트를 옮긴다.
  - `App.jsx`에 import 해줌
```jsx
// App.jsx
import './App.css';
import {useState} from "react";

import Bulb from "./components/Bulb";
import Counter from "./components/Counter";


function App() {
  
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
```
