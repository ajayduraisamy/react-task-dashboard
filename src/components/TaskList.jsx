export default function TaskList({ tasks, deleteTask }) {
    if (!tasks.length) return <p className="text-muted mt-3">No tasks yet ✅</p>;

    return (
        <ul className="list-group mt-3">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="list-group-item d-flex justify-content-between"
                >
                    {task.text}
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteTask(task.id)}
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    );
}
