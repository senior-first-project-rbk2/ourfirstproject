import React from "react";

function Cart() {
  return (
    <div className="icon__shopping__cart">
      <img className="shopping__cart_img" src="./src/assets/image.png" />
      <div className="icon__details">
        <h3>Your shopping cart is empty</h3>
        <span>
          You have no items in your shopping cart, lets add some items you like.
        </span>
      </div>
    </div>
  );
}

export default Cart;
