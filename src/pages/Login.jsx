import React, { useContext, useState} from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { auth } from "../firebase";
import { Context } from '../Context';

function Login() {
    const {setIsAuth}=useContext(Context)
    const navigate=useNavigate()
    const[show,setShow]=useState(false);
    const[values,setValues]=useState({
        username:'',
        email:'',
        password:''
    })

    const handleChange=e=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
// register new use

const register = async () => {
    const { email, password } = values;
    try {
      const user = await createUserWithEmailAndPassword(
        auth,

        email,
        password
      );
      if (user) {
        window.alert("user created");
        navigate('/')
      }

    //   setSignup(false);
    //   setIsLoading(false);
      return;
    } catch (error) {
      if (error) {
        window.alert(error);

        // setIsLoading(false);
        console.log(error);
      }
    }
  };

// login user
const login = async () => {
    const { email, password } = values;
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        localStorage.setItem("token", user.user.accessToken);
       setIsAuth(true)
        navigate('/pizzas')
        // setIsLoading(false);
        
        return;
      }
    } catch (error) {
      if (error) window.alert("Invalid credentials");

      console.log(error.message);
    //   setIsLoading(false);
    }
  };


    return (
        <>
       {!show &&  <div className="login-container">
            <div className="login-card">
                <p className="login-cart-title">Login</p>
                <label htmlFor="email" className="label">Email</label>
                <input type="email" className="input" id='email' name='email' onChange={handleChange} value={values.email}/>
                <label htmlFor="password" className="label">Password</label>
                <input type="password" className="input" id='password' name='password' onChange={handleChange} value={values.password}/>
                <p className="login-btn" onClick={login}>Login</p>
                <p className="signup-link">Don't have an account? <span onClick={()=>setShow(true)}className="signup-span">Signup</span></p>
            </div>
        </div>}
        {show && <div className="login-container">
            <div className="login-card">
                <p className="login-cart-title">Signup</p>
               
                <label htmlFor="email" className="label">Email</label>
                <input type="email" className="input" id='email' name='email' onChange={handleChange} value={values.email}/>
                <label htmlFor="password" className="label">Password</label>
                <input type="password" className="input" id='password' name='password' onChange={handleChange} value={values.password}/>
                <p className="login-btn" onClick={register}>Signup</p>
            
            </div>
        </div>}
        </>
    )
}

export default Login;
