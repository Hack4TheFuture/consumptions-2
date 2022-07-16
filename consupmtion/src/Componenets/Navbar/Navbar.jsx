import React, { useState, useEffect ,useRef} from "react";
import { HashLink as Link } from "react-router-hash-link";
import './Navbar.css'

function Navbar() {
    const headerRef=useRef()

    let menuOpen = false;

  const menuBurgerOPen=(e)=>{
    var btn = e.target;
    if (!menuOpen) {
      headerRef.current.style.transform =
        "translateX(0)";
      btn.classList.add("open");
      menuOpen = true;
    } else {
      headerRef.current.style.transform =
        "translateX(100%)";
      btn.classList.remove("open");
      menuOpen = false;
    }
  }

    const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div>
        <nav className={color ? "nav-links-scroll" : "nav-links"}>
            <div className="iconPart">
                    <div className="circle"></div>
                  
            </div>
            <ul className='navList' ref={headerRef}>
                <li>
                    <a href="">
                     Home
                 </a>
                </li>
                <li>
                    <a href="">About</a>
                    
                </li>
                <li>
                    <a href="">
                    Service
                    </a>
                </li>
              
                <li>
                <a href=""> blogs</a>
                   
                </li>
                <li>
                <a href=""> Contact</a>
                   
                </li>
                <li>
                 <button  className="subscribe">Subscibe</button>
                </li>
            </ul>
            <div
        className="menu-burger"
        onClick={menuBurgerOPen}
      >
        <div className="menu-btn-burger"></div>
      </div>
  
        </nav>  
        </div>
       
  )
}

export default Navbar