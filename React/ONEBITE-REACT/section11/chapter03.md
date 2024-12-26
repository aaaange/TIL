# 03 Context 분리하기
- memo를 사용하여 todoitem을 최적화하였는데, 최적화 전과 같이 모든 요소의 리렌더링이 발생함
- 이는 TodoContext가 리렌더링되기 때문에 발생.
    - onUpate, onDelete가 매번 새로 생성됨
## 해결방법
- TodoContext를 두 개로 분리하여 해결할 수 있음.

|TodoStateContext|TodoDispatchContext|
|:--------------:|:-----------------:|
|변경될 수 있는 값   | 변경되지 않는 값      |
| todos| onCreate, onUpdate, onDelete|
## 수정하기
```jsx
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
```
- App 컴포넌트 파일에 선언했던 TodoContext를 삭제하고 대신 2개의 Context를 작성
```jsx
  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Editor/>
          <List/>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
```
- App 컴포넌트의 리턴문에 TodoContext 삭제
- TodoStateContext로 묶고, 그 안에서 TodoDispatchContext로 묶어 value는 위 표와 같이 나누어 담기.
### useMemo
- 여기서 onCreate, onUpdate, onDelete 객체는 todos가 변경되면 새로 생성되게 됨
- 이를 방지하기 위해 useMemo를 사용해야 함.
```jsx
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
```
- 상단에 useMemo import
```jsx
  const memoizedDispatch = useMemo(()=>{
    return { onCreate, onUpdate, onDelete };
  }, [])
```
- return문 위에 useMemo를 사용하여 해당 객체들을 최초 렌더링 시를 제외하면 리렌더링 되지 않도록 설정.
```jsx
  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={memoizedDispatch}
        >
          <Editor/>
          <List/>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
```
- 만든 memoizedDispatch를 return문 value에 담아 줌
## 변경된 컴포넌트로 데이터 받도록 설정
### Editor
```jsx
import { TodoDispatchContext } from "../App";

const Editor = () => {
    const {onCreate} = useContext(TodoDispatchContext)
```
- 상단에 Import한 context를 수정하고 사용하는 context도 수정
### List
```jsx
import { TodoStateContext } from "../App";

const List = () => {
    const todos = useContext(TodoStateContext)
```
- 동일하게 상단 Import와 사용하는 context를 수정
- 유의해야 할 점은 TodoStateContext에는 value에 객체로 담겨있는게 아니라 todos 하나만 담겨있기 때문에 구조 분해 할당이 아니라 그냥 todos로 담아줘야 함.
### Todoitem
```jsx
import { TodoDispatchContext } from "../App";

const Todoitem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

```
- 동일하게 수정