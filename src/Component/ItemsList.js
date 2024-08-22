import { useContext } from 'react';
import Item from './Item'
import { TodoContext } from '../Store/TodoContext';

function ItemsList() {
  const {handleChange} = useContext(TodoContext)
  return (
    <div className='list-wrapper d-flex'>
       { handleChange &&
        <Item/>
        }
    </div>
  )
}

export default ItemsList;