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
