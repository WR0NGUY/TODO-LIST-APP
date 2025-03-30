import { useState } from "react";
function AddTodo({ onNewItem }) {

    const[todoName, setTodoName] = useState()
    const[dueDate, setDueDate] = useState()

    const handleNameChange = (event) => {
        setTodoName(event.target.value)
    }
    const handleDateChange = (event) => {
        setDueDate(event.target.value)
    }

    const handleAddButtonClicked = () => {
        onNewItem(todoName, dueDate)
        setDueDate("")
        setTodoName("")
    }

    return (
        <div className="container items-container">
            <div className="row new-row">
                <div className="col-5"><input type="text" placeholder="Enter to-do here" onChange={handleNameChange}/></div>
                <div className="col-3"><input type="date" onChange={handleDateChange}/></div>
                <div className="col-2"><button type="button" className="btn btn-success new-btn" onClick={handleAddButtonClicked}>Add</button></div>
            </div>
        </div>
    );
}

export default AddTodo;