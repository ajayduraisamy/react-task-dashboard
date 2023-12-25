import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "done") return task.completed;
    return true;
  });

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ]);
  };

  return (
    <div className="container">
      <Navbar />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <p className="text-muted">
        Showing {filteredTasks.length} / {tasks.length} tasks
      </p>
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        updateTask={updateTask}
      />

    </div>
  );
}
