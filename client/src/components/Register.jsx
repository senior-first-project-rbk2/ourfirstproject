import React, { useState } from "react";
import { addUsers } from "../services/addUsersService";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleClick = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      //check if email exist 
      addUsers();
    }

    addUsers(username, email, password)
      .then((res) => {
        localStorage.setItem("user", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Password is not matching");
      });
  };
  return (
    <div className="register__container">
      <h3>Register Now</h3>
      Your User Name:
      <input onChange={handleChangeName} />
      Your User Email:
      <input onChange={handleChangeEmail} />
      Your Password:
      <input onChange={handleChangePassword} />
      Confirm Your Password:
      <input onChange={handleChangeConfirmPassword} />
      <button className="login__btn" onClick={handleClick}>
        Confirm
      </button>
    </div>
  );
}

export default Register;
