export default function TaskList({ tasks }) {
    if (!tasks.length) {
        return (
            <p className="text-muted mt-3">
                No tasks yet. Add one above ✅
            </p>
        );
    }

    return (
        <ul className="list-group mt-3">
            {tasks.map((task) => (
                <li key={task.id} className="list-group-item">
                    {task.text}
                </li>
            ))}
        </ul>
    );
}
