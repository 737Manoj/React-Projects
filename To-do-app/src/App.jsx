import Todo from "./Todo";
import TaskEntry from "./Task-entry";
import TodoItems from "./Task-List";

import "./App.css";
import TaskList from "./Task-List";
import { useState } from "react";

import WelcomeMsg from "./Welcome-Msg";

function App() {
  const [todoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setToDoItems((currValue) => [
      ...currValue,
      { toDo: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDelete = (todoItemName) => {
    const newToDoItems = todoItems.filter((item) => item.toDo !== todoItemName);
    setToDoItems(newToDoItems);
  };
  return (
    <center className="todo-container">
      <Todo />
      <TaskEntry onNewItem={handleNewItem} />
      <TaskList todoItems={todoItems} onDeleteClick={handleDelete}></TaskList>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
    </center>
  );
}

export default App;
