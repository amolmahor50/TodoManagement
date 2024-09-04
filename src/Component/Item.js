import { useContext, useState } from 'react';
import RichTextViewer from './RichTextViewer';
import { TodoContext } from '../Store/TodoContext';
import { useNavigate } from 'react-router-dom';
import ItemAction from './ItemAction';

function Item({ fullcontent, todoId, actionPerformId }) {
    const { setEditTodo, toggleTodoSelection, selectedTodos, todos } = useContext(TodoContext);
    const [idActionperform, setidActionperform] = useState();
    const [itemActionMenu, setItemActionMenu] = useState(false);
    const navigate = useNavigate();
    if (fullcontent === null) return;



    // handle open action with todo popup
    const hanldeContextMenu = (e) => {
        e.preventDefault();
        setItemActionMenu(true)
        setidActionperform(actionPerformId)
    }

    return (
        <div className='d-flex list-wrapper'>
            <ItemAction action={{ itemActionMenu, setItemActionMenu, idActionperform }} />
            {
                todos.map((todo) => (
                    <div className='d-flex item-container'>
                        <div className='item-contain d-flex'
                            onContextMenu={hanldeContextMenu}
                            onClick={() => {
                                navigate('/addItems')
                                setEditTodo(todo)
                            }}
                        >
                            <p className='title'>{todo.title}</p>
                            <RichTextViewer classname='desc' content={todo.description} />
                            <p className="time">{todo.timestamp}</p>
                        </div>
                        {
                            itemActionMenu ? <input type='radio'
                            checked={selectedTodos.includes(todo.id)}
                            onChange={() => toggleTodoSelection(todo.id)} /> : ""
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Item