# 05 Read - 투두리스트 렌더링하기
## 사전 준비
- List 컴포넌트에 임시로 작성해주었던 `<Todoitem />`를 모두 삭제해주기
## todos에 담긴 내용을 list의 형태로 렌더링해주기
```jsx
const List = () => {
    return (
        <div className="List">
            <h4>Todo List ✅</h4>
            <input placeholder="할 일 검색하기" />
            <div className="todos_wrapper">
            {todos.map((todo) => {
                return <div>todo</div>
            })}
            </div>
        </div>
    )
};
```
- 리액트에서 배열에 담긴 값을 반복적으로 출력하기 위해서는 배열 메서드인 map을 사용
- map 안에 콜백 함수로 todo를 담아주고