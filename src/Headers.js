import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function header() {
  return (
    <div className='header'>
          <img className="header-logo" src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"/>

      <div className='header-location'> 

      <button id="find-me">Deliver to</button><br />
      <p id="status"></p>
      <a id="map-link" target="_blank"></a>
      </div>
          
      <div className="header-search">
      <input className="header-searchIN" type="text"/> 
      <SearchIcon className="header-searchicon"/>
            </div>

       <div className='header-flag'>
        <img className='flag-india' src="https://illustoon.com/photo/dl/872.png"/>
       </div>

      <div className= 'header-nav'>
      <div className='header-opt'>
            <span className='header-dropdown'>
            <label className="header-lang" for="language"> Language: </label>
            <select name= "language" id= "language">
              <option value= "EN"> English </option>
              <option value= "HI"> Hindi </option>
              <option value= "FR"> French </option>
              <option value= "SP"> Spanish </option>
              <option value= "GM"> German </option>
              <option value= "IN"> Italian </option>
              <option value= "PT"> Portugese </option>
              </select>
             </span>
             
             </div>
          <div className="header-opt">
            <span className='header-ln1'>
                Hello, User </span>

            <span className='header-ln2'>
                Sign In
            </span>

          </div>

          <div className="header-opt">
          <span className='header-ln1'>
                Returns  </span>

            <span className='header-ln2'>
                 & Orders
            </span>

          </div>

          <div className="header-opt">
          <span className='header-ln1'>
               Your </span>

             <span className='header-ln2'>
               Prime
             </span>

             </div>

             </div>

             <div className='header-bascket'>
             <ShoppingCartIcon/>
             <span className='header-ln2 header-bascketCNT'>
              0
             </span>
             </div>
    </div>

 
  )
}

export default header
