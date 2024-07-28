import React from "react"
import axios from 'axios'
import { useState, useEffect } from "react"
import {jwtDecode}from "jwt-decode"
import { useNavigate } from "react-router-dom"

function Cart({setTotal}) {
  const [cartitems, setCartitems]=useState([])
  const [refresh, setRefresh]=useState(false)
  const navigate = useNavigate();
  

  const getCartByUser= ()=>{

    

    const token = localStorage.getItem("user")
  
    const decodedToken = jwtDecode(token)
    console.log("decodedtoken", decodedToken)
    const userID = decodedToken.userId
    axios.get(`http://localhost:5000/cart/getcartbyuser/${userID}`).then((res)=>{
      const itemsdata = res.data
      const newdata= itemsdata.map((item)=>(
        {
          id: item.id,
          quantity: item.quantity,
          name: item.product.name,
          productImage: item.product.imageUrl,
          productprice: item.product.price
          
        }
      ))
      setCartitems(newdata)
      console.log("cartitems", cartitems)
    }).catch((error)=>{
      console.log("error fetching the content of the cart",error)
    })
  }

  const updatequantity=(itemid, newquantity)=>{
    if (newquantity <= 0) return
    axios.put(`http://localhost:5000/cart/update/${itemid}`, {quantity: newquantity}).then(()=>{
      setRefresh(!refresh)
      }) 
    .catch((error)=>{
      console.log("error updating the item", error)
    })
  }

  const deleteProdfromCart= (id)=>{

    axios.delete(`http://localhost:5000/cart/delete/${id}`).then(()=>{
      setRefresh(!refresh)
    }).catch((error)=>{
      console.log("error deleting the product", error)
    })
  }

  const calculateTotalSum = () => {
    return cartitems.reduce((sum, item) => sum + item.quantity * item.productprice, 0);
  };

  const totalSum = calculateTotalSum()
  console.log("total sum", totalSum)

  useEffect(()=>{getCartByUser()},[refresh])

  return (
    <div className="display-products-cart">
      {cartitems.map((item)=>{
        return <div className="one-item">
          <div className="product-name">{item.name}</div>
          <img className="product-image" src={item.productImage} alt={item.name} />
          <div className="product-quantity">
              <button onClick={()=>{updatequantity(item.id, item.quantity-1)}}>-</button>
              <input 
                type="text" 
                value={item.quantity} 
                readOnly
              />
              <button onClick={()=>{updatequantity(item.id, item.quantity+1)}}>+</button>
            </div>
          <button className="delete-product" onClick={()=>{deleteProdfromCart(item.id)}}>Delete</button>
         

        </div>
      })}
      <div className="buy-bouton"> 
        <button onClick={()=>{
          navigate("/useradress"), setTotal(totalSum) }}>Buy</button>
      </div>
      
    </div>
  );
}

export default Cart
