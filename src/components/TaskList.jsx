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
            <div className="alert alert-info mt-3">
                No tasks found — add your first task 🚀
            </div>
        );
    }

    const startEdit = (task) => {
        setEditingId(task.id);
        setEditText(task.text);
    };

    const saveEdit = (id) => {
        if (editText.trim().length < 3) {
            alert("Text too short");
            return;
        }

        updateTask(id, editText.trim());
        setEditingId(null);
        setEditText("");
    };

    return (
        <ul className="list-group mt-3">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    {editingId === task.id ? (
                        <input
                            className="form-control me-2"
                            value={editText}
                            autoFocus
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && saveEdit(task.id)
                            }
                        />
                    ) : (
                        <span
                            style={{ cursor: "pointer" }}
                            className={
                                task.completed
                                    ? "text-decoration-line-through text-muted"
                                    : ""
                            }
                            onClick={() => toggleTask(task.id)}
                        >
                            {task.text}
                        </span>
                    )}

                    <div>
                        {editingId === task.id ? (
                            <>
                                <button
                                    className="btn btn-sm btn-success me-1"
                                    onClick={() => saveEdit(task.id)}
                                >
                                    Save
                                </button>
                                <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={() => setEditingId(null)}
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="btn btn-sm btn-warning me-1"
                                    onClick={() => startEdit(task)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => deleteTask(task.id)}
                                >
                                    X
                                </button>
                            </>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
