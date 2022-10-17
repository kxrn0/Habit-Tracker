import rarePepe from "./assets/rare_pepe.jpg";
import kot from "./assets/kot.gif";
import science from "./assets/science.png";
import k from "./assets/k.png";
import date_in_range from "./utilities/date_in_range";

export let habitsData = [
    {
        name: "0 push up sets, this is a string",
        description:
            "After spending everyday hard at work fighting for america, getting fucked by all the other countries leaders, as well as politicians here at home, each night is just finally able to fall asleep while expelling a low continuous queef letting out the hot air that has built up in, the tropical breeze that accumulated in her nethers as she's in and out of meetings on and off the phone shouting `that's not good enough that's not good enough that's not good`",
        id: "123",
        difficulty: 0,
        tags: ["one", "three", "four", "two", "five", "six", "seven", "eight"],
        image: rarePepe,
        todos: [
            {
                name: null,
                id: "0_zero",
                range: { from: "free", to: "free" },
                dates: [
                    "2022-08-05",
                    "2022-08-06",
                    "2022-08-15",
                    "2022-08-20",
                    "2022-08-24",
                ],
            },
        ],
    },
    {
        name: "1 push up sets, this is a string",
        description: "Sets of push ups, what else is there to say?",
        id: "456",
        difficulty: 2,
        tags: ["one", "four"],
        image: kot,
        todos: [
            {
                name: null,
                id: "0_zero",
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
                id: "1_one",
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
                id: "1_two",
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
        ],
    },
    {
        name: "2 read a book for at least 20 minutes",
        description: "I want to get into the habit of reading more.",
        id: "789",
        difficulty: 1,
        tags: ["three", "four", "five", "six", "seven", "eight"],
        image: science,
        todos: [
            {
                name: null,
                id: "0_zero",
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
                id: "2_one",
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
                id: "2_two",
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
                id: "2_three",
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
                name: "fourth set, 15 reps or more, preferably many more, this is a string",
                id: "2_four",
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
    },
    {
        name: "3 push up sets, this is a string",
        description:
            "Find a way to stuff it all in one basket so that at the end we may all come and find it.",
        id: "101112",
        difficulty: 0,
        tags: ["church", "exercise", "school", "cooking"],
        image: k,
        todos: [
            {
                name: null,
                id: "0_zero",
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
                name: "third set, 15 reps or more",
                id: "3_three",
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
                id: "3_four",
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
    },
];

export function update_habit_by_id(habitId, todoId, date) {
    const habit = habitsData.find((habit) => habit.id === habitId);
    const todoIndex = habit.todos.findIndex((todo) => todo.id === todoId);
    const todo = habit.todos[todoIndex];

    if (todo.dates.includes(date))
        todo.dates = todo.dates.filter((other) => other !== date);
    else todo.dates = todo.dates.concat(date);
}

export function update_habits_data_difficulty(habitId, difficulty) {
    const habit = habitsData.find((habit) => habit.id === habitId);

    habit.difficulty = difficulty;
}

export function remove_tag_from_habit(habitId, tag) {
    const habit = habitsData.find((habit) => habit.id === habitId);

    habit.tags = habit.tags.filter((other) => other !== tag);
}

export function add_tag_from_habit(habitId, tag) {
    const habit = habitsData.find((habit) => habit.id === habitId);

    habit.tags.push(tag);
}

export function add_habit(habit) {
    habitsData.push(habit);
}

export function change_image(habitId, image) {
    const habit = habitsData.find((habit) => habit.id === habitId);

    habit.image = image;
}

export function change_name(habitId, name) {
    const habit = habitsData.find((habit) => habit.id === habitId);

    habit.name = name;
}

export function change_description(habitId, description) {
    const habit = habitsData.find((habit) => habit.id === habitId);

    habit.description = description;
}

export function delete_habit(habitId) {
    habitsData = habitsData.filter((habit) => habit.id !== habitId);
}

export function change_range(habitId, todoId, range) {
    const habit = habitsData.find((habit) => habit.id === habitId);
    const todo = habit.todos.find((todo) => todo.id === todoId);

    todo.range = range;
    todo.dates = todo.dates.filter((date) =>
        date_in_range(new Date(date), range)
    );
}

export function relocate(habitId, todo) {
    const habit = habitsData.find((habit) => habit.id === habitId);

    habit.todos[0].dates = [];
    habit.todos.push(todo);
}

export function add_todo(habitId, todo) {
    const habit = habitsData.find((habit) => habit.id === habitId);

    habit.todos.push(todo);
}

export function remove_todo(habitId, todoId) {
    const habit = habitsData.find((habit) => habit.id === habitId);

    habit.todos = habit.todos.filter((todo) => todo.id !== todoId);
}

export function change_todo_name(habitId, todoId, name) {
    const habit = habitsData.find((habit) => habit.id === habitId);
    const todo = habit.todos.find((todo) => todo.id === todoId);

    todo.name = name;
}
