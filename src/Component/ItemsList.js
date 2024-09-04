import { useContext, useState } from 'react';
import Item from './Item'
import { TodoContext } from '../Store/TodoContext';

function ItemsList() {
  const { handleChange, todos } = useContext(TodoContext);

  return (
    <>
      {  handleChange &&
          <Item/>
          }
    </>
  )
}

export default ItemsList;