import React, { useState, useEffect } from "react";
import "../styles/order.css";
import { firestore } from "../firebase/firebase.js";
import { addDoc, collection } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";


function OrderPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [pickupdate, setPickupdate] = useState();
  const [pickUpTime, setPickUpTime] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const ref = collection(firestore, "user-pick-up-details");
    let data = {
      user,
      email,
      phone,
      address,
      pickupdate,
      pickUpTime,
      createdAt: new Date(),
    };

    try {
      addDoc(ref, data);
      alert("Congratulations! Your pick up has been scheduled.");
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  }

  const handleName = (e) => {
    setUser(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handlePickUpDate = (e) => {
    setPickupdate(e.target.value);
  };
  const handlePickUpTime = (e) => {
    setPickUpTime(e.target.value);
  };
  return (
    <>
      
        <div className="orderpage">
          <div className="services-container">
            <div className="services-about">
              <ul>
                <li style={{ listStyleType: "disc" }}>
                  We serve to create Awareness and let you be the curator of our
                  Mother Earth.
                </li>
                <li style={{ listStyleType: "disc" }}>
                  We are providing a system where you exchange the things which
                  you use to throw as garbage and becoming a destroyer of Our
                  Eco System with the help of our services you will become a
                  curator by sending your waste to the right place where we use
                  to get it recycled in to a usable product and in Exchange you
                  will get plants and Coupons* from our side as per our
                  valuation system.
                </li>
                <li style={{ listStyleType: "disc" }}>
                  We also provide natural plant food 100% organic to keep your
                  plant healthy as planting is easy process but the process to
                  get it raised and be healthy requires a lot of efforts like
                  raising your own child.
                </li>
                <li style={{ listStyleType: "disc" }}>
                  We offer consultancy to our valued customers for setting up
                  Indoor/ outdoor Garden and plant care. And you know what the
                  best part is you can Barter your scrap at your suitable time
                  and date, totally at your convenience
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className="name">
              <h3>Name:</h3>
              <input
                type="name"
                placeholder="Enter your name"
                required
                name="user"
                onChange={handleName}
              />
            </div>
            <div className="name">
              <h3>Email:</h3>
              <input
                type="email"
                placeholder="Enter your email"
                required
                name="email"
                onChange={handleEmail}
              />
            </div>
            <div className="name">
              <h3>Phone:</h3>
              <input
                type="number"
                placeholder="Enter your phone number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                name="phone"
                onChange={handlePhone}
              />
            </div>
            <div className="name">
              <h3>address:</h3>
              <input
                type="name"
                placeholder="Enter your address"
                required
                name="address"
                onChange={handleAddress}
              />
            </div>
            <div className="name">
              <h3>Pick up date:</h3>
              <input
                type="date"
                placeholder="Enter your name"
                required
                name="pickupdate"
                onChange={handlePickUpDate}
              />
            </div>
            <div className="name">
              <h3>Pick up time:</h3>
              <input
                type="time"
                placeholder="Enter your name"
                required
                name="pickUpTime"
                onChange={handlePickUpTime}
              />
            </div>

            <div className="button-div">
              <button className="schedule">Schedule pickup</button>
            </div>
          </form>
        </div>
      
    </>
  );
}

export default OrderPage;