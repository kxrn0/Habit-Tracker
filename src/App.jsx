import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Info/Info";
import Habit from "./components/Habit/Habit";
import { useEffect, useState } from "react";
import Homepage from "./components/Homepage/Homepage";
import Underlink from "./components/Underlink/Underlink";
import homeIcon from "./assets/home-circle.svg";
import infoIcon from "./assets/information.svg";
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
    getDoc,
    deleteDoc,
} from "firebase/firestore";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import { nanoid } from "nanoid";
import "./css/style.css";
import "./css/custom_checkbox.css";
import load_todos from "./utilities/load_todos";
import SlideScreen from "./components/SlideScreen/SlideScreen";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [habits, setHabits] = useState([]);
    const [isInAStateOfHorror, setIsInAStateOfHorror] = useState(false);

    async function sign_in() {
        try {
            const provider = new GoogleAuthProvider();

            await signInWithPopup(getAuth(), provider);
        } catch (wrror) {
            console.log(`ERROR, COULDN'T SIGN IN: ${wrror}`);
            setIsInAStateOfHorror(true);
        }
    }

    function sign_out() {
        signOut(getAuth());
    }

    async function create_habit(habit, file, todos) {
        try {
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

            for (let i = 0; i < todos.length; i++) {
                const todoRef = await addDoc(todosCollRef, todos[i]);

                await updateDoc(todoRef, { refId: todoRef.id });
            }

            await updateDoc(habitRef, {
                image: imageURL,
                storageURI,
                refId: habitRef.id,
            });
        } catch (wrror) {
            console.log(`ERROR CREATING HABIT: ${wrror}`);
            setIsInAStateOfHorror(true);
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
                image: null,
            });
            fileSnapshot = await uploadBytesResumable(habitImageRef, image);
            imageURL = await getDownloadURL(habitImageRef);
            storageURI = fileSnapshot.metadata.fullPath;

            await updateDoc(docRef, { image: imageURL, storageURI });
            await deleteObject(imageRef);
        } catch (wrror) {
            console.log(`ERROR WHILE ATTEMPMTING TO REPLACE IMAGE: ${wrror}`);
            setIsInAStateOfHorror(true);
        }
    }

    async function update_detail(habitId, detail) {
        try {
            const userId = getAuth().currentUser.uid;
            const docRef = doc(
                getFirestore(),
                `users/${userId}/habits/${habitId}`
            );

            await updateDoc(docRef, { [detail.label]: detail.value });
        } catch (wrror) {
            console.log(`ERROR UPDATING DETAIL: ${wrror}`);
            setIsInAStateOfHorror(true);
        }
    }

    function compute_check(prevHabits, habitId, todoId, date) {
        const habitIndex = habits.findIndex((habit) => habit.refId === habitId);
        const habit = habits[habitIndex];
        const todoIndex = habit.todos.findIndex(
            (todo) => todo.refId === todoId
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
    }

    async function check_habit(habitId, todoId, date) {
        try {
            const userId = getAuth().currentUser.uid;
            const docRef = doc(
                getFirestore(),
                `users/${userId}/habits/${habitId}/todos/${todoId}`
            );
            const docSnap = await getDoc(docRef);
            let dates;

            setHabits((prevHabits) =>
                compute_check(prevHabits, habitId, todoId, date)
            );

            dates = docSnap.data().dates;
            if (dates.includes(date))
                dates = dates.filter((other) => other !== date);
            else dates.push(date);

            await updateDoc(docRef, { dates });
        } catch (wrror) {
            console.log(wrror);
            setIsInAStateOfHorror(true);
        }
    }

    async function delete_habit(habitId) {
        try {
            const userId = getAuth().currentUser.uid;
            const docRef = doc(
                getFirestore(),
                `users/${userId}/habits/${habitId}`
            );
            const habit = habits.find((habit) => habit.refId === habitId);
            const todoIds = habit.todos.map((todo) => todo.refId);
            const imageRef = ref(getStorage(), habit.storageURI);

            await deleteObject(imageRef);

            for (let id of todoIds) {
                const ref = doc(
                    getFirestore(),
                    `user/${userId}/habits/${habitId}/todos/${id}`
                );

                await deleteDoc(ref);
            }

            await deleteDoc(docRef);

            window.location.href = "/";
        } catch (wrror) {
            console.log(`ERROR, COULDN'T DELETE HABIT : ${wrror}`);
            setIsInAStateOfHorror(true);
        }
    }

    async function toggle_habit_range(habitId, todoId, range, toRelocate) {
        try {
            const userId = getAuth().currentUser.uid;
            const todoRef = doc(
                getFirestore(),
                `users/${userId}/habits/${habitId}/todos/${todoId}`
            );
            const habitIndex = habits.findIndex(
                (habit) => habit.refId === habitId
            );
            const habit = habits[habitIndex];
            const todoIndex = habit.todos.findIndex(
                (todo) => todo.refId === todoId
            );
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

            await updateDoc(todoRef, { range, dates });

            setHabits(updatedHabits);

            if (toRelocate) {
                const result = relocate_data(updatedHabits, habit.refId);
                const namelessRef = doc(
                    getFirestore(),
                    `users/${userId}/habits/${habitId}/todos/${habit.todos[0].refId}`
                );
                const namedOne = {
                    name: habit.name,
                    id: nanoid(),
                    range: { from: "free", to: "free" },
                    dates: [...habit.todos[0].dates],
                    index: habit.todos.length,
                };

                updatedHabits = result.data;

                await updateDoc(namelessRef, { dates: [] });

                add_todo_to_habit(habitId, namedOne);
            }
        } catch (wrror) {
            console.log(`ERORR, COULDN'T TOGGLE RANGE: ${wrror}`);
            setIsInAStateOfHorror(true);
        }
    }

    function relocate_data(data, habitId) {
        const index = data.findIndex((habit) => habit.refId === habitId);
        const habit = data[index];
        const todo = {
            name: habit.name,
            id: nanoid(),
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
            todo,
        };
    }

    async function add_todo_to_habit(habitId, todo) {
        try {
            const index = habits.findIndex((habit) => habit.refId === habitId);
            const habit = habits[index];
            const namelessDates = habit.todos[0].dates.filter(
                (date) => date != todo.range.from
            );
            const todos = [
                { ...habit.todos[0], dates: namelessDates },
                ...habit.todos.slice(1),
                todo,
            ];
            const userId = getAuth().currentUser.uid;
            const todoCollection = collection(
                getFirestore(),
                `users/${userId}/habits/${habitId}/todos`
            );
            const todoRef = await addDoc(todoCollection, todo);

            todo.refId = todoRef.id;

            setHabits((prevHabits) =>
                prevHabits
                    .slice(0, index)
                    .concat({ ...habit, todos })
                    .concat(prevHabits.slice(index + 1))
            );

            if (habit.todos[0].dates.some((date) => date === todo.range.from)) {
                const namelessOneRef = doc(
                    getFirestore(),
                    `users/${userId}/habits/${habitId}/todos/${habit.todos[0].refId}`
                );
                const updatedDates = habit.todos[0].dates.filter(
                    (date) => date !== todo.range.from
                );

                await updateDoc(namelessOneRef, { dates: updatedDates });
            }

            await updateDoc(todoRef, { refId: todoRef.id });
        } catch (wrror) {
            console.log(`ERORR, COULDN'T ADD TODO: ${wrror}`);
            setIsInAStateOfHorror(true);
        }
    }

    async function delete_todo(habitId, todoId) {
        try {
            const userId = getAuth().currentUser.uid;
            const docRef = doc(
                getFirestore(),
                `users/${userId}/habits/${habitId}/todos/${todoId}`
            );
            const index = habits.findIndex((habit) => habit.refId === habitId);
            const habit = habits[index];
            const todos = habit.todos.filter((todo) => todo.refId !== todoId);

            todos.forEach(async (todo, index) => {
                if (!index) return;
                const ref = doc(
                    getFirestore(),
                    `users/${userId}/habits/${habitId}/todos/${todo.refId}`
                );

                await updateDoc(ref, { index });
            });

            setHabits((prevHabits) =>
                prevHabits
                    .slice(0, index)
                    .concat({ ...habit, todos })
                    .concat(prevHabits.slice(index + 1))
            );

            await deleteDoc(docRef);
        } catch (wrror) {
            console.log(`ERROR DELETING TODO: ${wrror}`);
            setIsInAStateOfHorror(true);
        }
    }

    async function rename_todo(habitId, todoId, name) {
        try {
            const userId = getAuth().currentUser.uid;
            const docRef = doc(
                getFirestore(),
                `users/${userId}/habits/${habitId}/todos/${todoId}`
            );
            const index = habits.findIndex((habit) => habit.refId === habitId);
            const habit = habits[index];
            const todoIndex = habit.todos.findIndex(
                (todo) => todo.refId === todoId
            );
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

            await updateDoc(docRef, { name });
        } catch (wrror) {
            console.log(`ERROR UPDATING TODO NAME: ${wrror}`);
            setIsInAStateOfHorror(true);
        }
    }

    function load_habits() {
        const userId = getAuth().currentUser.uid;
        const habitsQuery = query(
            collection(getFirestore(), `users/${userId}/habits`),
            orderBy("timestamp", "asc")
        );

        const unsub = onSnapshot(habitsQuery, (snapshot) =>
            snapshot.docChanges().forEach(async (change) => {
                if (change.type === "removed")
                    setHabits((prevHabits) =>
                        prevHabits.filter((habit) => habit.id !== change.doc.id)
                    );
                else {
                    const habit = change.doc.data();
                    const todos = await load_todos(habit.refId);

                    setHabits((prevHabits) => {
                        const index = prevHabits.findIndex(
                            (other) => other.id === habit.id
                        );

                        if (!~index) return [...prevHabits, habit];
                        else
                            return prevHabits
                                .slice(0, index)
                                .concat({ ...habit, todos })
                                .concat(prevHabits.slice(index + 1));
                    });
                }
            })
        );
        return unsub;
    }

    function go_home() {
        window.location.href = "/";
    }

    useEffect(() => {
        initializeApp(firebaseConfig);
    }, []);

    useEffect(() => {
        let unsub;

        onAuthStateChanged(getAuth(), () => {
            setIsLoggedIn(() => !!getAuth().currentUser);
            if (getAuth().currentUser) unsub = load_habits();
        });

        return () => (unsub ? unsub() : null);
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <SlideScreen
                    content={
                        <div className="state-of-horror">
                            <span className="horror"></span>
                            <p>
                                Error processing your request, please connect to
                                the internet and try again!
                            </p>
                            <button
                                className="go-home"
                                onClick={go_home}
                            ></button>
                        </div>
                    }
                    close={go_home}
                    shown={isInAStateOfHorror}
                />
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
                                    update={check_habit}
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
                                        update_cell={check_habit}
                                        update_detail={update_detail}
                                        change_image={switch_image}
                                        delete_habit={delete_habit}
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
