import React, { useState } from "react";
import "../styles/order.css";
import { firestore } from "../firebase/firebase.js";
import { addDoc, collection } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

function OrderPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [pickupdate, setPickupdate] = useState();
  const [pickUpTime, setPickUpTime] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const ref = collection(firestore, "Order-Details");
    let data = {
      user,
      email,
      phone,
      address1,
      address2,
      pickupdate,
      city,
      pickUpTime,
      createdAt: new Date(),
    };

    try {
      addDoc(ref, data);
      alert("Your order has been scheduled");
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
  const handleAddressLine1 = (e) => {
    setAddress1(e.target.value);
  };
  const handleAddressLine2 = (e) => {
    setAddress2(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
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
        <div className="order-img"></div>

        <div className="blank-div"></div>
        <form onSubmit={handleSubmit} className="form form-style-3">
          <div className="form-field">
            <label for="field1">
              Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              <input
                type="name"
                placeholder="Enter your name"
                required
                name="user"
                onChange={handleName}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Email: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
              <input
                type="email"
                placeholder="Enter your email"
                required
                name="email"
                onChange={handleEmail}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Phone:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                placeholder="Enter your phone number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                name="phone"
                onChange={handlePhone}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Address Line 1: &nbsp;&nbsp;&nbsp;
              <input
                type="name"
                placeholder="Enter your address"
                required
                name="address1"
                onChange={handleAddressLine1}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Address Line 2:&nbsp;&nbsp;&nbsp;
              <input
                type="name"
                placeholder="Enter your address"
                required
                name="address2"
                onChange={handleAddressLine2}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              City: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="name"
                placeholder="Enter your city"
                required
                name="city"
                onChange={handleCity}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Pick up time: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="time"
                placeholder="Enter your name"
                required
                name="pickUpTime"
                onChange={handlePickUpTime}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Pick up date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="date"
                placeholder="Enter your name"
                required
                name="pickupdate"
                onChange={handlePickUpDate}
              />
            </label>
          </div>

          <div className="button-div">
            <button className="schedule">Schedule Pickup</button>
          </div>
        </form>

        <div className="services-container">
          <div className="services-about">
            <ul>
              <li style={{ listStyleType: "disc" }}>
                We serve to create Awareness and let you be the curator of our
                Mother Earth.
              </li>
              <li style={{ listStyleType: "disc" }}>
                We are providing a system where you exchange the things which
                you use to throw as garbage and becoming a destroyer of Our Eco
                System with the help of our services you will become a curator
                by sending your waste to the right place where we use to get it
                recycled in to a usable product and in Exchange you will get
                plants and Coupons* from our side as per our valuation system.
              </li>
              <li style={{ listStyleType: "disc" }}>
                We also provide natural plant food 100% organic to keep your
                plant healthy as planting is easy process but the process to get
                it raised and be healthy requires a lot of efforts like raising
                your own child.
              </li>
              <li style={{ listStyleType: "disc" }}>
                We offer consultancy to our valued customers for setting up
                Indoor/ outdoor Garden and plant care. And you know what the
                best part is you can Barter your scrap at your suitable time and
                date, totally at your convenience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
