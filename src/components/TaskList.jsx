import { useState } from "react";

export default function TaskList({
    tasks,
    deleteTask,
    toggleTask,
    updateTask,
}) {
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    if (!tasks.length) {
        return (
            <div className="alert alert-info mt-4 text-center shadow-sm rounded-4">
                🚀 No tasks yet — start by adding your first one!
            </div>
        );
    }

    const startEdit = (task) => {
        setEditingId(task.id);
        setEditText(task.text);
    };

    const saveEdit = (id) => {
        if (editText.trim().length < 3) {
            alert("Task must be at least 3 characters");
            return;
        }

        updateTask(id, editText.trim());
        setEditingId(null);
        setEditText("");
    };

    return (
        <ul className="list-group mt-4 gap-2">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className={`
            list-group-item
            shadow-sm
            rounded-pill
            d-flex justify-content-between align-items-center
            px-4 py-2
            ${task.completed
                            ? "bg-light opacity-75"
                            : "bg-white"
                        }
          `}
                    style={{
                        transition: "0.2s ease",
                        cursor: "default",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "translateY(-1px)")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "translateY(0)")
                    }
                >
                    {/* Task text / edit input */}
                    <div className="flex-grow-1 me-3">
                        {editingId === task.id ? (
                            <input
                                className="form-control rounded-pill px-3"
                                autoFocus
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && saveEdit(task.id)
                                }
                            />
                        ) : (
                            <span
                                onClick={() => toggleTask(task.id)}
                                className={`fw-semibold ${task.completed
                                        ? "text-decoration-line-through text-muted"
                                        : "text-dark"
                                    }`}
                                style={{ cursor: "pointer" }}
                            >
                                {task.completed ? "✅ " : ""}{task.text}
                            </span>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="d-flex gap-2">
                        {editingId === task.id ? (
                            <>
                                <button
                                    className="btn btn-success btn-sm rounded-pill px-3 shadow"
                                    onClick={() => saveEdit(task.id)}
                                >
                                    Save
                                </button>

                                <button
                                    className="btn btn-outline-secondary btn-sm rounded-pill px-3"
                                    onClick={() => setEditingId(null)}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="btn btn-warning btn-sm rounded-pill px-3"
                                    onClick={() => startEdit(task)}
                                >
                                    ✏ Edit
                                </button>

                                <button
                                    className="btn btn-outline-danger btn-sm rounded-pill px-3"
                                    onClick={() => deleteTask(task.id)}
                                >
                                    🗑
                                </button>
                            </>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
