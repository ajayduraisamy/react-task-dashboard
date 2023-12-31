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
            className={`p-4 rounded-4 shadow-lg mb-4`}
            style={{
                background: darkMode
                    ? "linear-gradient(135deg, #0f172a, #020617)"
                    : "linear-gradient(135deg, #ffffff, #f1f5ff)",
                color: darkMode ? "#fff" : "#0f172a",
                backdropFilter: "blur(6px)",
            }}
        >
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h5 className="mb-0 fw-bold">Add New Task</h5>
                    <small className="opacity-75">
                        Stay organized & productive
                    </small>
                </div>

                <button
                    className={`btn btn-sm px-3 rounded-pill shadow-sm ${darkMode
                            ? "btn-outline-light"
                            : "btn-outline-primary"
                        }`}
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "🌙 Dark" : "☀️ Light"}
                </button>
            </div>

            {/* Input */}
            <div className="position-relative mb-3">
                <input
                    className="form-control form-control-lg rounded-pill text-center shadow-sm"
                    style={{
                        background: darkMode ? "#020617" : "#fff",
                        color: darkMode ? "#fff" : "#000",
                    }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What do you need to do today?"
                    onKeyDown={(e) => e.key === "Enter" && submit()}
                />
            </div>

            {/* Button */}
            <button
                className="btn btn-primary w-100 py-2 fw-semibold rounded-pill shadow"
                style={{
                    background:
                        "linear-gradient(135deg, #6366f1, #3b82f6)",
                    border: "none",
                }}
                onClick={submit}
            >
                ➕ Add Task
            </button>
        </div>
    );
}
