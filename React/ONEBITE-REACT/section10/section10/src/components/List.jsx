import { useState, useMemo } from "react";
import "./List.css"
import Todoitem from "./Todoitem";

const List = ({todos, onUpdate, onDelete}) => {
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

    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        console.log("getAnalyzedData 호출!")
        const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo) => todo.isDone
        ).length;
        const notDoneCount = totalCount - doneCount;
        
        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return (
        <div className="List">
            <h4>Todo List ✅</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
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
};

export default List;