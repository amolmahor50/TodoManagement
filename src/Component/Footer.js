import { NavLink } from 'react-router-dom'
import { AiOutlineCheckSquare } from "react-icons/ai";
import { ImFileText2 } from "react-icons/im";
import { IoAdd } from "react-icons/io5";

function Footer() {
  return (
    <div className='footer-wrapper d-flex'>
        <NavLink to='/' className="footer-item-group link d-flex">
            <ImFileText2 className='icon'/>
            <p>Notes</p>
        </NavLink>
        <NavLink className="footer-item-group link d-flex">
            <AiOutlineCheckSquare className='icon'/>
            <p>Tasks</p>
        </NavLink>
        <NavLink to='addItems' className='add-icon d-flex'>
            <IoAdd className='icon'/>
        </NavLink>
    </div>
  )
}

export default Footer