import React, { useState } from "react";
import { login } from "../services/usersService";
import { useNavigate } from "react-router-dom";

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
    login(email, password)
      .then((res) => {  
        navigate("/");
        const jsonData = JSON.stringify(res);
        localStorage.setItem("user", jsonData);
      })
      .catch((err) => alert("Incorrect email or password", err));
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
      <button className="login__btn">register Now</button>
    </div>
  );
}

export default Login;
