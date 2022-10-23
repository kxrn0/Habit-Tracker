import "./tool_content.css";

export default function ToolContent({ habitId, cell, update }) {
    const { date, tasks, stringDate } = cell;

    return (
        <div key={`cell-${date}`} className="content">
            <p className="date">{cell.date}</p>
            <ul>
                {tasks.map((task) => (
                    <li key={`item-${task.id}-${date}`} className="cell-input">
                        <input
                            className="custom-checkbox"
                            id={`task-${task.id}-${date}`}
                            type="checkbox"
                            checked={task.checked}
                            onChange={() =>
                                update(habitId, task.refId, stringDate)
                            }
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
