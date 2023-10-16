import React from "react";
import "../styles/home.css";
import treeman from "../images/treeman.jpg";
import plant from "../images/plant.jpg";
import recycleLogo from "../images/recycleLogo.jpg";
import gaia from "../images/gaia.png";
import dustbin from "../images/dustbin.png";
import tree from "../images/tree.png";
import recycle from "../images/recycle.png";
import { Link } from "react-router-dom";

function Home() {
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
          <h3 className="about">About Us</h3>
          <p>
            We At Dump It Now Are Giving Our All Efforts Just To Keep Our Mother
            Earth Healthy By Our Little Effort. You Have Junk We Have Time To
            Take It From Your Place As Per Your Suitable Time And Date And The
            Best Thing Is You Will Get Beautiful Trees And Gardening Products As
            Per The Value Of Your Scrap.
          </p>
          <button className="learn-btn">LEARN MORE</button>
        </div>
      </div>

      <div className="services-cont">
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

      <div className="valuate-div">
        <div className="plant-img">
          <img src={plant} alt="plant" />
        </div>

        <div className="valuate-para">
          <h3>
            <span style={{ color: "rgb(209, 154, 27)" }}>HOW</span> WE VALUATE
          </h3>
          <p>hehehheheheheheheh</p>
        </div>
      </div>

      <div className="supplies-div">
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
          <img src={recycleLogo} alt="recycle" />
        </div>
      </div>

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
    </>
  );
}

export default Home;
