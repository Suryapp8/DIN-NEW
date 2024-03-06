import React from "react";
import "../styles/footer.css";
import dinlogo from "../images/din-logo.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";

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
        <a className="remove-underline" href="">About Us</a>
        <a className="remove-underline" href="">FAQ</a>
        <a className="remove-underline" href="">Review</a>
      </div>

      <div className="part-3">
      <h3>Support</h3>
        <a className="remove-underline" href="">Contact Us</a>
        <a className="remove-underline" href="">Privacy Policy</a>
        <a className="remove-underline" href="">term of use</a>
      </div>

      <div className="part-4">
        <h3>Contact</h3>
        <a className="remove-underline" href="">+91-7007614802</a>
        <a className="remove-underline" href="">fertilesource@gmail.com</a>
        <a className="remove-underline" href="">Review</a>
      </div>
    </div>

    <div className="footer-3">
      support@dumpitnow
    </div>

    </>
  );
}

export default Footer;
