  import React, { useContext } from "react";
import "../styles/navbar.css";
import {useNavigate} from 'react-router-dom';
import Cart from "../assets/cart.svg";
import { Link } from "react-router-dom";
import { Context } from "../Context";


export default function Navbar() {  
  const navigate=useNavigate()
  const{cartItems,setIsAuth}=useContext(Context)



const logout=()=>{
  localStorage.removeItem('token')
  setIsAuth(false)
  navigate('/')
}

  return (
    <div className="navbar">
      <div className="left-links">
        <Link to="/pizzas">
          <p className="logo">PizzaHouse</p>
        </Link>
        <div className="links">
          <ul>
            <li>
              <Link to='/pizzas'><a href="#!">Pizzas</a></Link>
            </li>
            <li>
              <Link to='/desserts'><a href="#!">Desserts</a></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-links">
      
        <Link to='/cart'>
        <div className="cart">
         <img src={Cart} alt="icon" />
          {cartItems.length>0 && <p>{cartItems.length}</p>}
         
        </div>
        </Link>
        <Link to='/' >
          <a  onClick={logout} href="#!" className="login-btn">
            {localStorage.getItem('token')?"Logout":"Login"}
          </a>
        </Link>
      </div>
    </div>
  );
}
