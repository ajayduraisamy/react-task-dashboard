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
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-control"
                placeholder="Enter task…"
            />

            <button className="btn btn-primary mt-2" onClick={submit}>
                Add Task
            </button>
        </div>
    );
}
