import "./stick.css";

import ToolContent from "../ToolContent/ToolContent";
import Cell from "../Cell/Cell";
import { useState, useEffect } from "react";
import start from "../../utilities/start";
import date_in_range from "../../utilities/date_in_range";

export default function Stick({ habit, update_habit }) {
    /**
     * What is displayed by the sticks?
     * There will be a row of checkboxes, the kind of behaviour will depend on what kind of
     * day the box represents, and what TODOs that day has. The stick displays the entire
     * current week, even days that still haven't passed, so the future days are locked, or
     * inactive.
     * If there are TODOs for the current day, the cell will pop up a modal with them, else
     * the cell will have a regular checkbox. I think that the stick should also keep track
     * of the current active cell, like the grid.
     * To begin creating the cells, I will need an array of days. The first will contain a
     * string representing the start of the current week. I think I may need to componentize
     * the tool content, so I'll be able to use the same component here and on the grid.
     *
     */

    /**
     * 1.- What is a stick?
     * A stick is an IU element that lets the user edit the habit for the days of the current week.
     *
     * 2.- There are three types of elements that can be used for changing the habit in a particular
     * day, what are those?
     * The elements can be a checkbox, for when the habit doesn't have TODOs for that particular day.
     * They can also be cells with a tooltip for displying TODOs for when the habit does have TODOs
     * for that particular day.
     * They can be a disabled checkbox, for days in the current week that haven't yet come to pass.
     *
     * So the days are stored in an array with seven elements. What kind of data do you need create
     * an input element in the stick?
     * I will, of course, sneed the date for that particular day. I also will need to know the TODOs
     * of that habit for that particular day, if any. And if the current date is in the future.
     * So, it seems that to create the array of days I will need to know the date of the first day of
     * the current day, and the current day. I should probably refactor the grid to use toDateString()
     * strings instead of what I have them use now.
     */

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
        const element = { date: null, stringDate };

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

            if (!cell) setActiveCell("");
        }

        document.addEventListener("click", close_cell);

        return () => document.removeEventListener("click", close_cell);
    });

    return (
        <div className="stick">
            <a className="link">
                <img
                    src={habit.image}
                    alt=""
                    style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                    }}
                />
                <p className="habit-name">{habit.name}</p>
            </a>
            <div className="days">
                <ul style={{ display: "flex", gap: "2rem" }}>
                    {days.map((day) => {
                        if (day.date) {
                            const todo = day.tasks[0];

                            if (todo.name === null) {
                                return (
                                    <input
                                        key={`stickbox-${day.stringDate}`}
                                        type="checkbox"
                                        checked={day.tasks[0].checked}
                                        onChange={() =>
                                            update_habit(
                                                todo.id,
                                                day.stringDate
                                            )
                                        }
                                    />
                                );
                            } else {
                                return (
                                    <Cell
                                        key={`stickbox-${day.stringDate}`}
                                        mainContent=""
                                        toolContent={
                                            <ToolContent
                                                cell={day}
                                                update_habit={update_habit}
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
                                <input
                                    key={`stickbox-${day.stringDate}`}
                                    type="checkbox"
                                    disabled
                                />
                            );
                    })}
                </ul>
            </div>
        </div>
    );
}
