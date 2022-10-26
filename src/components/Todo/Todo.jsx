import { useRef, useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./todo.css";

export default function Todo({
    todo,
    delete_todo,
    change_name,
    toggle_range,
    change_date,
    onlyLocal,
}) {
    const [name, setName] = useState(todo.name);
    const [changing, setChanging] = useState(false);
    const [id, _] = useState(() => (onlyLocal ? todo.id : todo.refId));
    const inputRef = useRef(null);

    function update_local_name(event) {
        setName(event.target.value);
    }

    function update_foreign_name() {
        const value = name.trim();

        if (value && value !== todo.name) {
            change_name(id, value);
            setName(value);
        } else setName(todo.name);
        setChanging(false);
    }

    function set_up_change() {
        setChanging(true);
        setTimeout(() => inputRef.current.focus(), 33);
    }

    function remove_todo() {
        delete_todo(id);
    }

    return (
        <div className="todo">
            <button
                className="delete-todo"
                type="button"
                onClick={remove_todo}
            ></button>
            <div className="todo-name">
                <p className="label">Name: </p>
                {changing ? (
                    <div className="container-of-change">
                        <input
                            type="text"
                            value={name}
                            onChange={update_local_name}
                            ref={inputRef}
                        />
                        <div className="controls-of-change">
                            <button
                                type="button"
                                className="save"
                                onClick={update_foreign_name}
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="cancel"
                                onClick={() => setChanging(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="name" onClick={set_up_change}>
                        {todo.name}
                    </p>
                )}
            </div>
            <div className="range">
                <div className="range-label">Range:</div>
                <div className="range-controls">
                    <div className="from section">
                        <p className="from-label">From</p>
                        <Toggle
                            checked={todo.range.from !== "free"}
                            change={() =>
                                toggle_range(
                                    id,
                                    todo.range.from !== "free",
                                    "from"
                                )
                            }
                            left="-∞"
                            right={
                                <input
                                    type="date"
                                    value={
                                        todo.range.from === "free"
                                            ? ""
                                            : todo.range.from
                                    }
                                    onChange={(event) =>
                                        change_date(
                                            id,
                                            "from",
                                            event.target.value
                                        )
                                    }
                                    disabled={todo.range.from === "free"}
                                />
                            }
                            changeOnLabelClick={false}
                        />
                    </div>
                    <div className="to section">
                        <p className="to-label">To</p>
                        <Toggle
                            checked={todo.range.to === "free"}
                            change={() =>
                                toggle_range(
                                    id,
                                    todo.range.to === "free",
                                    "to"
                                )
                            }
                            left={
                                <input
                                    type="date"
                                    value={
                                        todo.range.to === "free"
                                            ? ""
                                            : todo.range.to
                                    }
                                    onChange={(event) =>
                                        change_date(
                                            id,
                                            "to",
                                            event.target.value
                                        )
                                    }
                                    disabled={todo.range.to === "free"}
                                />
                            }
                            right="∞"
                            changeOnLabelClick={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
