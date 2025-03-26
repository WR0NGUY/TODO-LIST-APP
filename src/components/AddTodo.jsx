function AddTodo() {
    return (
        <div className="container items-container">
            <div className="row new-row">
                <div className="col-5"><input type="text" placeholder="Enter to-do here" /></div>
                <div className="col-3"><input type="date" /></div>
                <div className="col-2"><button type="button" className="btn btn-success new-btn">Add</button></div>
            </div>
        </div>
    );
}

export default AddTodo;