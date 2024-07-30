import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    const url = "http://localhost:3000/todos";
    
    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setTodos(response.data);
        })
        .catch((error) => {
            console.log(error)
        });
    },[todos]);

    const addTodo = (todo) => {
        axios.post(url, todo)
        .then((response) =>{
            setTodos([...todos, response.data])
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const updateTodo = (updatedTodo) => {
        axios.put(url,updatedTodo)
        .then((response) => {
            setTodos(todos.map(todo => (todo.id === updatedTodo.id ? response.data: todo)));
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return(
        <TodoContext.Provider value={{todos, editTodo, setEditTodo, addTodo, updateTodo}}>
            {children}
        </TodoContext.Provider>
    )
}