function TodoItem({ todoName, todoDate }) {

    return <div className="container items-container">
        <div className="row new-row">
            <div className="col-5">{todoName}</div>
            <div className="col-3">{todoDate}</div>
            <div className="col-2"><button type="button" className="btn btn-danger new-btn">Delete</button></div>
        </div>
    </div>
}

export default TodoItem;