import React from 'react';
import './product.css';

function product() {
  return (
    <div className='product'>
        <div className='product_info'>
            <p>the lean startup</p>
            <p className='product_price'>
              <small>Rs.</small>
              <strong> 390 /- </strong> 
              </p>
             <div className='product_rating'>
            <p>⭐⭐⭐⭐</p>
              
              </div>
        </div>
        
        <img src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'/>
              <button>Add to Cart</button>
        </div>
      
    
  )
}

export default product
