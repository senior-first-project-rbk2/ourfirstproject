import React from "react";

function Login() {
  return (
    <div className="login__container">
      <h3>Login</h3>
      Email Adress or Mobile Number
      <input placeholder="search" className="login__input" />
      Password
      <input placeholder="search" className="login__input" />
      <button className="login__btn">Login</button>
    </div>
  );
}

export default Login;
