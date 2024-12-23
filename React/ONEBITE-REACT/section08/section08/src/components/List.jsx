import "./List.css"
import Todoitem from "./Todoitem";

const List = ({todos}) => {
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

export default List;