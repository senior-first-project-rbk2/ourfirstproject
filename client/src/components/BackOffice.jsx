// const handleChangeName = (e) => {
//   setName(e.target.value);
// };
// const handleChangeDescription = (e) => {
//   setDescription(e.target.value);
// };
// const handleChangePrice = (e) => {
//   setPrice(e.target.value);
// };
// const handleChangeQuantity = (e) => {
//   setQuantity(e.target.value);
// };
// const handleChangeImageUrl = (e) => {
//   setImageUrl(e.target.value);
// };
// const handleChangeCategory = (e) => {
//   setCategory(e.target.value);
// };





import React, { useEffect, useState } from "react";
import { addProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";
import { getAllProduct } from "../services/productService";

function BackOffice() {
  const navigate = useNavigate();
  const [adminProducts, setAdminProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getAllProduct()
      .then((res) => {
        setAdminProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleChangeImageUrl = (e) => {
    setImageUrl(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "drbgxo3ua",
        uploadPreset: "first project",
        sources: ["local", "url", "camera"],
        showAdvancedOptions: false,
        cropping: false,
        multiple: false,
        defaultSource: "local",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImageUrl(result.info.secure_url);
        }
      }
    );
  };

  const handleClick = () => {
    addProducts(name, description, imageUrl, price, quantity, category)
      .then((res) => {
        const jsonData = JSON.stringify(res);
        localStorage.setItem("product", jsonData);
        navigate("/");
      })
      .catch((err) => alert("the product is not added", err));
  };

  return (
    <div className="container">
      <div className="admin__container">
        <header>
          <h1>Admin Dashboard</h1>
        </header>
        Add Item Name:
        <input onChange={handleChangeName} />
        Add Item price:
        <input onChange={handleChangePrice} />
        Add Item description:
        <input onChange={handleChangeDescription} />
        Add Item quantity:
        <input onChange={handleChangeQuantity} />
        Add Item Image:
        <button onClick={handleUpload}>Upload Image</button>
        <img
          src={imageUrl}
          alt="Preview"
          style={{ width: "100px", height: "100px" }}
        />
        Add Item Category:
        <input onChange={handleChangeCategory} />
        <div className="modify__btn">
          <button className="add__btn" onClick={handleClick}>
            Add!
          </button>
        </div>
      </div>

      <main className="item__table">
        <input className="item__search" placeholder="search" />
        <h2>Items</h2>
        <div className="item__details">
          <table>
            <thead>
              {adminProducts.map((product) => (
                <tr className="items">
                  <th>{product.name}</th>
                  <th className="product__description__backoffice">
                    {product.description}
                  </th>
                  <th>{product.price}</th>
                  <th>{product.Quantity}</th>
                  <th>{product.category}</th>

                  <img className="item__img" src={product.imageUrl} />
                  <div className="delete__add__btn">
                    <button className="add__btn">Update!</button>
                    <button className="add__btn">Delete!</button>
                  </div>
                </tr>
              ))}
            </thead>
          </table>
        </div>
      </main>
    </div>
  );
}

export default BackOffice;
