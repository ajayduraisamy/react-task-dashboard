import { useState } from "react";

export default function TaskList({
    tasks,
    deleteTask,
    toggleTask,
    updateTask,
}) {
    if (!tasks.length) {
        return (
            <div className="alert alert-info mt-3">
                No tasks found — add your first task 🚀
            </div>
        );
    }

    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    const startEdit = (task) => {
        setEditingId(task.id);
        setEditText(task.text);
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
                                    onClick={() => updateTask(task.id, editText)}
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
