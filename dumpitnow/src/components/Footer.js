import React from "react";
import "../styles/footer.css";
import dinlogo from "../images/din-logo.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-2">
        <div className="part-1">
          <img src={dinlogo} alt=""/>
          <p className="give-margin"></p>
          <div className="social-div">
            <a href=""><img src={facebook} alt="facebook" /></a>
            <a href=""><img src={instagram} alt="instagram" /></a>
            <a href=""><img src={twitter} alt="twitter" /></a>
          </div>
        </div>

        <div className="part-2">
          <h3>Company</h3>
          <Link className="remove-underline" to="/faq">FAQ</Link>
          <Link className="remove-underline" to="/review">Review</Link>
        </div>

        <div className="part-3">
          <h3>Support</h3>
          <Link className="remove-underline" to="/privacy-policy">Privacy Policy</Link>
          <Link className="remove-underline" to="/terms-of-use">Terms of Use</Link>
        </div>

        <div className="part-4">
          <h3>Contact</h3>
          <a className="remove-underline" href="tel:7007315655">+91-7007315655</a>
          <a className="remove-underline" href="mailto:fertilesource@gmail.com">fertilesource@gmail.com</a>
        </div>
      </div>

      <div className="footer-3">
        support@dumpitnow
      </div>
    </>
  );
}

export default Footer;
