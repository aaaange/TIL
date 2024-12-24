# 05 Read - 투두리스트 렌더링하기
## 사전 준비
- List 컴포넌트에 임시로 작성해주었던 `<Todoitem />`를 모두 삭제해주기
## todos에 담긴 내용을 list의 형태로 렌더링해주기
```jsx
const List = ({todos}) => {
    console.log("todos:", todos);
    return (
        <div className="List">
            <h4>Todo List ✅</h4>
            <input placeholder="할 일 검색하기" />
            <div className="todos_wrapper">
                {todos.map((todo) => {
                    return <div>{todo.content}</div>;
                })}
            </div>
        </div>
    )
};
```
- 리액트에서 배열에 담긴 값을 반복적으로 출력하기 위해서는 배열 메서드인 map을 사용
- map 안에 콜백 함수로 todo를 담아주고 todo의 content를 출력한다. 그럼 map 함수를 통해 배열이 각각 출력된다.
- 오류가 발생하여 화면이 출력되지 않아 디버깅을 위해 `console.log("todos:", todos);`를 추가하였다. 
    - log를 확인해보니, todos가 defined로 출력. 이는 부모 컴포넌트에서 todos를 제대로 전달하고 있지 않는 것
        ```jsx
        return (
            <div className='App'>
                <Header />
                <Editor onCreate={onCreate}/>
                <List todos={todos}/>
            </div>
        )
        ```
        - app 컴포넌트의 return에 List 컴포넌트에 Todos를 props로 넣어주지 않았었음.
- return으로 html 코드를 넣을 수도 있고 `<TodoItem />`처럼 컴포넌트를 넣을 수도 있음
    - `return <Todoitem />;`
    - 각각에 아이템을 스프레드 연산자로 프롭스를 전달할 수도 있음
        - `return <Todoitem {...todo} />;`
## props로 전달된 내용을 각각 내용을 ui로 출력하도록 함
- Todoitem 컴포넌트 파일로 이동하여 매개변수에 프롭스로 전달한 `{id, isDone, content, date}` 입력.
- input의 속성으로 `checked={isDone}`을 넣어줌.
- content div 안에는 Todo...이라는 임시 텍스트를 대신하여 `{content}`를 넣어주기
- date div 안에도 `{date}`를 넣어주기
    - 그냥 {date}를 넣으면 타임스탬프가 찍히는데 `{new Date(date).toLocaleDateString()}`로 작성하면 더 적절한 형식의 날짜가 출력됨.
## 오류 해결
### 1. checked 옵션
- onChange 이벤트 핸들러 없이 checked 옵션을 사용하여 발생한 오류
- checked 옵션을 변경할 방법이 없는데 괜찮냐고 물어보는 오류임. 
- 아직 해당 기능을 구현하지 않았으니 오류가 발생하는 것이 맞음 추후 개발 예정
- 정 거슬린다면 input 태그에 속성으로 readOnly를 넣어주면 오류를 사라지게 할 수 있음
    - `<input readOnly checked={isDone} type="checkbox" />`
### 2. "key" props
- List 컴포넌트에서 Todoitem 컴포넌트를 리스트 형태로 출력하는 과정에서 props로 key를 제공하지 않아서 발생하는 오류
- 리액트에서는 리스트로 렌더링된 컴포넌트들이나 또는 어떤 요소들을 구분할 때 "key"라는 props를 통해 구분함
- 때문에 TodoItem 컴포넌트를 넣을 때 key를 프롭스로 전달해줘야 오류가 발생하지 않음
    ```jsx
    // List.jsx
    eturn <Todoitem key={todo.id} {...todo} />;
    ```
## 검색 기능 구현하기
### 검색어 입력시 리렌더링
- 검색어가 변경될 때마다 list가 리렌더링 되어야 할 필요가 있음. 때문에 List 컴포넌트에 검색어를 state로 보관해야 함. 
```jsx
const List = ({todos}) => {
    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

...
}
```
- 컴포넌트 파일 상단에 useState를 렌더링
- search를 state로 작성하기
- 이벤트 핸들러로 setSearch에 설정해주기.
```jsx
return (
    <div className="List">
        <h4>Todo List ✅</h4>
        <input
            value={search}
            onChange={onChangeSearch} 
            placeholder="할 일 검색하기" 
        />
    ...
)    
```
- return 안에 input 태그에 value, onChange 함수를 설정해주기
### 검색어에 따라 list 필터링
- 검색어에 알맞는 List를 출력하기 위해 필터링이 필요함.
```jsx
const getFilteredData = () => {
    if (search === "") {
        return todos;
    } 
    return todos.filter((todo) =>
        todo.content.includes(search)
    );
}
```
- Filtering을 위한 함수 getFilteredDate를 작성
- search가 비어있다면 전체 todos를 렌더링
- 만약 비어있지 않다면 todos를 필터링하고 매개변수로 todo를 가진 콜백함수를 호출.
    - todo.content.includes(search)
    - 여기서 includes는 todo의 컨텐츠에 search가 포함되어 있으면 true 아니면 false를 출력하는 것.
    - 위에서 ture인 것만 출력되는 것
- 오류
    - 콜백함수 작성할 때 화살표 함수를 사용한다고 생각하고 () => {} 와 같은 형식으로 작성했는데 한줄짜리 함수여서 {}를 작성하면 안됐었나봄
    - 처음엔 아래와 같이 작성했는데 {} 지우니 출력됨
        ```jsx
        return todos.filter((todo) => {
            todo.content.includes(search)
        });
    ```
```jsx
const filteredTodos = getFilteredData();

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
                return <Todoitem key={todo.id} {...todo} />;
            })}
        </div>
    </div>
)
```
- 만든 필터 함수를 통해 걸러진 todos를 filteredTodos 변수에 담고, 렌더링할 것을 todos에서 filteredTodos로 수정해줌.
### 대소문자 구별 안하게 개선
- 현재 상태에서는 대소문자를 구별하여 `React 공부하기`를 react로 검색할 경우 나오지 않음
- 이 경우 search에 담는 내용과 todo.content에 담긴 내용을 모두 소문자로 변환하여 검색하면 됨.
```jsx
const getFilteredData = () => {
    if (search === "") {
        return todos;
    } 
    return todos.filter((todo) => 
        todo.content.toLowerCase().includes(search.toLowerCase())
    );
}
```
- return 내용에 todo.content 뒤에 소문자로 변환하는 `toLowerCase()` 함수를 넣어주고 includes 안에 search에도 `toLowerCase()` 를 추가하여 소문자로 변환해준다.

