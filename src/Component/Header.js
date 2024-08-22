import { BsFolder2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function Header() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
 <>
     <div className="header-wrapper d-flex">
      <div></div>
      <div className={scrollY > 65 ? "active" : "hide"}>Notes</div>
      <div className="icon-wrapper d-flex">
        <NavLink to='folder' className='link'>
          <BsFolder2 className="icon" />
        </NavLink>
        <NavLink to='setting' className='link'>
          <IoSettingsOutline className="icon" />
        </NavLink>
      </div>
    </div>
    <SearchBar/>
 </>
  )
}

export default Header