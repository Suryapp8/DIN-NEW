import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Tooltip id="my-tooltip" />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/orderpage" element={<Order />} />
        <Route exact path="/about" element={<About />} />
        
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
