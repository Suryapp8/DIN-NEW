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

function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const cartCount = cart.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Loading simulation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {loading ? (
          <Loading />
        ) : (
          <>
            {/* Navbar should only be here once */}
            <Navbar cartCount={cartCount} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orderpage" element={<Order />} />
              <Route path="/ratelist" element={<Ratelist />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/checkout" element={<Checkout cart={cart} />} />
              <Route
                path="/plant"
                element={<Plant setCart={setCart} cart={cart} />}
              />
              <Route
                path="/cart"
                element={<Cart cart={cart} setCart={setCart} />}
              />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
