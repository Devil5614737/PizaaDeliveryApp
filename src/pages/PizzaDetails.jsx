import React, { useContext } from 'react';
import Navbar from '../components/Navbar'
import { Context } from '../Context';
import '../styles/pizzadetails.css';

function PizzaDetails() {
    const{pizzaDetails,addToCart}=useContext(Context)



    return (
        <>
           <Navbar/>
       <div className="PizzaDetails-main-container">
           <div className="PizzaDetails-container">
               <img src={pizzaDetails.img} alt="pizza" className="pizza-img" />
               <div className="pizza-info">
                   <div className="pizza-info-title">
                       <p>{pizzaDetails.name} </p>
                       <div className="veg-symbol"></div>
                   </div>
                   <p className="pizza-info-price"><span>Price:</span>₹{pizzaDetails.price}</p>
                   <p className="desc">{pizzaDetails.description}</p>
                   <p className="dropdown-title">select your size & crust</p>
                   <div className="dropdown-container">
                      <select name="fdfs" id="">
                          <option value="">Medium Pan</option>
                          <option value="">Medim stuffed crust-cheese max</option>
                          <option value="">medium stuffed crust-veg kebab</option>
                      </select>
                   </div>
                   <button onClick={()=>addToCart(pizzaDetails)}  className="cart-add-btn">add</button>
               </div>
           </div>
       </div>
       </>
    )
}

export default PizzaDetails
