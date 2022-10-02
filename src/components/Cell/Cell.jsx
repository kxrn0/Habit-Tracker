import "./cell.css";

export default function Cell({
    mainContent,
    toolContent,
    state,
    id,
    currentActiveCell,
    activate_cell,
}) {
    return (
        <div className="cell-container">
            <p
                className={`main-content ${state}`}
                onClick={() => activate_cell(id)}
            >
                {mainContent}
            </p>
            <div
                className={`tooltip ${
                    id === currentActiveCell ? "active" : "inactive"
                }`}
            >
                <span className="tip"></span>
                <div className="content">{toolContent}</div>
            </div>
        </div>
    );
}
