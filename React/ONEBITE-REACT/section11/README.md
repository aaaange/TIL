# Context
목차
1. [Context란](#01-context란)
2. [Context 사용하기](#02-context-사용하기)
3. [Context 분리하기](#03-context-분리하기)

# 01 Context란
## React Context
- 컴포넌트 간의 데이터를 전달하는 또 다른 방법
- 기존의 Props가 가지고 있던 단점을 해결할 수 있음
### Props의 단점 Porps Drilling
- 부모에서 자식으로만 데이터를 전달할 수 있음.
- 전달해야할 계층이 깊어질수록 거쳐가야 할 단계가 많아짐
### Context로 Props Drilling 해결
#### Context : 데이터 보관소 (객체)
- App 컴포넌트에 있던 요소들인 todos, onCreate, onUpdate, onDelete .. 등을 프롭스로 전달하는게 아닌 Context에 저장
- 자식 컴포넌트에서 중간 컴포넌트들을 거치지 않고 바로 Context를 통해 필요한 데이터를 불러올 수 있음
- Context는 여러 개 만드는 것도 가능
## 사전 준비
- section10에서 작성한 todolist 프로젝트를 그대로 사용할 것이기 때문에 section10에서 node_modules를 제외한 나머지를 복사하여 section11로 가져오기
- section11로 터미널을 이동한 후 `npm i`를 입력해 사용할 것들을 설치
- `npm run dev`로 서버 켜고 잘 작동되는지 확인까지 완료하기

# 02 Context 사용하기
## Context 생성
```jsx
import { useState, useRef, useReducer, useCallback, createContext } from 'react'
```
- App 컴포넌트 파일 상단에 새로운 Context를 생성하기 위해 import문에 추가
```jsx
const TodoContext = createContext();
```
- App 컴포넌트 바깥, reducer 함수 아래에 TodoComtext라는 새로운 Context를 호출.
    - 컴포넌트 바깥에 작성하는 이유는 컴포넌트가 리렌더링 될 때마다 context가 새로 생성될 필요가 없기 때문
    - context는 하위 컴포넌트들에게 데이터를 전달하기만 하면 됨.
    - 특수한 경우가 아니면 컴포넌트 바깥에 작성
- TodoContext가 담고 있는 정보를 파악하기 위해 console.log()를 찍어보면 여러가지 정보를 알 수 있는데 주목해야 할 것은 Provider(공급자)
    - 공급할 데이터나 공급받을 컴포넌트를 설정하기 위한 프로퍼티
    - 이는 컴포넌트로 작성할 수 있음 `<TodoContext.Provider />`
```jsx
return (
    <div className='App'>
      <Header />
      <TodoContext.Provider>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </TodoContext.Provider>
    </div>
)
```
- App 컴포넌트의 리턴문에 props를 전달 받는 자식 요소들을 해당 컴포넌트로 묶어줌.
- context로 묶인 모든 자손 컴포넌트들은 이제 Context로 데이터를 공급받을 수 있게 됨.
```jsx
return (
    <div className='App'>
      <Header />
      <TodoContext.Provider value={{
        todos, onCreate, onUpdate, onDelete
      }}>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </TodoContext.Provider>
    </div>
)
```
- 공급할 데이터는 Provider에 value라는 속성을 통해 결정할 수 있음.
- 객체로 묶어('{}') 한 번에 전달 가능
#### 브라우저의 개발자도구 - components에 가면 Context.Provider라는 계층이 새로 생긴 것을 알 수 있음.
## Context 이용
```jsx
<TodoContext.Provider value={{
todos, onCreate, onUpdate, onDelete
}}>
    <Editor/>
    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
</TodoContext.Provider>
```
- Eidtor 컴포넌트에 프롭스로 전달하던 onCreate 함수 제거
```jsx
const Editor = () => {
    ...
}
```
- Eidter 컴포넌트로 이동하여 props로 전달받던 onCreate 함수 제거
```jsx
import { useState, useRef, useContext } from "react";
```
- Context를 사용하기 위해 상단에 import
- 컴포넌트 안에 useContext를 호출하고 인수로 불러오고자 하는 Context를 입력.
    - 그러나 아직 App 컴포넌트 파일에서 만든 TodoContext가 export 되지 않고 있어서 당장 사용할 수 없음.
        ```jsx
        // App.jsx
        export const TodoContext = createContext();
        ```
        - TodoContext 내보내기
        ```jsx
        // Editor.jsx
        import { TodoContext } from "../App";
        ```
        - TodoContext 불러오기
```jsx
const Editor = () => {
    const {onCreate} = useContext(TodoContext)

    ...
}
```
- Context는 onCreate 함수만 사용할 것이기 때문에 구조분해할당을 이용하여 onCreate만 불러오도록 수정
### 테스트
- 수정이 완료되었으니 잘 동작하는지 확인하기 위해 브라우저 새로고침 후 todo 추가해보기
## List 컴포넌트 수정
- 동일하게 App 컴포넌트에 자식 컴포넌트로 존재하는 List의 props들을 지워줌
```jsx
import { useState, useMemo, useContext } from "react";
import "./List.css"
import Todoitem from "./Todoitem";
import { TodoContext } from "../App";

const List = () => {
    const {todos} = useContext(TodoContext)
```
- List 컴포넌트의 프롭스 삭제
- List 컴포넌트 파일 상단에 useContext import
- TodoContext 불러오기
```jsx
<div className="todos_wrapper">
    {filteredTodos.map((todo) => {
        return <Todoitem key={todo.id} {...todo} />;
    })}
</div>
```
- List 컴포넌트의 자식 컴포넌트로 가지고 있는 Todoitem 컴포넌트의 프롭스 삭제
## Todoitem 컴포넌트 수정
```jsx
import { memo, useContext } from "react";
import "./Todoitem.css"
import { TodoContext } from "../App";

const Todoitem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoContext);
    ...
}
```
- 동일하게 Todoitem 컴포넌트로 이동하여 프롭스로 전달 받고 있던 onUpdate, onDelete 삭제
- 상단에 useCreate import
- TodoContext import
- Todoitem 컴포넌트 안에 onUpdate, onDelete를 구조 분해 할당으로 Todocontext를 호출
### 테스트
- 다 잘 작동이 되는데 이전에 설정한 useCallback 최적화 기능이 풀려있는 것처럼 보임.


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