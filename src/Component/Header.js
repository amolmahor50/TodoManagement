import { BsFolder2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {
  return (
 <>
     <div className="header-wrapper d-flex">
      <div></div>
      <div>Notes</div>
      <div className="icon-wrapper d-flex">
        <NavLink className='link'>
          <BsFolder2 className="icon" />
        </NavLink>
        <NavLink className='link'>
          <IoSettingsOutline className="icon" />
        </NavLink>
      </div>
    </div>
    <SearchBar/>
 </>
  )
}

export default Header