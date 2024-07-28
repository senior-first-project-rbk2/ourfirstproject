import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = () => {
    
    axios
    .post("http://localhost:5000/users/login", { email, password })
    .then((res) => {
      localStorage.setItem("user",res.data.token)
       navigate("/")
    })
    .catch((err) => {
      console.error(err);
      alert("Incorrect email or password", err)})
    };

  return (
    <div className="login__container">
      <h3>Login</h3>
      Email Adress or Mobile Number
      <input
        placeholder="search"
        className="login__input"
        onChange={handleEmail}
      />
      Password
      <input
        placeholder="search"
        className="login__input"
        onChange={handlePassword}
      />
      <button className="login__btn" onClick={handleClick}>
        Login
      </button>
      <button
        className="login__btn"
        onClick={() => {
          navigate("/register");
        }}
      >
        register Now
      </button>
    </div>
  );
}

export default Login;
