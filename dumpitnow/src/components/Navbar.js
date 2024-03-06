import React, { useState, useEffect } from "react";
import logo from "../images/din-logo.png";
import trash from "../images/trash.gif";
import parrot from "../images/parrot.gif";
import bin from "../images/bin.gif";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
  const location = useLocation();
  const [randomGif, setRandomGif] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  

  const homePath = "/";

  useEffect(() => {
    if (location.pathname !== homePath) {
      const randomIndex = Math.floor(Math.random() * 3);

      switch (randomIndex) {
        case 0:
          setRandomGif(trash);
          break;
        case 1:
          setRandomGif(parrot);
          break;
        case 2:
          setRandomGif(bin);
          break;
        default:
          setRandomGif(trash);
      }
    }
  }, [location.pathname, homePath]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menuOpen state
  };

  const renderNavItemsOrRandomGif = () => {
    if (location.pathname === homePath) {
      return (
        <>
          <div className={`menu ${menuOpen ? 'active' : ''}`}>
  <li className="links">
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
  </li>
  <li className="links">
    <Link to="/ratelist" onClick={() => setMenuOpen(false)}>Scrap List</Link>
  </li>
  <li className="links">
    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
  </li>
  <li className="links">
    <a href="#valuate" onClick={() => setMenuOpen(false)}>How We Valuate</a>
  </li>
  <li className="links">
    <a href="#supplies" onClick={() => setMenuOpen(false)}>Supplies</a>
  </li>
  <li className="links">
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </li>
</div>
          <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" checked={menuOpen} />
            <label
              htmlFor="checkbox_toggle"
              className="hamburger"
              onClick={toggleMenu}
            >
              &#9776;
            </label>
          </ul>
        </>
      );
    } else {
      return <img className="gifs" src={randomGif} alt="random gif" />;
    }
  };
  
  return (
    <>
      <nav>
        <div className="logo-cont">
          <Link to="/">
            <img className="logo-img" src={logo} alt="logo" />
          </Link>
        </div>
        {renderNavItemsOrRandomGif()}
      </nav>
    </>
  );
}

export default Navbar;
