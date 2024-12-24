import "./Todoitem.css"

const Todoitem = ({id, isDone, content, date}) => {
    return (
        <div className="Todoitem">
            <input readOnly checked={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button>X</button>
        </div>
    )
}

export default Todoitem;