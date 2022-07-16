import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <ul className="socialMedia">
          <li>
           
              <i class="fa-brands fa-facebook-square"></i>
            
          </li>
          <li>
          
              <i class="fa-brands fa-twitter"></i>
            
          </li>
          <li>
            
              <i class="fa-brands fa-instagram-square"></i>
           
          </li>
          <li>
            
              <i class="fa-brands fa-pinterest"></i>
            
          </li>
        </ul >
        <ul className="socialMedia">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Service</a>
        </li>

        <li>
          <a href=""> blogs</a>
        </li>
        <li>
          <a href=""> Contact</a>
        </li>
        </ul>
      </div>
      <div className="footer2">
        <p>©{new Date().getFullYear()} all right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
