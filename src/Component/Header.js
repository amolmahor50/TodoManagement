import { BsFolder2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function Header() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("hide");

  const handleVisibleButton = () => {
    const position = window.pageYOffset;

    if(position > 60){
        setSrollPosition(position);
        setshowGoTop("active");
    }
    else if (position < 60) {
      setSrollPosition(position);
      setshowGoTop("hide");
    } 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  },[]);

  return (
 <>
     <div className="header-wrapper d-flex">
      <div></div>
      <div className={scrollPosition < 70 ? "hide" : "active"}>Notes</div>
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