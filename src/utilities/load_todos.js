import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default async function load_todos(habitId) {
    const userId = getAuth().currentUser.uid;
    const todosCollection = collection(
        getFirestore(),
        `users/${userId}/habits/${habitId}/todos`
    );
    const toDocs = await getDocs(todosCollection);
    const todos = [];

    toDocs.forEach((todo) => todos.push(todo.data()));
    todos.sort((a, b) => a.index - b.index);
    return todos;
}
