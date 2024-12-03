import React from "react";

const TaskItem: React.FC<{
  task: { id: number; name: string; description: string; completed: boolean };
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
  setEditingTask: (task: { id: number; name: string; description: string; completed: boolean }) => void;
}> = ({ task, deleteTask, toggleComplete, setEditingTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3 onClick={() => setEditingTask(task)}>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
