import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import "./App.css";
import BackOffice from "./components/BackOffice.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/backOffice" element={<BackOffice />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
