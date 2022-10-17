import "./toggle.css";

export default function Toggle({
    checked,
    change,
    left,
    right,
    changeOnLabelClick,
}) {
    function update(event) {
        change(event.target.checked);
    }

    function handle_label_click(value) {
        if (changeOnLabelClick) change(value);
    }

    return (
        <div className="logic-toggle">
            <span onClick={() => handle_label_click(false)}>{left}</span>
            <span className="track">
                <input type="checkbox" checked={checked} onChange={update} />
                <span className="ball"></span>
            </span>
            <span onClick={() => handle_label_click(true)}>{right}</span>
        </div>
    );
}
