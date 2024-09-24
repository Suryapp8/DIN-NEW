import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/din-logo.png";
import "../styles/navbar.css";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo-cont">
        <Link to="/">
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
      </div>

      {location.pathname === "/" ? (
        <>
          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li className="links">
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li className="links">
                <Link to="/ratelist" onClick={closeMenu}>
                  Scrap List
                </Link>
              </li>
              <li className="links">
                <Link to="/plant" onClick={closeMenu}>
                  Plants
                </Link>
              </li>
              <li className="links">
                <a href="#valuate" onClick={closeMenu}>
                  How we valuate
                </a>
              </li>
              <li className="links">
                <Link to="/supplies" onClick={closeMenu}>
                  Supplies
                </Link>
              </li>
              <li className="links">
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
              <li className="links cart">
                <Link to="/cart" onClick={closeMenu}>
                  🛒 ({cartCount})
                </Link>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            ☰{cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </>
      ) : (
        <div className="cart-only">
          <Link to="/cart" className="onlyhomecart" onClick={closeMenu}>
            🛒 Your Garden ({cartCount})
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
