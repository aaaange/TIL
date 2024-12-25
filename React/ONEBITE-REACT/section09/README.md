# useReducer
목차
1. [useReducer](#01-usereducer)

# 01 useReducer
## 사전 준비
- section08에서 작성한 todolist 프로젝트를 그대로 사용할 것이기 때문에 section08에서 node_modules를 제외한 나머지를 복사하여 section09로 가져오기
- section09로 터미널을 이동한 후 `npm i`를 입력해 사용할 것들을 설치
- `npm run dev`로 서버 켜고 잘 작동되는지 확인까지 완료하기
## useReducer란?
- 컴포넌트 내부에 새로운 State를 생성하는 React Hook
- 모든 useState는 useReducer로 대체 가능
- useState와 차이점 ⭐️
    - 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음.
### App 컴포넌트
- App 컴포넌트 내부를 살펴보면 state의 상태 변화 함수 때문에 코드가 상당히 길어지고 있음
- App 컴포넌트의 역할은 UI를 렌더링하는 것. 
- 그러나 상태 변화 함수들을 관리하면서 주객이 전도되게 됨.
- 문제점
    1. App 컴포넌트가 관리하는 UI들을 한 눈에 파악하기 어려움 (가독성이 떨어짐)
    2. 유지보수가 어려워짐
- 때문에 App 컴포넌트 내부에 있는 상태 관리 코드들을 App 컴포넌트에서 분리하는 작업이 필요한데 useState로는 이러한 기능을 하지 못하기 때문에 useReducer라는 새로운 Hook이 필요한 것.
## 실습
- 처음부터 큰 컴포넌트를 이동시키면 너무 어려울 수 있으니 새로운 컴포넌트를 만들어 연습하기
    - components 폴더에 Exam.jsx 파일을 생성해준다.
        ```jsx
        const Exam = () => {
            return <div>exam</div>
        };

        export default Exam;
        ```
- App 컴포넌트로가 상단에 Exam 컴포넌트를 import하고 자식 컴포넌트로 추가한다.
    ```jsx
    import Exam from './components/Exam'
    ```
    ```jsx
      return (
        <div className='App'>
        <Exam />
        {/* <Header />
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/> */}
        </div>
    )
    ```
    - 헷갈리지 않게 하기 위해서 원래 만들어두었던 컴포넌트들은 주석처리한 후 Exam 컴포넌트만 활성화
### Exam 컴포넌트 안에 간단한 카운터 기능 구현하기
```jsx
import { useReducer } from "react";

const Exam = () => {
    const [state, dispatch] = useReducer();

    return (
        <div>
            <h1>0</h1>
            <button>+</button>
        </div>
    )
};
```
- 간단한 카운터 기능을 작성하고 상단에 useReducer를 import하기
- 컴포넌트 안에 reducer 호출하기
    - dispatch는 상태 변화를 요청하기만 하는 함수
    - dispatch : 발송하다, 급송하다
        - 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
```jsx
function reducer(){

}

const Exam = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1>{state}</h1>
            <button>+</button>
        </div>
    )
};
```
- 컴포넌트 바깥에 reducer라는 함수를 만들고 useReducer의 인수로 넣어줌.
    - reducer : 변환기
    - 상태를 실제로 변환시키는 변환기 역할
    - useReducer의 첫번째 인수로는 변환기를 넣어줘야 함.
- 두번째 인수로는 state의 초기값을 전달할 수 있음.
- h1 태그 안에 0이 아닌 state의 값을 렌더링하도록 수정

```jsx
const onClickPlus = () => {
    dispatch({
        type: "INCREASE",
        data: 1,
    })
}

return (
    <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus} >+</button>
    </div>
)
```
- 버튼을 클릭하였을 때 카운트를 올려줄 수 있도록하는 이벤트 핸들러 함수를 컴포넌트 안에 작성해줌.
- 이벤트 핸들러 안에 dispatch 함수를 호출
    - dispatch 함수의 인수로 상태가 어떻게 변화되길 원하는지 작성
    - 대체로 객체의 형태로 작성함 
        - tpye의 경우 어떻게 변화시키길 원하는지 작성
        - data의 경우 얼마나 변화시키길 원하는지 작성
    - 이와 같이 어떻게 변화되길 원하는지 작성된 것을 `액션 객체`라고 한다.
```jsx
function reducer(state, action){
    console.log(state, action)
}
```
- reducer 함수에 state, action을 작성하면 아래 dispatch를 통해 작성된 액션 객체가 reducer함수의 action 객체로 담기게 됨.
- console로 확인해보기
```jsx
function reducer(state, action){
    console.log(state, action)
    if(action.type === "INCREASE"){
        return state + action.data
    }
}
```
- type이 "INCREASE"일 경우 state에 action의 data 값만큼 더해서 리턴해주기
### 새로운 상태 변화 만들기
```jsx
const onClickMinus = () => {
    dispatch({
        type: "DECREASE",
        data: 1,
    })
}

return (
    <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus} >+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
)
```
- +버튼 아래 -버튼을 새로 만들어주기
- plus와 마찬가지로 minus 이벤트 핸들러 함수를 만들고, 이벤트 핸들러로 연결하기
```jsx
function reducer(state, action){
    console.log(state, action)
    if(action.type === "INCREASE"){
        return state + action.data
    } else if (action.type === "DECREASE"){
        return state - action.data
    }
}
```
- reducer 함수에 조건문을 추가하여 "DECREASE"일 경우 action의 data만큼 빼주도록 작성하기
```jsx
function reducer(state, action){
    switch(action.type){
        case "INCREASE": return state + action.data;
        case "DECREASE": return state - action.data;
        default: return state;
    }
}
```
- reducer 함수 안에 type이 많아질 것 같다 싶으면 if문 대신 switch문을 작성하는게 일반적임

