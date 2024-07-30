import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className='searchBar-wrapper'>
        <p>Notes</p>
        <div className="search-group d-flex">
            <CiSearch/>
            <input type="text" name="" id="" placeholder="Search notes" />
        </div>
    </div>
  )
}

export default SearchBar