import React, { useEffect, useState } from "react";
import { getAllProduct } from "../services/productService";
import ProductDetails from "./ProductDetails.jsx";
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
                <button className=" add__item">add to Cart</button>
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
