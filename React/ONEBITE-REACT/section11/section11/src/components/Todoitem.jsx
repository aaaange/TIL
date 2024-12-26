import { memo, useContext } from "react";
import "./Todoitem.css"
import { TodoDispatchContext } from "../App";

const Todoitem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id)
    }

    return (
        <div className="Todoitem">
            <input 
                onChange={onChangeCheckbox}
                readOnly 
                checked={isDone} 
                type="checkbox" 
            />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>X</button>
        </div>
    )
}

// export default memo(Todoitem, (prevProps, nextProps)=> {
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true; // 아무것도 바뀌지 않았다면 리렌더링 하지 마라
// });

export default memo(Todoitem);