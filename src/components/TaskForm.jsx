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
            </span>


            <button className="btn btn-primary mt-2" onClick={submit}>
                Add Task
            </button>
        </div>
    );
}
