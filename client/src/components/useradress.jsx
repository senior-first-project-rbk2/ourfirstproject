import React from "react";
import { useNavigate} from "react-router-dom";

const Useradress = ({total}) => {
  const navigate = useNavigate();

console.log("total",total)

  return (
    <div className="address-container">
      <h3>Your total price is: {total}</h3>
      <h3>Please fill these fields</h3>
      <h4>Our delivery agent will contact you</h4>
      <input className="full-name input-field" placeholder="Enter your full name here" type="text" />
      <input className="phone input-field" placeholder="Please enter your phone number" type="text" />
      <input className="address input-field" placeholder="Please enter your full address here" type="text" />
      <button className="buy-button" onClick={() => navigate("/")}>
        Buy
      </button>
    </div>
  );
};

export default Useradress;
