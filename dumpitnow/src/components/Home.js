import React, { useState } from "react";
import "../styles/home.css";
import treeman from "../images/treeman.jpg";
// import plant from "../images/plant.jpg";
// import recycleLogo from "../images/recycleLogo.jpg";
// import gaia from "../images/gaia.png";
// import truckwaste from "../images/truck-waste.png";
import gardener from "../images/gardener.png";
import plantnew from "../images/plantnew.png";
import decoration from "../images/decoration.png";
import dustbin from "../images/dustbin.png";
import tree from "../images/tree.png";
// import recycle from "../images/recycle.png";
import warning from "../images/warning.png";
import { Link, useNavigate } from "react-router-dom";
import { firestore } from "../firebase/firebase.js";
import { addDoc, collection } from "@firebase/firestore";
import Modal from "react-modal";

function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const ref = collection(firestore, "Registered users");
    let data = {
      name,
      email,
      contact,
      createdAt: new Date(),
    };

    try {
      addDoc(ref, data);
      setModalIsOpen(true);
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  }

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setContact(e.target.value);
  };

  return (
    <>
      <div className="home">
        <div className="home-cont">
          <h3 className="line-1">STAY CLEAN</h3>
          <h3 className="line-2">Go GREEN</h3>
          <p className="line-3">Do You Have Waste Around You?</p>
          <Link to="/orderpage" className="din-btn">
            DUMP IT NOW ?
          </Link>
        </div>

        <div className="div-1">
          <p>Become A Recycling Hero</p>
        </div>
      </div>

      <div className="div-2">
        <div className="img-cont">
          <img src={treeman} alt="tree" />
        </div>

        <div className="about-div">
          <h3 id="about" className="about">
            About Us
          </h3>
          <p>
            We At Dump It Now Are Giving Our All Efforts Just To Keep Our Mother
            Earth Healthy By Our Little Effort. You Have Junk We Have Time To
            Take It From Your Place As Per Your Suitable Time And Date And The
            Best Thing Is You Will Get Beautiful Trees And Gardening Products As
            Per The Value Of Your Scrap.
          </p>
          <Link to="about">
            <button className="learn-btn">LEARN MORE</button>
          </Link>
        </div>
      </div>

      <div id="services" className="services-cont">
        <h3>Services</h3>
       
      </div>

      <div className="slides">
        <div className="box-1">
          <div className="img-div">
            <img src={dustbin} alt="img" />
          </div>
          <div className="curve-div">
            <p>
              We collect scrap from your doorstep at your convenient time, and
              you will get plants in exchange of scraps. If you are not a plant
              lover you can ask for money in return as well.
            </p>
          </div>
        </div>
        <div className="box-1">
          <div className="img-div">
            <img src={gardener} alt="img" />
          </div>
          <div className="curve-div">
            <p>
              We offer Malli(Gardner) service for regular maintenance of your garden
              space.
              our gardener services are designed to transform your outdoor spaces into vibrant and thriving landscapes.
            </p>
          </div>{" "}
        </div>
        <div className="box-1">
          <div className="img-div">
            <img src={tree} alt="img" />
          </div>
          <div className="curve-div">
            <p>
              You can also avail regular supply of plants and plant nutrients
              You can avail all these services even if you don't have scrap to
              dump with us at a. nominal fees.
            </p>
          </div>{" "}
        </div>
        <div className="box-1">
          <div className="img-div">
            <img src={decoration} alt="img" />
          </div>
          <div className="curve-div">
            <p>
              Regular collection of scrap with an option to get interior
              decoration of your office space with mesmerizing plants Or Gifting
              pots at regular intervals We also offer Bio-waste collection cum
              management services.
            </p>
          </div>
        </div>
      </div>

      <div id="valuate" className="valuate-div">
        <div className="plant-img"></div>

        <div className="valuate-para">
          <h3>
            <span style={{ color: "rgb(209, 154, 27)" }}>HOW</span> WE VALUATE
          </h3>
          <p>
            At DIN, we understand the importance of valuing scrap materials
            fairly and transparently. Our valuation process takes into account
            various factors such as the type and quantity of materials, current
            market prices, and the condition of the items. We strive to offer
            competitive rates to our customers while also considering the
            environmental impact of recycling. Our team of experts meticulously
            assesses each item to ensure accurate and honest valuations. With
            our commitment to integrity and sustainability, you can trust that
            you'll receive a fair value for your scrap materials when you choose
            DIN.
            <span>Click here for detailed scrap ratelist</span>
          </p>
        </div>
      </div>

      <div id="supplies" className="supplies-div">
        <div className="left-div">
          <h3>
            <span style={{ color: "rgb(209, 154, 27)" }}>PLANTS</span> AND
            SUPPLIES
          </h3>
          <p></p>
          <div className="dust">
            
            <p>
              At DIN, we believe in sustainability and giving back to the
              environment. As part of our commitment to eco-friendly practices,
              we offer a unique exchange program where you can trade your scrap
              materials for vibrant and lush plants. Not only does this
              initiative help reduce waste and promote recycling, but it also
              contributes to creating green spaces and improving air quality in
              our communities. Each plant we provide is carefully selected for
              its beauty and resilience, ensuring that you receive not only a
              valuable addition to your space but also a symbol of our shared
              dedication to a greener future.
            </p>
          </div>
          
        </div>

        <div className="right-div"></div>
      </div>

      <div className="footer">
        <div className="footer-left">
          <h3>hello</h3>
        </div>

        <div className="footer-right">
          <h3>
            JOIN US
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="By joining us you can be our regular customer"
            >
              <img className="warning" src={warning} alt="warning-sign" />
            </a>
          </h3>
          <p>nelajnflnfljfnjesfnf</p>
          <form onSubmit={handleSubmit}>
            <div className="name-input">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleName}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleEmail}
                required
              />
            </div>
            <div id="contact" className="contact-input">
              <input
                type="number"
                name="contact"
                placeholder="Contact"
                onChange={handlePhone}
                required
              />
              <button type="submit">Join us</button>
            </div>
          </form>
          <Modal
            className="react-modal"
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Thankyou for registering with us"
          >
            <h2>Thank you for joining us!</h2>
            <p>You are now part of Dump It Now.</p>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Home;
