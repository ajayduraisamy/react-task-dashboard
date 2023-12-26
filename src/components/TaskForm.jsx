import { useState } from "react";

export default function TaskForm({ addTask }) {
    const [text, setText] = useState("");

    const submit = () => {
        if (!text.trim()) return;

        addTask(text);
        setText("");
    };

    return (
        <div className="mb-3">
            <input
                className="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter new task"
                onKeyDown={(e) => e.key === "Enter" && submit()}
            />
            <span
                className={task.completed ? "text-decoration-line-through text-muted" : ""}
                style={{ cursor: "pointer" }}
                onClick={() => toggleTask(task.id)}
            >
                {task.text}
                <const handleToggle= (id) => toggleTask(id);
const handleDelete = (id) => deleteTask(id);
const handleSave = (id) => {
  if (editText.trim().length < 3) return alert("Text too short");
                updateTask(id, editText);
                setEditingId(null);
                setEditText("");
};


            <button className="btn btn-primary mt-2" onClick={submit}>
                Add Task
            </button>
        </div>
    );
}
