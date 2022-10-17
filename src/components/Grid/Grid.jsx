import "./grid.css";

import compute_dates from "../../utilities/days_ago";
import date_in_range from "../../utilities/date_in_range";
import present_day from "../../utilities/present";

import Cell from "../Cell/Cell";
import ToolContent from "../ToolContent/ToolContent";
import { useEffect, useState } from "react";

export default function Grid({ update, habit }) {
    const [weeks, setWeeks] = useState(20);
    const [offset, setOffset] = useState(0);
    const [activeCell, setActiveCell] = useState("");
    let cells;

    function set_up(weeks, offset) {
        const millisInDay = 3600 * 24 * 1000;
        const daysInWeek = 7;
        const today = present_day(offset, weeks);
        const days =
            (weeks + (offset !== 0)) * daysInWeek +
            today.getDay() * (offset === 0);
        const startDate = compute_dates(today, days);
        const cells = [];
        let currentDate;

        currentDate = startDate;

        for (let i = 0; i < days; i++) {
            const stringDate = `${currentDate.getFullYear()}-${String(
                currentDate.getMonth() + 1
            ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(
                2,
                "0"
            )}`;
            const cell = {
                stringDate,
                date: currentDate.toDateString(),
                number: currentDate.getDate(),
            };

            cell.tasks = [];

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
                        cell.tasks.push({
                            id: todo.id,
                            checked: todo.dates.includes(stringDate),
                            name: todo.name,
                        });
                }
            }

            if (cell.tasks.every((task) => task.checked)) cell.state = "blue";
            else if (cell.tasks.some((task) => task.checked))
                cell.state = "pink";
            else cell.state = "black";
            cells.push(cell);
            currentDate = new Date(currentDate.valueOf() + millisInDay);
        }
        return cells;
    }

    function activate_cell(id) {
        if (activeCell === id) setActiveCell("");
        else setActiveCell(id);
    }

    cells = set_up(weeks, offset);

    useEffect(() => {
        function measure_weeks() {
            if (window.innerWidth < 600) setWeeks(8);
            else setWeeks(20);
        }

        measure_weeks();

        window.addEventListener("resize", measure_weeks);

        return () => window.removeEventListener("resize", measure_weeks);
    }, []);

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
        <div className="grid">
            <div className="days">
                <div className="names">
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
                </div>
                <div className="cells">
                    <div className="cells-container">
                        {cells.map((cell) => {
                            return (
                                <Cell
                                    key={cell.date}
                                    mainContent={cell.number}
                                    toolContent={
                                        <ToolContent
                                            habitId={habit.id}
                                            cell={cell}
                                            update={update}
                                        />
                                    }
                                    state={cell.state}
                                    id={cell.stringDate}
                                    currentActiveCell={activeCell}
                                    activate_cell={activate_cell}
                                />
                            );
                        })}
                    </div>
                    <div className="navigation">
                        <button
                            className="left"
                            onClick={() => setOffset((prevOff) => prevOff + 1)}
                        ></button>
                        <button
                            className={`right ${offset ? "" : "disabled"}`}
                            onClick={() => {
                                if (offset > 0)
                                    setOffset((prevOff) => prevOff - 1);
                            }}
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
