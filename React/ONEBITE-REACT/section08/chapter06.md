# 06 Update - 투두 수정하기
- 현재 체크 박스 기능을 제공하고 있는데 체크 박스를 클릭 했을 때 체크가 되는 기능이 없음
- 체크 박스를 클릭하면 todos의 isDone이 true로 변경되어 체크 박스가 체크되어야 함
- onCreate 함수와 같이 setTodos를 호출해 todos를 수정해야 함.
## 수정 함수 만들기
- app 컴포넌트의 onCreate 함수 아래 onUpdate 함수를 만든다.
```jsx
const onUpdate = (targetId) => {

}
```
- 매개변수로 targetId를 받고, todos State의 값들 중에 targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경하고자 함.
- 해당 함수 안에 setTodos를 호출한다음 인수로 todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열을 넣어줌.
```jsx
const onUpdate = (targetId) => {
    setTodos(todos.map((todo) => {
        if(todo.id === targetId) {
        return {
            ...todo,
            isDone: !todo.isDone
        }
        }
        return todo
    }))
}
```
- `...todos` 스프레드 연산자로 기존의 todos 값을 모두 펼침
- `isDone`의 값만 !로 todo.isDone으로 반전시킴
- 조건문에 일치하지 않는다면 todo를 그냥 렌더링
```jsx
  const onUpdate = (targetId) => {
    setTodos(todos.map((todo)=> 
      todo.id === targetId 
    ? {...todo, isDone: !todo.isDone}
    : todo))
  }
```
- 삼항연산자를 활용하여 간결하게 표현할 수도 있음

## 수정 함수 연결하기
- onUpdate 함수는 app 컴포넌트의 자식요소인 list 컴포넌트의 자식요소인 TodoItem 컴포넌트의 input이 클릭되었을 때 호출이 되어야 함.
```jsx
// App.jsx
return (
    <div className='App'>
        <Header />
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} />
    </div>
)
```
- 순서대로 app 컴포넌트 안에 list 컴포넌트에 props로 onUpdate 함수를 넘겨 줌.
```jsx
const List = ({todos, onUpdate}) => {

    ...

    return (
    <div className="List">
        <h4>Todo List ✅</h4>
        <input
            value={search}
            onChange={onChangeSearch} 
            placeholder="할 일 검색하기" 
        />
        <div className="todos_wrapper">
            {filteredTodos.map((todo) => {
                return <Todoitem key={todo.id} onUpdate={onUpdate} {...todo} />;
            })}
        </div>
    </div>
    )

```
- List 컴포넌트에서는 프롭스를 구조 분해 할당으로 받기
- 리턴 문에서 또 프롭스로 onUpdate 함수를 전달
```jsx
const Todoitem = ({id, isDone, content, date, onUpdate}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    return (
        <div className="Todoitem">
            <input 
                onChange={onChangeCheckbox}
                readOnly 
                checked={isDone} 
                type="checkbox" 
            />

        ...
    )
}
```
- TodoItem 컴포넌트에서 onUpdate 함수를 props로 받기
- onChangeCheckbox라는 이벤트 핸들러 함수를 만들어 체크 박스를 눌렀을 때 onUpdate 함수가 호출될 수 있게 설정.
    - onUpdate의 매개변수는 변경될 Id 값을 넣어줘야 함.
- 여기서 onClick 이 아니라 onChange 라는 이벤트 핸덜러를 사용한 이유는 해당 태그가 button이 아니라 input이기 때문임.
    - 동작은 클릭으로 볼 수 있지만 그것으로 발생하는 이벤트는 체크 박스가 변경되는 것에 가까우니 onChange로 작성한 것.