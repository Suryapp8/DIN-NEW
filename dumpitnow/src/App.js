import About from "./components/About";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Ratelist from "./components/Ratelist";
import Loading from "./components/Loading";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Removed `Switch`
import { Tooltip } from "react-tooltip";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <Tooltip id="my-tooltip" />
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/orderpage" element={<Order />} />{" "}
            
              <Route path="/about" element={<About />} />{" "}
              
              <Route path="/ratelist" element={<Ratelist />} />{" "}
              
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
