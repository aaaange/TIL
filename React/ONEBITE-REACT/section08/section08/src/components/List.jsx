import { useState } from "react";
import "./List.css"
import Todoitem from "./Todoitem";

const List = ({todos, onUpdate}) => {
    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }
    
    const getFilteredData = () => {
        if (search === "") {
            return todos;
        } 
        return todos.filter((todo) => 
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    }

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
                    return <Todoitem key={todo.id} onUpdate={onUpdate} {...todo} />;
                })}
            </div>
        </div>
    )
};

export default List;