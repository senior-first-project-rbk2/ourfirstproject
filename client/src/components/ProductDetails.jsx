import React, { useEffect, useState } from "react";
import { updateProduct } from "../services/productService";

function ProductDetails({ show, product, handleClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="update__container">
      <div className="update__wrapper">
        <header className="update__header">
          <h1 className="update__close__btn">Product details</h1>
        </header>
        <button className="close-button" onClick={handleClose}>
          X
        </button>

        <div className="details__container">
          <img className="details__img" src={product.imageUrl} />
          <div className="details__details__products">
            <span>
              <h3>Product Name:</h3> {product.name}
            </span>
            <span className="span">
              {" "}
              <h3>Product description:</h3> {product.description}
            </span>
            <span>
              <h3>Product price:</h3> {product.price}
            </span>
            <span>
              <h3>Product quantity:</h3>
              {product.quantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
