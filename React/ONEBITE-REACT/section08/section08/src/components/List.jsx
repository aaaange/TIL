import "./List.css"
import Todoitem from "./Todoitem";

const List = () => {
    return (
        <div className="List">
            <h4>Todo List ✅</h4>
            <input placeholder="할 일 검색하기" />
            <div className="todos_wrapper">
                <Todoitem />
                <Todoitem />
                <Todoitem />
            </div>
        </div>
    )
};

export default List;