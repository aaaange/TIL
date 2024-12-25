# 02 투두리스트 업그레이드
- App 컴포넌트에 자식 컴포넌트로 작성했던 Exam 컴포넌트를 삭제하고, 나머지 컴포넌트를 주석해제하여 활성화하기
- 상단에 exam 컴포넌트 Import 문도 삭제
- 상단에 useReducer import 추가
    ```jsx
    import { useState, useRef, useReducer } from 'react'
    ```
## useState -> useReducer
```jsx
function reducer(){
    
    }

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
```
- App 컴포넌트 안에 있던 useState 삭제
- 그 자리에 useReducer 호출
### onCreate, onUpdate 등 함수들 모두 대체하기
```jsx
const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id : idRef.current ++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    })
}
```
- 추가 버튼을 클릭하면 onCreate 함수가 실행되고, dispatch 함수가 실행되어 reducer 함수로 정보를 전달할 것
```jsx
function reducer(state, action){
  switch(action.type){
    case "CREATE": return [action.data, ...state];
  }
}
```
- 이전에 useState를 사용했을때와 마찬가지로 작동함.
```jsx
const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId: targetId
    })
}
```
```jsx
function reducer(state, action){
  switch(action.type){
    case "CREATE": 
      return [action.data, ...state];
    case "UPDATE": 
      return state.map((item) => 
        item.id === action.targetId 
          ? { ...item, isDone:!item.isDone}
          :item)
  }
}
```
- update도 마찬가지로 onUpdate 함수 안에 dispatch 함수를 통해 작성.
```jsx
const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
}
```
```jsx
function reducer(state, action){
  switch(action.type){
    case "CREATE": 
      return [action.data, ...state];
    case "UPDATE": 
      return state.map((item) => 
        item.id === action.targetId 
          ? { ...item, isDone:!item.isDone}
          :item)
    case "DELETE":
      return state.filter(
        (item) => item.id !== action.targetId
      )
    default:
      return state;
  }
}
```
- delete도 동일하게 변경.

