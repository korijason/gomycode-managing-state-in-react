

import React, { useState, useEffect } from "react";

interface Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

const TaskForm = ({ addTask, editTask, editingTask }: { addTask: (task: Task) => void, editTask: (task: Task) => void, editingTask?: Task }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  // If we are editing, pre-fill the form with the task details
  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setTaskDescription(editingTask.description);
    }
  }, [editingTask]);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate input fields
    if (!taskName || !taskDescription) {
      alert("Both fields are required!");
      return;
    }

    const task: Task = {
      id: editingTask ? editingTask.id : Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };

    if (editingTask) {
      editTask(task);
    } else {
      addTask(task);
    }

    // Clear the form after submit
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">{editingTask ? "Edit Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
