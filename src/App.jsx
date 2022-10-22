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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Info/Info";
import Habit from "./components/Habit/Habit";
import { useEffect, useState } from "react";
import "./css/style.css";
import "./css/custom_checkbox.css";
import Homepage from "./components/Homepage/Homepage";
import Underlink from "./components/Underlink/Underlink";
import homeIcon from "./assets/home-circle.svg";
import infoIcon from "./assets/information.svg";
import logOutIcon from "./assets/logout.svg";
import date_in_range from "./utilities/date_in_range";

import firebaseConfig from "./firebase_config";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    updateDoc,
    doc,
    serverTimestamp,
    getDoc,
    deleteDoc,
    where,
    getDocs,
} from "firebase/firestore";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [habits, setHabits] = useState([]);

    async function sign_in() {
        const provider = new GoogleAuthProvider();

        await signInWithPopup(getAuth(), provider);
    }

    function sign_out() {
        signOut(getAuth());
    }

    async function create_habit(habit, file, todos) {
        try {
            let byme = "https://www.google.com/images/spin-32.gif";

            habit.image = byme;

            const userId = getAuth().currentUser.uid;
            const habitRef = await addDoc(
                collection(getFirestore(), `users/${userId}/habits`),
                habit
            );

            const todosCollRef = collection(habitRef, "todos");

            const filePath = `users/${userId}/${file.name}`;
            const habitImageRef = ref(getStorage(), filePath);
            const fileSnapshot = await uploadBytesResumable(
                habitImageRef,
                file
            );
            const imageURL = await getDownloadURL(habitImageRef);
            const storageURI = fileSnapshot.metadata.fullPath;

            await addDoc(todosCollRef, { todos });

            await updateDoc(habitRef, {
                image: imageURL,
                storageURI,
                refId: habitRef.id,
            });
        } catch (wrror) {
            console.log(`ERROR : ${wrror}`);
        }
    }

    async function switch_image(habit, image) {
        try {
            const userId = getAuth().currentUser.uid;
            const imageRef = ref(getStorage(), habit.storageURI);
            const docRef = doc(
                getFirestore(),
                `users/${userId}/habits`,
                habit.refId
            );
            const filePath = `users/${userId}/${habit.refId}/${image.name}`;
            const habitImageRef = ref(getStorage(), filePath);
            let fileSnapshot, imageURL, storageURI;

            updateDoc(docRef, {
                image: "https://www.google.com/images/spin-32.gif",
            });
            fileSnapshot = await uploadBytesResumable(habitImageRef, image);
            imageURL = await getDownloadURL(habitImageRef);
            storageURI = fileSnapshot.metadata.fullPath;

            await updateDoc(docRef, { image: imageURL, storageURI });
            await deleteObject(imageRef);
        } catch (wrror) {
            console.log(`ERROR WHILE ATTEMPMTING TO REPLACE IMAGE: ${wrror}`);
        }
    }

    async function update_detail(habitId, detail) {
        try {
            const userId = getAuth().currentUser.uid;
            const docRef = doc(
                getFirestore(),
                `users/${userId}/habits`,
                habitId
            );

            await updateDoc(docRef, { [detail.label]: detail.value });
        } catch (wrror) {
            console.log(`ERROR UPDATING DETAIL: ${wrror}`);
        }
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
            const result = relocate_data(updatedHabits, habit.id);

            updatedHabits = result.data;
            relocate(toRelocateId, result.todo);
        }

        setHabits(updatedHabits);
    }

    function relocate_data(data, habitId) {
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
        const index = habits.findIndex((habit) => habit.id === habitId);
        const habit = habits[index];
        const today = new Date();
        const todaysString = `${today.getFullYear()}-${String(
            today.getMonth() + 1
        ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
        const namelessDates = habit.todos[0].dates.filter(
            (date) => date != todaysString
        );
        const todos = [
            { ...habit.todos[0], dates: namelessDates },
            ...habit.todos.slice(1),
            todo,
        ];

        setHabits((prevHabits) =>
            prevHabits
                .slice(0, index)
                .concat({ ...habit, todos })
                .concat(prevHabits.slice(index + 1))
        );
        add_todo(habitId, todo);
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

    function load_habits() {
        const userId = getAuth().currentUser.uid;
        const habitsQuery = query(
            collection(getFirestore(), `users/${userId}/habits`),
            orderBy("timestamp", "asc")
        );

        onSnapshot(habitsQuery, (snapshot) =>
            snapshot.docChanges().forEach(async (change) => {
                if (change.type === "removed")
                    setHabits((prevHabits) =>
                        prevHabits.filter((habit) => habit.id !== change.doc.id)
                    );
                else {
                    const habit = change.doc.data();

                    const todosQuery = query(
                        collection(
                            getFirestore(),
                            `users/${userId}/habits/${habit.refId}/todos`
                        ),
                        orderBy("timestamp", "asc")
                    );
                    const todosQuerySnapshot = await getDocs(todosQuery);
                    todosQuerySnapshot.forEach((todoShot) =>
                        console.log(todoShot.data())
                    );

                    console.log(todosQuerySnapshot);

                    console.log(`hi ${Math.random()}`);

                    setHabits((prevHabits) => {
                        const index = prevHabits.findIndex(
                            (other) => other.id === habit.id
                        );

                        if (!~index) return [...prevHabits, habit];
                        else
                            return prevHabits
                                .slice(0, index)
                                .concat(habit)
                                .concat(prevHabits.slice(index + 1));
                    });
                }
            })
        );
    }

    useEffect(() => {
        initializeApp(firebaseConfig);
    }, []);

    useEffect(() => {
        onAuthStateChanged(getAuth(), () => {
            setIsLoggedIn(() => !!getAuth().currentUser);
            if (getAuth().currentUser) load_habits();
        });
    }, []);

    return (
        <div className="App">
            <button onClick={() => console.log(habits)}>Jinbocho</button>
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
                        {isLoggedIn ? (
                            <li>
                                <button
                                    className="log-out-button"
                                    onClick={sign_out}
                                ></button>
                            </li>
                        ) : null}
                    </ul>
                </nav>
                {isLoggedIn ? (
                    <Routes>
                        <Route
                            element={
                                <Homepage
                                    habits={habits}
                                    update={update}
                                    add_habit={create_habit}
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
                                        update_detail={update_detail}
                                        change_image={switch_image}
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
                ) : (
                    <div className="sign-in-content">
                        <button onClick={sign_in}>Log In</button>
                    </div>
                )}
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
