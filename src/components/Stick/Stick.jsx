import "./stick.css";

import ToolContent from "../ToolContent/ToolContent";
import Cell from "../Cell/Cell";
import { useState, useEffect } from "react";
import start from "../../utilities/start";
import date_in_range from "../../utilities/date_in_range";
import { Link } from "react-router-dom";

export default function Stick({ habit, update }) {
    const [activeCell, setActiveCell] = useState("");
    const millisInDay = 3600 * 24 * 1000;
    const days = [];
    const presentDay = new Date();
    const presentTime = start(presentDay);
    let currentDate;

    currentDate = presentTime;

    for (let i = 0; i < 7; i++) {
        const stringDate = `${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
        ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
        const element = { date: null, stringDate, day: currentDate.getDate() };

        if (currentDate <= presentDay) {
            element.date = currentDate.toDateString();
            element.tasks = [];

            for (let todo of habit.todos) {
                let toAdd;

                toAdd = true;

                if (
                    todo.name === null &&
                    habit.todos.some((otherTodo) => {
                        if (
                            otherTodo.name !== null &&
                            date_in_range(currentDate, otherTodo.range)
                        )
                            return true;
                        return false;
                    })
                )
                    toAdd = false;

                if (toAdd) {
                    if (date_in_range(currentDate, todo.range))
                        element.tasks.push({
                            id: todo.id,
                            checked: todo.dates.includes(stringDate),
                            name: todo.name,
                        });
                }
            }
            if (element.tasks.every((task) => task.checked))
                element.state = "blue";
            else if (element.tasks.some((task) => task.checked))
                element.state = "pink";
            else element.state = "black";
        }
        currentDate = new Date(currentDate.valueOf() + millisInDay);
        days.push(element);
    }

    function activate_cell(id) {
        if (activeCell === id) setActiveCell("");
        else setActiveCell(id);
    }

    useEffect(() => {
        function close_cell(event) {
            if (event.target.closest(".tooltip")) {
                return;
            }

            const cell = event.target.closest(".cell-container");
            const stick = event.target.closest(".stick");

            if (!cell || (stick && stick.id !== `stick-id-${habit.id}`))
                setActiveCell("");
        }

        document.addEventListener("click", close_cell);

        return () => document.removeEventListener("click", close_cell);
    });

    return (
        <div className="stick" id={`stick-id-${habit.id}`}>
            <Link
                to={`/habits/${habit.id}`}
                className="link"
                href="https://ol.reddit.com"
            >
                <img src={habit.image} alt="habit image" />
                <p className="habit-name">{habit.name}</p>
            </Link>
            <div className="days">
                <ul className="days-list">
                    {days.map((day) => {
                        if (day.date) {
                            const todo = day.tasks[0];

                            if (todo.name === null) {
                                return (
                                    <li
                                        className="day"
                                        key={`stickbox-${day.stringDate}`}
                                    >
                                        <input
                                            className="custom-checkbox plain-checkbox"
                                            type="checkbox"
                                            checked={day.tasks[0].checked}
                                            onChange={() =>
                                                update(
                                                    habit.id,
                                                    todo.id,
                                                    day.stringDate
                                                )
                                            }
                                        />
                                        <span>{day.day}</span>
                                    </li>
                                );
                            } else {
                                return (
                                    <Cell
                                        key={`stickbox-${day.stringDate}`}
                                        mainContent={day.day}
                                        toolContent={
                                            <ToolContent
                                                habitId={habit.id}
                                                cell={day}
                                                update={update}
                                            />
                                        }
                                        state={day.state}
                                        id={day.stringDate}
                                        currentActiveCell={activeCell}
                                        activate_cell={activate_cell}
                                    />
                                );
                            }
                        } else
                            return (
                                <li
                                    className="day"
                                    key={`stickbox-${day.stringDate}`}
                                >
                                    <input type="checkbox" disabled />
                                </li>
                            );
                    })}
                </ul>
            </div>
            <div className="difficulty">
                <span
                    className={`hard ${habit.difficulty === 2 ? "active" : ""}`}
                ></span>
                <span
                    className={`medium ${
                        habit.difficulty >= 1 ? "active" : ""
                    }`}
                ></span>
                <span className="easy active"></span>
            </div>
        </div>
    );
}
