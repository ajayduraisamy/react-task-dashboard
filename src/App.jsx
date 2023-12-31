import { useState, useMemo } from "react";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all"); // all | active | done

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: newText }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "done") return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="container py-4">
      <Navbar />

      <TaskForm addTask={addTask} />

      {/* Filter buttons */}
      <div className="btn-group mt-3 w-100">
        <button
          className={`btn ${filter === "all" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={`btn ${filter === "active" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>

        <button
          className={`btn ${filter === "done" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        updateTask={updateTask}
      />

      <p className="text-muted mt-3 text-center">
        Showing {filteredTasks.length} / {tasks.length} tasks
      </p>
    </div>
  );
}
