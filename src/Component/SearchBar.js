import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { TodoContext } from "../Store/TodoContext";
import ItemsList from "./ItemsList";

function SearchBar() {
  const { handleChange} = useContext(TodoContext)
  return (
    <>
      <div className='searchBar-wrapper'>
        <p>Notes</p>
        <div className="search-group d-flex">
          <CiSearch className="icon" />
          <input type="text" name="" id="" placeholder="Search notes" onChange={handleChange} />
        </div>
      </div>
      <ItemsList/>
    </>
  )
}

export default SearchBar