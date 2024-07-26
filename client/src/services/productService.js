import axios from "axios";

export const getAllProduct = async () => {
  return axios
    .get("http://localhost:5000/products/getAll")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
