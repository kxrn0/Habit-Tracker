import "./content.css";

import Image from "../Image/Image";
import Difficulty from "../Difficulty/Difficulty";
import Tags from "../Tags/Tags";
import Todo from "../Todo/Todo";
import ten_print from "../../utilities/ten_print";
import valid_file_type from "../../utilities/valid_file_type";
import { serverTimestamp } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

export default function Content({ add_habit }) {
    const [tags, setTags] = useState([]);
    const [todos, setTodos] = useState([
        {
            name: null,
            id: nanoid(),
            range: { from: "free", to: "free" },
            dates: [],
            index: 0,
        },
    ]);
    const [src, setSrc] = useState(null);
    const [file, setFile] = useState(null);
    const [difficulty, setDifficulty] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const submitButtonRef = useRef(null);

    //#region

    function handle_file_input(event) {
        const file = event.target.files[0];

        if (valid_file_type(file)) {
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.addEventListener("load", (event) =>
                setSrc(event.target.result)
            );

            setFile(file);
            setSrc(URL.createObjectURL(file));
        }
    }

    function update_difficulty(event) {
        const id = event.target.id;
        let difficulty;

        if (id === "hard") difficulty = 2;
        else if (id === "medium") difficulty = 1;
        else difficulty = 0;

        setDifficulty(difficulty);
    }

    function update_name(event) {
        setName(event.target.value);
    }

    function update_description(event) {
        setDescription(event.target.value);
    }

    function add_tag(tag) {
        setTags((prevTags) => [...prevTags, tag]);
    }

    function remove_tag(tag) {
        setTags((prevTags) => prevTags.filter((other) => other !== tag));
    }

    function create_todo() {
        const todo = {
            name: `TODO ${todos.length}`,
            range: { from: "free", to: "free" },
            id: nanoid(),
            dates: [],
            index: todos.length,
        };

        setTodos((prevTodos) => [...prevTodos, todo]);
        setTimeout(() => submitButtonRef.current.scrollIntoView(), 33);
    }

    function delete_todo(id) {
        setTodos((prevTodos) =>
            prevTodos
                .filter((other) => other.id !== id)
                .map((todo, index) => ({ ...todo, index }))
        );
    }

    function change_todo_name(todoId, name) {
        const index = todos.findIndex((todo) => todo.id === todoId);
        const todo = todos[index];

        setTodos((prevTodos) =>
            prevTodos
                .slice(0, index)
                .concat({ ...todo, name: name })
                .concat(todos.slice(index + 1))
        );
    }

    function toggle_range(todoId, currentValue, side) {
        const index = todos.findIndex((todo) => todo.id === todoId);
        const todo = todos[index];
        const range = { ...todo.range };

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

        setTodos((prevTodos) =>
            prevTodos
                .slice(0, index)
                .concat({ ...todo, range })
                .concat(prevTodos.slice(index + 1))
        );
    }

    function change_date(todoId, side, date) {
        const index = todos.findIndex((todo) => todo.id === todoId);
        const todo = todos[index];
        const range = { ...todo.range };
        const otherSide = side === "from" ? "to" : "from";

        if (range[otherSide] !== "free") {
            const cond = side === "from" ? (a, b) => a <= b : (a, b) => a >= b;
            const dateValue = new Date(date);
            const otherValue = new Date(range[otherSide]).valueOf();

            if (cond(otherValue, dateValue)) date = range[otherSide];
        }

        range[side] = date;

        setTodos((prevTodos) =>
            prevTodos
                .slice(0, index)
                .concat({ ...todo, range })
                .concat(prevTodos.slice(index + 1))
        );
    }

    function create_new_habit(event) {
        event.preventDefault();

        add_habit(
            {
                name,
                description,
                id: nanoid(),
                difficulty,
                tags,
                timestamp: serverTimestamp()
            },
            file,
            todos
        );
    }

    async function create_image_file() {
        const file = await ten_print(500, 500);

        setFile(file);
        setSrc(() => {
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.addEventListener("load", (event) =>
                setSrc(event.target.result)
            );
        });
    }

    //#endregion

    useEffect(() => {
        create_image_file();
    }, []);

    return (
        <form onSubmit={create_new_habit} className="creation-content">
            <div className="head">
                <Image
                    src={src}
                    alt="image"
                    left={
                        <label
                            htmlFor="image-input"
                            className="image-label-input"
                        >
                            <input
                                type="file"
                                accept=".jpg, .jpeg, .png, .gif"
                                id="image-input"
                                onChange={handle_file_input}
                            />
                            <span className="icon"></span>
                        </label>
                    }
                    right={
                        <button
                            className="delete-image"
                            type="button"
                            onClick={create_image_file}
                        ></button>
                    }
                />
                <div className="details">
                    <label htmlFor="name-input">
                        <span>Name: </span>
                        <input
                            id="name-input"
                            required
                            type="text"
                            value={name}
                            onChange={update_name}
                        />
                    </label>
                    <label htmlFor="description-input">
                        <span>Description: </span>
                        <textarea
                            required
                            name="description-input"
                            id="description-input"
                            value={description}
                            onChange={update_description}
                        ></textarea>
                    </label>
                </div>
            </div>
            <div className="difficulty-wrapper">
                <p className="difficulty-label">Difficulty:</p>
                <Difficulty
                    difficulty={difficulty}
                    update={update_difficulty}
                />
            </div>
            <div className="tags-wrapper">
                <p className="tags-label">Tags:</p>
                <Tags tags={tags} add_tag={add_tag} remove_tag={remove_tag} />
            </div>
            <div className="todos-wrapper">
                <p className="title">TODO</p>
                <button
                    className="add-todo"
                    type="button"
                    onClick={create_todo}
                ></button>
                <div className="todos">
                    {todos.map(
                        (todo) =>
                            todo.name && (
                                <Todo
                                    key={todo.id}
                                    todo={todo}
                                    delete_todo={delete_todo}
                                    change_name={change_todo_name}
                                    toggle_range={toggle_range}
                                    change_date={change_date}
                                    onlyLocal={true}
                                />
                            )
                    )}
                </div>
            </div>
            <button
                ref={submitButtonRef}
                type="submit"
                className="button-of-creation"
            >
                Create
            </button>
        </form>
    );
}
