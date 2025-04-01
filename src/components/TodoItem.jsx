import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {

    return <div className="container items-container">
        <div className="row new-row">
            <div className="col-5">{todoName}</div>
            <div className="col-3">{todoDate}</div>
            <div className="col-2"><button type="button" className="btn btn-danger new-btn" onClick={() => onDeleteClick(todoName)}><MdDelete /></button></div>
        </div>
    </div>
}

export default TodoItem;