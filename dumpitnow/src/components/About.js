import React from 'react'
import "../styles/About.css";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <div className='container-div'>
        
    <h1>About <span className='go-green'>Dump It Now</span></h1>
    <p>At Dump It Now, we are driven by a passion for transforming waste into valuable resources. Our mission is to make the world a cleaner, greener, and more sustainable place. We provide a platform that connects individuals and businesses with an eco-friendly way to dispose of waste while receiving rewards in return.</p>

    <p>We believe in the power of sustainability and responsible waste management. Our team is dedicated to creating a positive impact on the environment and supporting local communities. We understand the importance of reducing waste, conserving resources, and embracing eco-conscious practices for a brighter future.</p>

    <p>Founded with the vision of promoting eco-friendly initiatives, Dump It Now is committed to transparent and ethical business practices. We are here to make a difference and invite you to join us on this journey towards a cleaner and more sustainable world.</p>
     <Link to="/orderpage"><button className='din-btn'>Dump It Now ?</button></Link>
     <Link className='nav-home' to="/">Go To Home</Link>
    </div>
  )
}
