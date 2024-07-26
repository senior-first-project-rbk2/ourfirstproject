import axios from "axios";



export const addUsers = async (username, email, password) => {
  return axios
    .post("http://localhost:5000/users/add", { username, email, password})
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};