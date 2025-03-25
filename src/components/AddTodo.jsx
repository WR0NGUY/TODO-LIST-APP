function AddTodo() {
    return (
        <div class="container items-container">
            <div class="row new-row">
                <div class="col-5"><input type="text" placeholder="Enter to-do here" /></div>
                <div class="col-3"><input type="date" /></div>
                <div class="col-2"><button type="button" class="btn btn-success new-btn">Add</button></div>
            </div>
        </div>
    );
}

export default AddTodo;