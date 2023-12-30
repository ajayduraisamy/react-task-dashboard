import { useState } from "react";

export default function TaskForm({ addTask }) {
    const [text, setText] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const submit = () => {
        if (!text.trim()) return;
        if (text.trim().length < 3) {
            alert("Task must be at least 3 characters");
            return;
        }

        addTask(text);
        setText("");
    };

    return (
        <div
            className={`p-4 rounded ${darkMode ? "bg-dark text-light" : "bg-light"
                }`}
        >
            {/* Minor UI tweak for daily progress */}

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="m-0">Add New Task</h5>

                <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            <input
                className="form-control mb-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter new task"
                onKeyDown={(e) => e.key === "Enter" && submit()}
            />

            <button
                className="btn btn-primary w-100"
                onClick={submit}
            >
                Add Task
            </button>
        </div>
    );
}
