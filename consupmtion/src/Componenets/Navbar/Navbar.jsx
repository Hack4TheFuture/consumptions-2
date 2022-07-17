import React, { useState ,useRef} from "react";
import { NavLink } from "react-router-dom";
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
                    <Link  activeClass="active"
                      to={"#home"}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>
                     Home
                 </Link>
                </li>
                <li>
                    <Link  to={"#about"}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>About</Link>
                    
                </li>
                <li>
                    <Link  to={"#service"}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>
                    Service
                    </Link>
                </li>
              
                <li>
                <Link  to={"#blogs"}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}> blogs</Link>
                   
                </li>
                <li>
                <Link  to={"#contact"}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}> Contact</Link>
                   
                </li>
                <li>
                 <NavLink to="/Login" className="subscribe">Subscibe</NavLink>
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