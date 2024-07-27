const {getAllProducts, addProduct, getOneProduct, deleteProduct, updateProduct, searchBycategory
} =require ("../controllers/products.js")
const { verifyToken, isAdmin } = require("../middlewares/middleware.js")
const express= require("express")

const productrouter= express.Router()

productrouter.get("/getAll", getAllProducts	)
productrouter.post("/add", verifyToken, isAdmin, addProduct)
productrouter.get("/getOne/:id", getOneProduct)
productrouter.delete("/delete/:id", verifyToken, isAdmin, deleteProduct)
productrouter.put("/update/:id", verifyToken, isAdmin, updateProduct)
productrouter.get("/search", searchBycategory)

module.exports=productrouter