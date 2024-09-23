import TaskAdded from "./TaskAdded";
const TaskList = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="task-container">
      {todoItems.map((item) => (
        <TaskAdded
          key={item.toDo}
          taskName={item.toDo}
          taskDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TaskList;
