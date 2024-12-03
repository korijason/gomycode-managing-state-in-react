import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // For editing tasks

  // Load tasks from localStorage when the app initializes
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever the tasks list changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (task: { id: number; title: string; completed: boolean }) => {
    setTasks([...tasks, task]);
  };

  // Edit an existing task
  const editTask = (task: { id: number; title: string; completed: boolean }) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    setEditingTask(null); // Clear the editing form after save
  };

  // Delete a task
  const deleteTask = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} editTask={editTask} editingTask={editingTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        setEditingTask={setEditingTask}
      />
    </div>
  );
};

export default App;
