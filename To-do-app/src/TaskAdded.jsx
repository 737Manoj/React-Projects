function TaskAdded({ taskName, taskDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{taskName}</div>
        <div className="col-4">{taskDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(taskName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskAdded;
