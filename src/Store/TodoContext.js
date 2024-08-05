import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    const url = "http://localhost:8000/todos";

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                if (response.statusText === 'OK') {
                    setTodos(response.data);
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    const addTodo = (todo) => {
        axios.post(url, todo)
            .then((response) => {
                setTodos([...todos, response.data])
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const deletedTodo = (id) => {
        axios.delete(`http://localhost:8000/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id))
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const updateTodo = (updatedTodo) => {
        axios.put(`http://localhost:8000/todos/${updatedTodo.id}`, updatedTodo)
            .then((response) => {
                setTodos(todos.map(todo => (todo.id === updatedTodo.id ? response.data : todo)));
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <TodoContext.Provider value={{ todos, editTodo, setEditTodo, addTodo, updateTodo, deletedTodo }}>
            {children}
        </TodoContext.Provider>
    )
}