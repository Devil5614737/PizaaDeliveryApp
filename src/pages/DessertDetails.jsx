import React, { useContext } from 'react'
import { Context } from '../Context';
import Navbar from '../components/Navbar';

function DessertDetails() {
    const{dessertDetails,addToCart}=useContext(Context);


    return (
        <div className="PizzaDetails-main-container">
        <Navbar/>
        <div className="PizzaDetails-container">
            <img src={dessertDetails.img} alt="pizza" className="pizza-img" />
            <div className="pizza-info">
                <div className="pizza-info-title">
                    <p>{dessertDetails.name} </p>
                    <div className="veg-symbol"></div>
                </div>
                <p className="pizza-info-price"><span>Price:</span>₹{dessertDetails.price}</p>
                <p className="desc">{dessertDetails.description}</p>
              
             
                <button onClick={()=>addToCart(dessertDetails)}  className="cart-add-btn">add</button>
            </div>
        </div>
    </div>
    )
}

export default DessertDetails
