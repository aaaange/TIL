# 03 기능 구현하기
- controller의 버튼을 클릭하면 count의 값이 변경되도록 설정해야 함.
- count를 state로 설정해야 함.
- 어떤 컴포넌트 안에 state를 만들어야 할까?
    - App 컴포넌트에 만들어야 함.
        - Viewer 컴포넌트와 Controller 컴포넌트는 서로 부모 자식의 관계를 갖지 않고, 어떠한 관계도 갖지 않기 때문에 서로 상태를 공유할 수 있는 방법이 없음.
## App 컴포넌트에 state 생성
```jsx
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller />
      </section>
    </div>
  )
}
```
- 구조 분해 할당으로 useState의 변수를 선언 (선언하며 teb을 눌러 완성하면 상단에 import문이 자동으로 생성됨.)
- Viewer 컴포넌트에 props를 전달해줌.
    - count라는 이름의 props로 count(useState에서 구조 분해 할당된 count)를 전달.
## Viewer.jsx
```jsx
const Viewer = ({count}) => {
    return (
        <div>
            <div>현재 카운트 :</div>
            <h1>{count}</h1>
        </div>
    )
}
```
- 매개변수로 props를 받아주고 h1 태그에 {count}를 출력.
## App 컴포넌트에서 Controller 컴포넌트에 넘겨줄 이벤트 핸들러 만들기
- 현재 상태에서 Controller 컴포넌트로 프롭스를 넘겨주려면 state의 값과 함수를 모두 넘겨줘야 함.
- 그러나 App 컴포넌트에서 이벤트 핸들러를 만들어서 전달하면 더욱 효율적
```jsx
function App() {

  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}
```
- onClickButton 함수는 value라는 매개 변수를 갖는데 여기서 value는 Controller에서 선택한 값.
- onClickButton 함수를 Controller 컴포넌트에게 props로 전달하기
    - `<Controller onClickButton={onClickButton} />`
## Controller.jsx
```jsx
const Controller = ({onClickButton}) => {
    return (
        <div>
            <button onClick={() => {
                onClickButton(-1)
            }}>
                -1
            </button>
```
- 이와 같이 {onClickButton}를 컴포넌트로 받고 onClick 이벤트의 함수 값으로 해당 props를 호출.
    - 위와 같이 작성하면 -1을 매개변수로 갖은 onClickButton 함수(App 컴포넌트에 있는)가 실행되어 count 값에 -1(value)를 한 값이 count로 업데이트됨.
```jsx
const Controller = ({onClickButton}) => {
    return (
        <div>
            <button onClick={() => {
                onClickButton(-1);
            }}>
                -1
            </button>
            <button onClick={() => {
                onClickButton(-10);
            }}>-10</button>
            <button onClick={() => {
                onClickButton(-100);
            }}>-100</button>
            <button onClick={() => {
                onClickButton(+100);
            }}>+100</button>
            <button onClick={() => {
                onClickButton(+10);
            }}>+10</button>
            <button onClick={() => {
                onClickButton(+1);
            }}>+1</button>
        </div>
    );
}
```
- 다른 버튼들에도 똑같이 이벤트 핸들러를 설정하기.
- 여기서 이벤트 핸들러의 함수를 `onClick={onClickButto}`으로 설정하지 않고,
    ```jsx
    <button onClick={() => {
        onClickButton(-1);
    }}>
    ```
    이렇게 설정한 이유는 전자로 작성할 경우 onClickButton 함수에 값을 넣어줄 방법이 없기 때문.
    - 때문에 화살표 함수를 작성하고 그 안에 onClickButton 함수를 호출하는 형식으로 작성.


## 프로젝트를 진행하며
### 알아야 할 점
- 컴포넌트들이 서로 부모-자식 관계를 이루며 계층 구조를 형성한다는 것.
- 컴포넌트 사이에 값을 전달하려고 한다면 그 컴포넌트들은 꼭 부모 자식 관계를 가지고 있어야 한다는 것.
- 그렇기에 여러 곳에서 사용하는 state를 만들 경우 해당 state는 여러 곳의 공통 부모 컴포넌트에 작성되어야 한다는 것.
#### State Lifting (State 끌어 올리기)
- state를 계층 구조 상에서 위로 끌어올려서 그 아래에 있는 컴포넌트들이 모두 공유할 수 있도록 만드는 방법
### 정리
- React에서는 Props를 통해 부모에서 자식 방향으로 데이터를 전달한다.
    - 데이터의 흐름은 위에서 아래로 흐른다. = 단방향 흐름
        - 데이터의 흐름을 파악하기 쉽고 직관적으로 관리할 수 있음.
