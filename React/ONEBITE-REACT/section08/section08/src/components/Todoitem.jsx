import "./Todoitem.css"

const Todoitem = () => {
    return (
        <div className="Todoitem">
            <input type="checkbox" />
            <div className="content">Todo...</div>
            <div className="date">Date</div>
            <button>X</button>
        </div>
    )
}

export default Todoitem;