function TodoItem1() {
let todoName = "Exercise";
let todoDate = "4/10/2023";

    return <div class="container items-container">
        <div class="row new-row">
            <div class="col-5">{todoName}</div>
            <div class="col-3">{todoDate}</div>
            <div class="col-2"><button type="button" class="btn btn-danger new-btn">Delete</button></div>
        </div>
    </div>
}

export default TodoItem1;