import { useContext, useState } from 'react'
import { TodoContext } from '../Store/TodoContext';
import { useNavigate } from 'react-router-dom';
import ItemAction from './ItemAction';

function Item() {
    const { todos, setEditTodo } = useContext(TodoContext);
    const [deletedId, setDeletedId] = useState();
    const [itemActionMenu, setItemActionMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <ItemAction action={{ itemActionMenu, setItemActionMenu ,deletedId}} />
            {todos.map((todo) => (
                <div className='item-container' onContextMenu={(e) => {
                    e.preventDefault()
                    setItemActionMenu(true)
                    setDeletedId(todo.id)
                }} onClick={() => {
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