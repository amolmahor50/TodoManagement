import axios from 'axios'
import React, { useContext } from 'react'
import { TodoContext } from '../Store/TodoContext';
import { useNavigate } from 'react-router-dom';

function Item() {
   const {todos, setEditTodo} = useContext(TodoContext);
    const navigate = useNavigate();

    return (
        <>
            {todos.map((todo) => (
                <div className='item-container' onClick={() => {
                    navigate('/addItems')
                    setEditTodo(todo)
                    }} key={todo.id}>
                    <p className='title'>{todo.title}</p>
                    <p className='desc'>{todo.description}</p>
                    <p className="time">{todo.timestamp}</p>
                </div>
            ))}
        </>
    )
}

export default Item