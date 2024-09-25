import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Order from "./components/Order";
import Ratelist from "./components/Ratelist";
import Plant from "./components/Plant";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import "./styles/App.css";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Supplies from "./components/Supplies";

function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); // Cart state

  const cartCount = cart.length; // Total count of cart items

  // Simulate loading for 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {loading ? (
          <Loading />
        ) : (
          <>
            {/* Navbar - visible on all pages */}
            <Navbar cartCount={cartCount} />

            {/* Routing for all pages */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orderpage" element={<Order />} />
              <Route path="/ratelist" element={<Ratelist />} />
              <Route path="/payment" element={<Payment />} />
              
              {/* Supplies page should also handle adding to cart */}
              <Route
                path="/supplies"
                element={<Supplies cart={cart} setCart={setCart} />}
              />

              {/* Checkout needs both cart and setCart */}
              <Route path="/checkout" element={<Checkout cart={cart} />} />

              {/* Plant and Cart also need access to cart and setCart */}
              <Route
                path="/plant"
                element={<Plant setCart={setCart} cart={cart} />}
              />
              <Route
                path="/cart"
                element={<Cart cart={cart} setCart={setCart} />}
              />
            </Routes>

            {/* Footer - visible on all pages */}
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
