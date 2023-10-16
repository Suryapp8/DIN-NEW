import React from "react";
import "../styles/footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>hello</h3>
      </div>

      <div className="footer-right">
        <h3>JOIN US</h3>
        <p>HEHjckjanjnjlnlenflnelajnflnfljfnjesfnf</p>
        <form>
          <div className="name-input">
            <input type="name" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="contact-input">
            <input type="number" placeholder="Contact" />
            <button>Join us</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
