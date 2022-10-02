export default function ToolContent({ cell, update_habit }) {
    const { date, tasks, stringDate } = cell;
    return (
        <div key={`cell-${date}`} className="content">
            <p className="date">{cell.date}</p>
            <ul>
                {tasks.map((task) => (
                    <li key={`item-${task.id}-${date}`} className="cell-input">
                        <input
                            id={`task-${task.id}-${date}`}
                            type="checkbox"
                            checked={task.checked}
                            onChange={() => update_habit(task.id, stringDate)}
                        />
                        <label htmlFor={`task-${task.id}-${date}`}>
                            {task.name
                                ? task.name
                                : task.checked
                                ? "Uncheck!"
                                : "Check!"}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
