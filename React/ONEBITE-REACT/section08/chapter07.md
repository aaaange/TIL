# 07 Delete - 투두 삭제하기
## Delete 함수 만들기
- 삭제 버튼을 누르면 삭제가 되도록 해야하기 때문에 onUpdate 함수를 만든 것 처럼 App 컴포넌트에 onDelete 함수를 만들기
```jsx
const onDelete = (targetId) => {
    setTodos(todos.filter((todo)=>todo.id !== targetId))
}
```
- targetId를 매개변수로 받아 삭제할 요소의 id 값을 받아오기
- setTodos 함수에 인수로 todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열을 넣어주기
    - 삭제되어야 하는 아이템을 제외한 배열 생성
## 함수 props로 전달
- onDelete 함수는 todoItem 컴포넌트에서 삭제 버튼을 눌렀을 때 작동해야 하기 때문에 list로 프롭스를 전달하고, 또 todoItem으로 프롭스 전달해야함.
```jsx
// App 컴포넌트의 return
  return (
      <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
```
- onUpdate와 마찬가지로 onDelete도 프롭스로 전달하기
```jsx
const List = ({todos, onUpdate, onDelete}) => {
```
- list 컴포넌트의 매개변수로 받은 프롭스를 추가
```jsx
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
                    return <Todoitem key={todo.id} onUpdate={onUpdate} onDelete={onDelete} {...todo} />;
                })}
            </div>
        </div>
    )
```
- list 컴포넌트 return문에 Todoitem 컴포넌트에 프롭스로 onDelete를 전달
```jsx
// Todoitem 컴포넌트
const Todoitem = ({id, isDone, content, date, onUpdate, onDelete}) => {
```
- 마찬가지로 Todoitem 컴포넌트에 매개변수로 onDelete를 추가.
## 삭제 버튼 클릭시 해당 요소가 삭제되도록 설정
```jsx
// Todoitem 컴포넌트
const onClickDeleteButton = () => {
    onDelete(id)
}


...


<button onClick={onClickDeleteButton}>X</button>
```
- 이벤트 핸들러를 만들어 삭제 버튼을 클릭하였을 때 요소가 삭제되도록 함.
