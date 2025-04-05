import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import Message from "./components/Message";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Exercise",
      dueDate: "24/3/25",
    },
    {
      name: "Study",
      dueDate: "25/3/25",
    },
    {
      name: "Sleep",
      dueDate: "26/3/25",
    },
  ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const handleDeleteItems = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container main-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Message></Message>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItems}
      ></TodoItems>
    </center>
  );
}

export default App;
