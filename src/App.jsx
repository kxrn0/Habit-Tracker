import { dataZero, update_data } from "./data";

import Stick from "./components/Stick/Stick";

import Habit from "./components/Habit/Habit";
import { useState } from "react";
import "./css/style.css";
import "./css/custom_checkbox.css";


function App() {
    const [habit, setHabit] = useState(() =>
        JSON.parse(JSON.stringify(dataZero))
    );

    function update_habit(toId, date) {
        update_data(toId, date);
        setHabit((prevHabit) => {
            const index = prevHabit.todos.findIndex((todo) => todo.id === toId);
            const todo = prevHabit.todos[index];
            let dates;

            dates = [...prevHabit.todos[index].dates];

            if (dates.includes(date))
                dates = dates.filter((otherDate) => otherDate !== date);
            else dates.push(date);

            return {
                name: prevHabit.name,
                image: prevHabit.image,
                todos: prevHabit.todos
                    .slice(0, index)
                    .concat({ ...todo, dates: dates })
                    .concat(prevHabit.todos.slice(index + 1)),
            };
        });
    }

    return (
        <div className="App">
            <Habit data={habit} update={update_habit} />
            {/* <Stick habit={habit} update_habit={update_habit}/> */}
        </div>
    );
}

export default App;
