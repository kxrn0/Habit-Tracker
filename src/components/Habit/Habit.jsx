import Grid from "../Grid/Grid";
import Image from "../Image/Image";
import Difficulty from "../Difficulty/Difficulty";
import Tags from "../Tags/Tags";
import Todo from "../Todo/Todo";
import SlideScreen from "../SlideScreen/SlideScreen";
import valid_file_type from "../../utilities/valid_file_type";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import date_in_range from "../../utilities/date_in_range";
import "./habit.css";

export default function Habit({
    habit,
    update_cell,
    update_detail,
    change_image,
    remove_habit,
    toggle_habit_range,
    add_todo_to_habit,
    delete_todo,
    rename_todo,
}) {
    const [imageOnDisplay, setImageOnDisplay] = useState(false);
    const [isNameChanging, setIsNameChanging] = useState(false);
    const [localName, setLocalName] = useState(habit.name);
    const nameInputRef = useRef(null);
    const [isDescribing, setIsDescribing] = useState(false);
    const [localDescription, setLocalDescription] = useState(habit.description);
    const descriptionRef = useRef(null);
    const [isAboutToDelete, setIsAboutToDelete] = useState(false);

    function update_habit_difficulty(event) {
        const id = event.target.id;
        let difficulty;

        if (id === "hard") difficulty = 2;
        else if (id === "medium") difficulty = 1;
        else difficulty = 0;

        update_detail(habit.refId, { label: "difficulty", value: difficulty });
    }

    function add_new_tag(tag) {
        if (!habit.tags.includes(tag))
            update_detail(habit.refId, {
                label: "tags",
                value: [...habit.tags, tag],
            });
    }

    function remove_old_tag(tag) {
        update_detail(habit.refId, {
            label: "tags",
            value: habit.tags.filter((other) => other !== tag),
        });
    }

    function close_image() {
        setImageOnDisplay(false);
    }

    function handle_image_input(event) {
        const file = event.target.files[0];

        if (valid_file_type(file)) change_image(habit, file);
    }

    function update_local_name(event) {
        setLocalName(event.target.value);
    }

    function update_name() {
        const value = localName.trim();

        if (value && value !== habit.name) {
            update_detail(habit.refId, { label: "name", value });
            setLocalName(value);
        } else setLocalName(habit.name);
        setIsNameChanging(false);
    }

    function set_up_name_change() {
        setIsNameChanging(true);
        setTimeout(() => nameInputRef.current.focus(), 33);
    }

    function update_local_description(event) {
        setLocalDescription(event.target.value);
    }

    function set_up_description_change() {
        setIsDescribing(true);
        setTimeout(() => descriptionRef.current.focus(), 33);
    }

    function update_description() {
        const value = localDescription.trim();

        if (value && value !== habit.description) {
            update_detail(habit.refId, {
                label: "description",
                value,
            });
            setLocalDescription(value);
        } else setLocalDescription(habit.description);
        setIsDescribing(false);
    }

    function close_delete_screen() {
        setIsAboutToDelete(false);
    }

    function delete_habit() {
        remove_habit(habit.id);
    }

    function toggle_range(todoId, currentValue, side) {
        const { todos } = habit;
        const index = todos.findIndex((todo) => todo.id === todoId);
        const todo = todos[index];
        const range = { ...todo.range };
        let toRelocateId;

        toRelocateId = null;

        if (side === "to") currentValue = !currentValue;

        if (!currentValue) {
            const today = new Date();
            const todaysValue = today.valueOf();
            const millisInDay = 24 * 1000 * 3600;
            const otherSide = side === "from" ? "to" : "from";
            const otherValue = new Date(
                new Date(range[otherSide]).valueOf() + millisInDay
            ).valueOf();
            const cond = side === "from" ? (a, b) => a >= b : (a, b) => a <= b;
            let final;

            if (cond(todaysValue, otherValue)) final = range[otherSide];
            else
                final = `${today.getFullYear()}-${
                    today.getMonth() + 1
                }-${today.getDate()}`;

            range[side] = final;
        } else {
            range[side] = "free";
        }

        if (check_for_boundaries(range)) toRelocateId = habit.id;

        toggle_habit_range(habit.id, todo.id, range, toRelocateId);
    }

    function change_date(todoId, side, date) {
        const { todos } = habit;
        const index = todos.findIndex((todo) => todo.id === todoId);
        const todo = todos[index];
        const range = { ...todo.range };
        const otherSide = side === "from" ? "to" : "from";
        let toRelocateId;

        toRelocateId = null;

        if (range[otherSide] !== "free") {
            const cond = side === "from" ? (a, b) => a <= b : (a, b) => a >= b;
            const dateValue = new Date(date);
            const otherValue = new Date(range[otherSide]).valueOf();

            if (cond(otherValue, dateValue)) date = range[otherSide];
        }

        range[side] = date;

        if (check_for_boundaries(range)) toRelocateId = habit.id;

        toggle_habit_range(habit.id, todo.id, range, toRelocateId);
    }

    function check_for_boundaries(range) {
        const namelessOne = habit.todos[0];

        if (
            namelessOne.dates.some((date) =>
                date_in_range(new Date(date), range)
            )
        )
            return true;
        return false;
    }

    function add_todo() {
        const today = new Date();
        const string = `${today.getFullYear()}-${String(
            today.getMonth() + 1
        ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
        const todo = {
            name: `TODO ${habit.todos.length}`,
            range: { from: string, to: "free" },
            id: Math.random().toString(16).slice(-10),
            dates: [],
        };

        add_todo_to_habit(habit.id, todo);
    }

    function delete_given_todo(todoId) {
        delete_todo(habit.id, todoId);
    }

    function change_todo_name(todoId, name) {
        rename_todo(habit.id, todoId, name);
    }

    return (
        <div className="habit">
            <SlideScreen
                content={
                    <div className="delete-message">
                        <p>Do you really wish to delete</p>
                        <p className="element-name">{habit.name}</p>
                        <div className="delete-controls">
                            <button className="delete" onClick={delete_habit}>
                                <Link to="/Habit-Tracker">Delete</Link>
                            </button>
                            <button
                                className="cancel"
                                onClick={close_delete_screen}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                }
                shown={isAboutToDelete}
                close={close_delete_screen}
            />
            <button
                className="delete-habit"
                onClick={() => setIsAboutToDelete(true)}
            ></button>
            <SlideScreen
                content={
                    <img
                        src={habit.image}
                        className="image-on-display"
                        alt="habit image"
                    />
                }
                shown={imageOnDisplay}
                close={close_image}
            />
            <div className="info">
                <Image
                    src={habit.image}
                    alt={habit.name}
                    left={
                        <label
                            htmlFor="image-input"
                            className="image-label-input"
                        >
                            <input
                                type="file"
                                id="image-input"
                                onChange={handle_image_input}
                            />
                            <span className="icon"></span>
                        </label>
                    }
                    right={
                        <button
                            className="expand"
                            onClick={() => setImageOnDisplay(true)}
                        ></button>
                    }
                />
                <div className="name-and-description">
                    <div className="name-wrapper">
                        {isNameChanging ? (
                            <div className="name-change">
                                <input
                                    type="text"
                                    value={localName}
                                    onChange={update_local_name}
                                    ref={nameInputRef}
                                />
                                <button
                                    className="button-of-change"
                                    onClick={update_name}
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <p className="name" onClick={set_up_name_change}>
                                {habit.name}
                            </p>
                        )}
                    </div>
                    <div className="description-wrapper">
                        {isDescribing ? (
                            <div className="description-chan">
                                <textarea
                                    value={localDescription}
                                    onChange={update_local_description}
                                    ref={descriptionRef}
                                />
                                <button
                                    className="button-of-change"
                                    onClick={update_description}
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <p
                                className="description"
                                onClick={set_up_description_change}
                            >
                                {habit.description}
                            </p>
                        )}
                    </div>
                </div>
                <div className="settings">
                    <Difficulty
                        difficulty={habit.difficulty}
                        update={update_habit_difficulty}
                    />
                    <Tags
                        add_tag={add_new_tag}
                        tags={habit.tags}
                        remove_tag={remove_old_tag}
                    />
                </div>
            </div>
            <Grid habit={habit} update={update_cell} />
            <div className="todos">
                <p className="title">TODO</p>
                <button className="add-todo" onClick={add_todo}></button>
                <div className="todo-list">
                    {habit.todos.map((todo) => {
                        if (!todo.name) return null;
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                toggle_range={toggle_range}
                                change_date={change_date}
                                delete_todo={delete_given_todo}
                                change_name={change_todo_name}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
