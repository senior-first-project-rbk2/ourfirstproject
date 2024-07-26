import axios from "axios";

export const getAllProduct = async () => {
  return axios
    .get("http://localhost:5000/products/getAll")
    .then((res) => {
      return res.data;
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const addProducts = async (
  name,
  description,
  imageUrl,
  price,
  quantity,
  category
) => {
  return axios
    .post("http://localhost:5000/products/add", {
      name,
      description,
      imageUrl,
      price,
      quantity,
      category,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const deleteProduct = async (id) => {
  return axios
    .delete(`http://localhost:5000/products//delete/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
