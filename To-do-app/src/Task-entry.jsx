import { useRef, useState } from "react";

function TaskEntry({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleButtonClick = () => {
    const toDoName = todoNameElement.current.value;
    const toDueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(toDoName, toDueDate);
  };

  return (
    <div className="container">
      <form className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter a task."
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} name="date" id="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleButtonClick}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskEntry;
