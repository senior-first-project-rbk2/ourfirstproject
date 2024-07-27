import React, { useState } from 'react'
 

const ProductDetails = ({name,description,imageUrl,price,quantity,category}) => {
    
   


  return (
    <div className='product-details'>


      <h1 className="product-name">{name}</h1>
         
       <div className='product'           >    
        <span className="product-description">{description}</span>
        <span className="product-price">{price}</span>
        <span className="product-quantity">{quantity}</span>
        <span className="product-category">{category}</span>
         <img  src={imageUrl} alt="No content" height={300} width={300}     />
             
        
     



       </div>
        
    </div>
  )
}





export default ProductDetails
