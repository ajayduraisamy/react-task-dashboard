export default function TaskList({ tasks, deleteTask, toggleTask })

    if (!tasks.length) return <p className="text-muted mt-3">No tasks yet ✅</p>;

    return (
        <ul className="list-group mt-3">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="list-group-item d-flex justify-content-between"
                >
                    <span
                        style={{
                            cursor: "pointer",
                            textDecoration: task.completed ? "line-through" : "none",
                        }}
                        onClick={() => toggleTask(task.id)}
                    >
                        {task.text}
                    </span>

                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteTask(task.id)}
                    >
                        X
                    </button>
                </li>
            ))}
            <div className="mb-3">
                <button
                    className="btn btn-outline-primary me-2"
                    onClick={() => setFilter("all")}
                >
                    All
                </button>

                <button
                    className="btn btn-outline-primary me-2"
                    onClick={() => setFilter("active")}
                >
                    Active
                </button>

                <button
                    className="btn btn-outline-primary"
                    onClick={() => setFilter("done")}
                >
                    Done
                </button>
            </div>
        
        </ul>
    );
}
