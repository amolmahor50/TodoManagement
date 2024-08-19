import axios from "axios";
import debounce from "lodash.debounce";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const url = "http://localhost:8000/todos";

    useEffect(() => {
        fetchData();
    }, [searchTerm]);


    // Debounce the search function
    const debouncedSearch = useMemo(
        () => debounce((searchData) => {
            const results = todos.filter(todo => (todo.title.toLowerCase() || todo.description.toLowerCase()).includes(searchData.toLowerCase()));
            setTodos(results);
        }, 300),
        [todos]
    );

    // Handle input search change
    const handleChange = useCallback((event) => {
        const searchItem = event.target.value;
        setSearchTerm(searchItem);
        debouncedSearch(searchItem);
    }, [debouncedSearch]);

    // fetch the data from api and show the ui part 
    const fetchData = () => {
        axios.get(url)
            .then((response) => {
                if (response.statusText === 'OK') {
                    setTodos(response.data);
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // get the all value and add in api
    const addTodo = (todo) => {
        axios.post(url, todo)
            .then((response) => {
                setTodos([...todos, response.data])
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // deleted data from api
    const deletedTodo = (id) => {
        axios.delete(`http://localhost:8000/todos/${id}`)
            .then((response) => {
                setTodos(todos.filter(todo => todo.id !== id))
            })
            .catch((error) => {
                console.log(error)
            })

    }

    // update your todo in api
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
        <TodoContext.Provider value={{ todos, editTodo, setEditTodo, addTodo, updateTodo, deletedTodo, setSearchTerm, handleChange }}>
            {children}
        </TodoContext.Provider>
    )
}