import React, { useEffect, useState } from "react";
import { getAllProduct } from "../services/productService";
function Home() {
  const [products, setProducts] = useState([]);
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
                <button className="home__btn">Add Item</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
