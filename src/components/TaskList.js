import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;


