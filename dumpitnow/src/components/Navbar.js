import React from "react";
import logo from "../images/din-logo.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo-cont">
          <img className="logo-img" src={logo} alt="logo" />
        </div>

        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
                
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
            <li className="links">Vision</li>
            <li className="links">About</li>
            <li className="links">Services</li>
            <li className="links">How we Valuate</li>
            <li className="links">Supplies</li>
            <li className="links">Contact</li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
