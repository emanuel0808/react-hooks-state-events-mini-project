import React from "react";

function Task({ task, onDeleteTask }) {
  const handleDeleteClick = () => {
    onDeleteTask(task.id);
  };

  return (
    <li data-testid="task-item">
      <span data-testid="task-text">{task.text}</span> -{" "}
      <span data-testid="task-category">{task.category}</span>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default Task;
