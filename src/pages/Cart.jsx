import React, { useContext, useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/cart.css";
import RemoveIcon from "../assets/removeIcon.svg";
import { Context } from "../Context";
import LoadingBar from 'react-top-loading-bar';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


export default function Cart() {
  const [progress, setProgress] = useState(100)
  let [dis,setDis]=useState()
  const {incrementQuantity, cartItems,handleRemove,decreaseQuantity  } = useContext(Context);



  let quantityCount=cartItems.map(item=>item.quantity)


  let totalQuantity=quantityCount.reduce((a,b)=>a+b,0)


  useEffect(()=>{
      let discount=Math.floor(Math.random() *50)
      setDis(discount)

  },[])

  let price=cartItems.map(item=>
      item.price * item.quantity
  )

  let total=price.reduce((a,b)=>a+b,0)

  let totalPrice=Math.floor(total - (dis/100 * total))





  return (
    <>
       <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Navbar />
    <div className="cart-main-container">
      <div className="cartItems-containers">
      <SimpleBar autoHide='true' style={{ height: '85vh' ,width:'640px'}} >
        <div className='cartItem-cards-container'>
        {cartItems.map(item=><div key={item.id}className='cartItem-cards'>
            <img src={item.img} alt="pizza" className="pizzaImage"/>
            <p className="pizzaName">{item.name}</p>
            <div className="quantityBtn-Container">
        <p onClick={()=>incrementQuantity(item.id)}>+</p>
        <p onClick={()=>decreaseQuantity(item.id)}>-</p>
            </div>
            <p className="quantity">x{item.quantity}</p>
            <img onClick={()=>handleRemove(item.id)} src={RemoveIcon} alt="icon" className="removeIcon" />
        </div>)}
     
        </div>
      </SimpleBar>
      <div className='cartItem-quantity'>

        <p className="cartItem-quantity-title">Your Basket</p>
        <div className="cartItem-counts">
          <p>Quantity</p>
          <p>{totalQuantity}</p>
        </div>
        <div className="cartItem-counts">
          <p>Discount</p>
          <p>{cartItems.length>0?dis : 0}%</p>
        </div>
        <div className="line"></div>
        <div className="cartItem-counts">
          <p>SubTotal</p>
          <p>₹{totalPrice}</p>
        </div>
        <p className="order-btn" >place order</p>
      </div>
      </div>
     </div>
    
    
     </>
  );
}
