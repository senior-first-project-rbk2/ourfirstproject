import React, { useEffect, useState } from "react";
import { getAllProduct } from "../services/productService";
import ProductDetails from "./ProductDetails.jsx";
import {jwtDecode}from "jwt-decode";
import axios from "axios";
function Home() {
  const [products, setProducts] = useState([]);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedProd, setSelectedProd] = useState("");

  useEffect(() => {
    getAllProduct()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addProductToCart= (id)=> {
    const token = localStorage.getItem("user")
    const decodedToken = jwtDecode(token)
    console.log("decodedtoken", decodedToken)
    const userID = decodedToken.userId
      axios.post(`http://localhost:5000/cart/add`, {
        userId: userID,
        productId: id
      }).then(()=>console.log("item added to cart successfully")).catch((error)=>{
        console.log("error adding the item", error)
      })
  }

  return (
    <div className="home">
      <div className="home__container">
        <img className="photo" src="./src/assets/Hero-amazone.jpg" alt="hero" />

        <div className="home__one__product">
          {products.map((prod, index) => (
            <div className="home__row" key={index}>
              <div className="home__details">
                <img className="home__img" src={prod.imageUrl} />
                <p>{prod.name}</p>
                <p>{prod.price}$</p>
                <button
                  onClick={() => {
                    setSelectedProd(prod);
                    setShowProductDetails(true);
                  }}
                  className="home__btn"
                >
                  Product Details
                </button>
                <button className=" add__item" onClick={()=>{addProductToCart(prod.id)}}>add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductDetails
        show={showProductDetails}
        handleClose={() => {
          setShowProductDetails(false);
        }}
        product={selectedProd}
      />
    </div>
  );
}

export default Home;
