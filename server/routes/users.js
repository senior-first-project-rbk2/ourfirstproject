const express= require("express")

const {addUser, loginUser} =require("../controllers/users.js")

const usersrouter= express.Router()

usersrouter.post("/add", addUser)
usersrouter.post("/login", loginUser)

module.exports = usersrouter