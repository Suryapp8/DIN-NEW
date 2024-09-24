// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../images/din-logo.png";
// import "../styles/navbar.css";

// function Navbar({ cartCount }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav>
//       <div className="logo-cont">
//         <Link to="/">
//           <img className="logo-img" src={logo} alt="logo" />
//         </Link>
//       </div>

//       <div className={`menu ${menuOpen ? "active" : ""}`}>
//         <ul className="nav-links">
//           <li className="links">
//             <a href="#about" onClick={closeMenu}>
//               About
//             </a>
//           </li>
//           <li className="links">
//             <Link to="/ratelist" onClick={closeMenu}>
//               Scrap List
//             </Link>
//           </li>
//           <li className="links">
//             <Link to="/plant" onClick={closeMenu}>
//               Plants
//             </Link>
//           </li>

//           <li className="links">
//             <a href="#supplies" onClick={closeMenu}>
//               Supplies
//             </a>
//           </li>
//           <li className="links">
//             <a href="#valuate" onClick={closeMenu}>
//               How we valuate
//             </a>
//           </li>

//           <li className="links">
//             <a href="#contact" onClick={closeMenu}>
//               Contact
//             </a>
//           </li>
//           <li className="links">
//             <Link to="/cart" onClick={closeMenu}>
//               🛒 Your Garden ({cartCount})
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Hamburger menu for mobile view */}
//       <div className="hamburger" onClick={toggleMenu}>
//         ☰
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/din-logo.png";
import "../styles/navbar.css";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

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

      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li className="links">
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
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
            <Link to="/valuate" onClick={closeMenu}>
              How We Valuate
            </Link>
          </li>
          <li className="links">
            <Link to="/supplies" onClick={closeMenu}>
              Supplies
            </Link>
          </li>
          <li className="links">
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="links cart">
            <Link  to="/cart" onClick={closeMenu}>
              🛒 Your Garden ({cartCount})
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger menu for mobile view */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}{" "}
        {/* Cart count on the hamburger */}
      </div>
    </nav>
  );
}

export default Navbar;
