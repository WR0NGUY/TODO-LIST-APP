import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import "./App.css"

function App() {

  const todoItems = [{
    name: 'Exercise',
    dueDate: '24/3/25'
  },
  {
    name: 'Study',
    dueDate: '25/3/25'
  },
  {
    name: 'Sleep',
    dueDate: '26/3/25'
  },
  ];

  return (
    <center className="todo-container main-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>

    </center>
  );
}

export default App;
