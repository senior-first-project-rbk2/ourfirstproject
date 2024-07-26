const {getAllProducts, addProduct, getOneProduct, deleteProduct, updateProduct, searchBycategory
} =require ("../controllers/products.js")
const express= require("express")

const productrouter= express.Router()

productrouter.get("/getAll", getAllProducts	)
productrouter.post("/add", addProduct)
productrouter.get("/getOne/:id", getOneProduct)
productrouter.delete("/delete/:id", deleteProduct)
productrouter.put("/update/:id", updateProduct)
productrouter.get("/search", searchBycategory)

module.exports=productrouter