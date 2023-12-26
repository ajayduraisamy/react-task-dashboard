import { useState, useEffect, useMemo } from "react";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {

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

  const [tasks, setTasks] = useLocalStorage("tasks", []);


  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) => {
        const match = task.text
          .toLowerCase()
          .includes(search.toLowerCase());

        if (!match) return false;

        if (filter === "active") return !task.completed;
        if (filter === "done") return task.completed;

        return true;
      })
      .sort((a, b) => a.text.localeCompare(b.text));
  }, [tasks, filter, search]);


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
