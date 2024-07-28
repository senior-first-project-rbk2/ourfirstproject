import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import "./App.css";
import BackOffice from "./components/BackOffice.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./components/Register.jsx";
import Useradress from "./components/useradress.jsx";
import { useState } from "react";


function App() {
  const [total, setTotal]=useState(0)
  return (
    <div className="app">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/backOffice" element={<BackOffice />} />
          <Route path="/cart" element={<Cart setTotal={setTotal}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/useradress" element={<Useradress total={total}/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
