import rarePepe from "./assets/rare_pepe.jpg";

export const dataZero = {
    name: "push up sets",
    id: "123abc",
    image: rarePepe,
    todos: [
        {
            name: null,
            id: "zero",
            range: { from: "free", to: "free" },
            dates: [
                "2022-08-05",
                "2022-08-06",
                "2022-08-15",
                "2022-08-20",
                "2022-08-24",
            ],
        },
        {
            name: "first set, 25 reps",
            id: "one",
            range: { from: "2022-08-25", to: "free" },
            dates: [
                "2022-08-25",
                "2022-08-26",
                "2022-08-27",
                "2022-08-28",
                "2022-08-29",
                "2022-09-03",
                "2022-09-04",
                "2022-09-06",
                "2022-09-07",
                "2022-09-08",
                "2022-09-09",
            ],
        },
        {
            name: "second set, 25 reps",
            id: "two",
            range: { from: "2022-08-25", to: "free" },
            dates: [
                "2022-08-25",
                "2022-08-26",
                "2022-08-27",
                "2022-08-28",
                "2022-08-29",
                "2022-09-03",
                "2022-09-04",
                "2022-09-06",
                "2022-09-07",
                "2022-09-08",
                "2022-09-09",
            ],
        },
        {
            name: "third set, 15 reps or more",
            id: "three",
            range: { from: "2022-09-03", to: "free" },
            dates: [
                "2022-09-03",
                "2022-09-04",
                "2022-09-06",
                "2022-09-07",
                //"2022-09-08",
                "2022-09-09",
            ],
        },
        {
            name: "fourth set, 15 reps or more",
            id: "four",
            range: { from: "2022-09-03", to: "free" },
            dates: [
                "2022-09-03",
                "2022-09-04",
                "2022-09-06",
                "2022-09-07",
                //"2022-09-08",
                "2022-09-09",
            ],
        },
    ],
};

export function update_data(id, date) {
    const index = dataZero.todos.findIndex((todo) => todo.id === id);
    const todo = dataZero.todos[index];

    if (todo.dates.includes(date))
        todo.dates = todo.dates.filter((current) => current !== date);
    else todo.dates = todo.dates.concat(date);
}
