import React from "react";
import TaskItem from "./TaskItem";

const TaskList: React.FC<{
  tasks: Array<{ id: string | number; [key: string]: any }>;
  deleteTask: (id: string | number) => void;
  toggleComplete: (id: string | number) => void;
  setEditingTask: (task: { id: string | number; [key: string]: any } | null) => void;
}> = ({ tasks, deleteTask, toggleComplete, setEditingTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks to display</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            setEditingTask={setEditingTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
