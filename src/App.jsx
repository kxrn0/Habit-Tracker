import {
    habitsData,
    update_habits_data_difficulty,
    update_habit_by_id,
    remove_tag_from_habit,
    add_tag_from_habit,
    add_habit,
    change_image,
    change_name,
    change_description,
    delete_habit,
    change_range,
    relocate,
    add_todo,
    remove_todo,
    change_todo_name,
} from "./data";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Info from "./components/Info/Info";

import Habit from "./components/Habit/Habit";
import { useState } from "react";
import "./css/style.css";
import "./css/custom_checkbox.css";
import Homepage from "./components/Homepage/Homepage";
import Underlink from "./components/Underlink/Underlink";

import homeIcon from "./assets/home-circle.svg";
import infoIcon from "./assets/information.svg";
import date_in_range from "./utilities/date_in_range";

function App() {
    const [habits, setHabits] = useState(() =>
        JSON.parse(JSON.stringify(habitsData))
    );

    function add_new_habit(habit) {
        add_habit(habit);

        setHabits((prevHabits) => [...prevHabits, habit]);
    }

    function update(habitId, todoId, date) {
        update_habit_by_id(habitId, todoId, date);

        setHabits((prevHabits) => {
            const habitIndex = habits.findIndex(
                (habit) => habit.id === habitId
            );
            const habit = habits[habitIndex];
            const todoIndex = habit.todos.findIndex(
                (todo) => todo.id === todoId
            );
            const todo = habit.todos[todoIndex];
            let dates, newTodo, todos;

            dates = [...todo.dates];
            if (dates.includes(date))
                dates = dates.filter((other) => other !== date);
            else dates.push(date);

            newTodo = { ...todo, dates };
            todos = habit.todos
                .slice(0, todoIndex)
                .concat(newTodo)
                .concat(habit.todos.slice(todoIndex + 1));

            return prevHabits
                .slice(0, habitIndex)
                .concat({ ...habit, todos })
                .concat(prevHabits.slice(habitIndex + 1));
        });
    }

    function update_difficulty(habitId, difficulty) {
        update_habits_data_difficulty(habitId, difficulty);

        const index = habits.findIndex((habit) => habit.id === habitId);
        const habit = habits[index];

        setHabits((prevHabits) =>
            prevHabits
                .slice(0, index)
                .concat({ ...habit, difficulty })
                .concat(prevHabits.slice(index + 1))
        );
    }

    function remove_tag(habitId, tag) {
        remove_tag_from_habit(habitId, tag);

        const index = habits.findIndex((habit) => habit.id === habitId);
        const habit = habits[index];
        const tags = habit.tags.filter((other) => other !== tag);

        setHabits((prevHabits) =>
            prevHabits
                .slice(0, index)
                .concat({ ...habit, tags })
                .concat(prevHabits.slice(index + 1))
        );
    }

    function add_tag(habitId, tag) {
        add_tag_from_habit(habitId, tag);

        const index = habits.findIndex((habit) => habit.id === habitId);
        const habit = habits[index];
        const tags = [...habit.tags, tag];

        setHabits((prevHabits) =>
            prevHabits
                .slice(0, index)
                .concat({ ...habit, tags })
                .concat(prevHabits.slice(index + 1))
        );
    }

    function update_image(habitId, image) {
        change_image(habitId, image);

        const index = habits.findIndex((habit) => habit.id === habitId);
        const habit = habits[index];

        setHabits((prevHabits) =>
            prevHabits
                .slice(0, index)
                .concat({ ...habit, image })
                .concat(prevHabits.slice(index + 1))
        );
    }

    function update_name(habitId, name) {
        change_name(habitId, name);

        const index = habits.findIndex((habit) => habit.id === habit.id);
        const habit = habits[index];

        setHabits((prevHabits) =>
            prevHabits
                .slice(0, index)
                .concat({ ...habit, name })
                .concat(prevHabits.slice(index + 1))
        );
    }

    function update_description(habitId, description) {
        change_description(habitId, description);

        const index = habits.findIndex((habit) => habit.id === habitId);
        const habit = habits[index];

        setHabits((prevHabits) =>
            prevHabits
                .slice(0, index)
                .concat({ ...habit, description })
                .concat(prevHabits.slice(index + 1))
        );
    }

    function remove_habit(habitId) {
        delete_habit(habitId);

        setHabits((prevHabits) =>
            prevHabits.filter((habit) => habit.id !== habitId)
        );
    }

    function toggle_habit_range(habitId, todoId, range, toRelocateId) {
        change_range(habitId, todoId, range);

        const habitIndex = habits.findIndex((habit) => habit.id === habitId);
        const habit = habits[habitIndex];
        const todoIndex = habit.todos.findIndex((todo) => todo.id === todoId);
        const todo = habit.todos[todoIndex];
        const dates = todo.dates.filter((date) =>
            date_in_range(new Date(date), range)
        );
        const todos = habit.todos
            .slice(0, todoIndex)
            .concat({ ...todo, range, dates })
            .concat(habit.todos.slice(todoIndex + 1));
        let updatedHabits;

        updatedHabits = habits
            .slice(0, habitIndex)
            .concat({ ...habit, todos })
            .concat(habits.slice(habitIndex + 1));

        if (toRelocateId) {
            const result = relocated_data(updatedHabits, habit.id);

            updatedHabits = result.data;
            relocate(toRelocateId, result.todo);
        }

        setHabits(updatedHabits);
    }

    function relocated_data(data, habitId) {
        const index = data.findIndex((habit) => habit.id === habitId);
        const habit = data[index];
        const todo = {
            name: habit.name,
            id: Math.random().toString(16).slice(-10),
            range: { from: "free", to: "free" },
            dates: [...habit.todos[0].dates],
        };
        const todos = [...habit.todos.slice(1), todo];

        todos.unshift({ ...habit.todos[0], dates: [] });

        return {
            data: data
                .slice(0, index)
                .concat({ ...habit, todos })
                .concat(data.slice(index + 1)),
            todo: todo,
        };
    }

    function add_todo_to_habit(habitId, todo) {
        add_todo(habitId, todo);

        const index = habits.findIndex((habit) => habit.id === habitId);
        const habit = habits[index];

        setHabits((prevHabits) =>
            prevHabits
                .slice(0, index)
                .concat({ ...habit, todos: [...habit.todos, todo] })
                .concat(prevHabits.slice(index + 1))
        );
    }

    function delete_todo(habitId, todoId) {
        remove_todo(habitId, todoId);

        const index = habits.findIndex((habit) => habit.id === habitId);
        const habit = habits[index];
        const todos = habit.todos.filter((todo) => todo.id !== todoId);

        setHabits((prevHabits) =>
            prevHabits
                .slice(0, index)
                .concat({ ...habit, todos })
                .concat(prevHabits.slice(index + 1))
        );
    }

    function rename_todo(habitId, todoId, name) {
        change_todo_name(habitId, todoId, name);

        const index = habits.findIndex((habit) => habit.id === habitId);
        const habit = habits[index];
        const todoIndex = habit.todos.findIndex((todo) => todo.id === todoId);
        const todo = habit.todos[todoIndex];
        const todos = habit.todos
            .slice(0, todoIndex)
            .concat({ ...todo, name })
            .concat(habit.todos.slice(todoIndex + 1));

        setHabits((prevHabits) =>
            prevHabits
                .slice(0, index)
                .concat({ ...habit, todos })
                .concat(prevHabits.slice(index + 1))
        );
    }

    return (
        <div className="App">
            <BrowserRouter>
                <nav className="navbar">
                    <div className="logo">Kerosene</div>
                    <ul className="links">
                        <li>
                            <Underlink path="/Habit-Tracker" icon={homeIcon} />
                        </li>
                        <li>
                            <Underlink
                                path="/Habit-Tracker/info"
                                icon={infoIcon}
                            />
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        element={
                            <Homepage
                                habits={habits}
                                update={update}
                                add_habit={add_new_habit}
                            />
                        }
                        path="/Habit-Tracker"
                    />
                    <Route element={<Info />} path="/Habit-Tracker/info" />
                    {habits.map((habit) => (
                        <Route
                            key={habit.id}
                            path={`/Habit-Tracker/habits/${habit.id}`}
                            element={
                                <Habit
                                    habit={habit}
                                    update_cell={update}
                                    update_difficulty={update_difficulty}
                                    remove_tag={remove_tag}
                                    add_tag={add_tag}
                                    change_image={update_image}
                                    change_name={update_name}
                                    change_description={update_description}
                                    remove_habit={remove_habit}
                                    toggle_habit_range={toggle_habit_range}
                                    add_todo_to_habit={add_todo_to_habit}
                                    delete_todo={delete_todo}
                                    rename_todo={rename_todo}
                                />
                            }
                        />
                    ))}
                    <Route path="*" element={<p>Not found</p>} />
                </Routes>
                <footer className="footer">
                    A project by{" "}
                    <a href="https://ol.reddit.com/u/_by_me" target="_blank">
                        u/_by_me
                    </a>
                    , &copy; 2022
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
