import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {

    const[todoName, setTodoName] = useState("")
    const[dueDate, setDueDate] = useState("")

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
                <div className="col-5"><input type="text" placeholder="Enter to-do here" value={todoName} onChange={handleNameChange}/></div>
                <div className="col-3"><input type="date" value={dueDate} onChange={handleDateChange}/></div>
                <div className="col-2"><button type="button" className="btn btn-success new-btn" onClick={handleAddButtonClicked}> <MdAssignmentAdd /></button></div>
            </div>
        </div>
    );
}

export default AddTodo;