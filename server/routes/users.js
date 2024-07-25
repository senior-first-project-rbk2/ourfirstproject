const express= require("express")
const {addUser, loginUser, logoutUser} =require("../controllers/users.js")
const usersrouter= express.Router()

usersrouter.post("/add", addUser)
usersrouter.post("/login", loginUser)
usersrouter.post("/logout", logoutUser)

module.exports = usersrouter