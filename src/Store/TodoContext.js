import axios from "axios";
import debounce from "lodash.debounce";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [alert, setAlert] = useState(null);
    const url = "http://localhost:8000/todos";

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
    const fetchData = async () => {
        await axios.get(url)
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
    const addTodo = async (todo) => {
        await axios.post(url, todo)
            .then((response) => {
                setTodos([...todos, response.data])
            })
            .catch((error) => {
               showAlert("You can't add todo" , "Network error");
            })
    }

    // deleted data from api
    const deletedTodo = async (id) => {
        await axios.delete(`http://localhost:8000/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id))
            })
            .catch((error) => {
                showAlert("You can't deleted todo" , "Network error");
            })

    }

    // update your todo in api
    const updateTodo = async (updatedTodo) => {
        await axios.put(`http://localhost:8000/todos/${updatedTodo.id}`, updatedTodo)
            .then((response) => {
                setTodos(todos.map(todo => (todo.id === updatedTodo.id ? response.data : todo)));
            })
            .catch((error) => {
                showAlert("You can't updated todo" , "Network error");
            })
    }

    //alert the massage handling data
    const showAlert = (massage, type) => {
        setAlert({
            msg: massage,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 6000)

    }

    // pin your items 
    const pinSelect = async (id) => {
        const pinItem = todos.filter(todo => (todo.id === id));
        const newItems = [pinItem, ...todos];

        await axios.put(url, newItems)
        .then((response) => {
            setTodos(response.data);
        })
        .catch((error) => {
            showAlert("You can't pin todo" , "Network error");
        })
    }

    useEffect(() => {
        fetchData();
    }, [searchTerm]);

    return (
        <TodoContext.Provider value={{ todos, editTodo, setEditTodo, addTodo, updateTodo, deletedTodo, setSearchTerm, handleChange, showAlert, alert, pinSelect }}>
            {children}
        </TodoContext.Provider>
    )
}