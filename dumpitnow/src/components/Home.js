import React, { useState } from "react";
import "../styles/home.css";
import treeman from "../images/treeman.jpg";
import plant from "../images/plant.jpg";
import recycleLogo from "../images/recycleLogo.jpg";
import gaia from "../images/gaia.png";
import dustbin from "../images/dustbin.png";
import tree from "../images/tree.png";
import recycle from "../images/recycle.png";
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
        <p>lorem ipsum</p>
        <p>Lorem ipsum</p>
      </div>

      <div className="slides">
        <div className="box-1">
          <div className="img-div">
            <img src={gaia} alt="img" />
          </div>
          <div className="curve-div">
            <p>
              We Serve To Create Awareness And Let You Be The Curator Of Our
              Mother Earth.
            </p>
          </div>
        </div>
        <div className="box-1">
          <div className="img-div">
            <img src={gaia} alt="img" />
          </div>
          <div className="curve-div">
            <p>
              We Serve To Create Awareness And Let You Be The Curator Of Our
              Mother Earth.
            </p>
          </div>{" "}
        </div>
        <div className="box-1">
          <div className="img-div">
            <img src={gaia} alt="img" />
          </div>
          <div className="curve-div">
            <p>
              We Serve To Create Awareness And Let You Be The Curator Of Our
              Mother Earth.
            </p>
          </div>{" "}
        </div>
        <div className="box-1">
          <div className="img-div">
            <img src={gaia} alt="img" />
          </div>
          <div className="curve-div">
            <p>
              We Serve To Create Awareness And Let You Be The Curator Of Our
              Mother Earth.
            </p>
          </div>
        </div>
      </div>

      <div id="valuate" className="valuate-div">
        <div className="plant-img">
          <img src={recycleLogo} alt="plant" />
        </div>

        <div className="valuate-para">
          <h3>
            <span style={{ color: "rgb(209, 154, 27)" }}>HOW</span> WE VALUATE
          </h3>
          <p>hehehheheheheheheh</p>
        </div>
      </div>

      <div id="supplies" className="supplies-div">
        <div className="left-div">
          <h3>
            <span style={{ color: "rgb(209, 154, 27)" }}>PLANTS</span> AND
            SUPPLIES
          </h3>
          <p>blah blah blah blah blah</p>
          <div className="dust">
            <img src={dustbin} alt="" />
            <p>blah blah blah</p>
          </div>
          <div className="dust">
            <img src={recycle} alt="" />
            <p>blah blah blah</p>
          </div>
          <div className="dust">
            <img src={tree} alt="" />
            <p>blah blah blah</p>
          </div>
        </div>

        <div className="right-div">
          <img src={plant} alt="recycle" />
        </div>
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
