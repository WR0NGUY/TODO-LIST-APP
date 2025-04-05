import { useRef } from "react";
import { MdAssignmentAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container items-container">
      <form className="row new-row" onSubmit={handleAddButtonClicked}>
        <div className="col-5">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter to-do here"
          />
        </div>
        <div className="col-3">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success new-btn">
            {" "}
            <MdAssignmentAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
