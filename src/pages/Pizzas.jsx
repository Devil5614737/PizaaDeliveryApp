import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Context } from '../Context';
import '../styles/pizzas.css';
import LoadingBar from 'react-top-loading-bar';
import PacmanLoader from "react-spinners/PacmanLoader";



function Pizzas() {
    const [progress, setProgress] = useState(100)
    const[loading,setLoading]=useState(true)
    const{handlePizzaInfo}=useContext(Context)
const[pizzas,setPizzas]=useState([])

useEffect(()=>{
 const fetchData=async()=>{
     const res=await fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas',{
        headers:{
            'x-rapidapi-host':'pizza-and-desserts.p.rapidapi.com',
    'x-rapidapi-key': '0aa8991588msh298ffca364ebd56p1972a4jsn4d14adcec561'
        }
    })
    if(res.status===200){
        setLoading(false)
        const data=await res.json()
        setPizzas(data)
    }


 }

fetchData()
},[])



    return (
        <>
          <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
          <div className="loader">   <PacmanLoader color='#E02CA3' loading={loading}  size={20} /></div>
       
        <div className="main-container">
            <Navbar/>
            <div className="pizzas-container">
              {pizzas.map(item=><div key={item.id} className="pizza-card" onClick={()=>handlePizzaInfo(item)}>
                  <img src={item.img} alt="pizza" />
                  <div className="pizza-info">
                      <div className="pizza-info-left">
                          <p className="pizza-name">{item.name}</p>
                          <div  className="veg-symbol" style={{border:item.veg?'2px solid green':"2px solid red"}}><div style={{backgroundColor:item.veg?'green':"red"}} className="circle"></div></div>
                      </div>
                      <p className="price">₹{item.price}</p>
                  </div>
              </div>)}
            </div>
        </div>
        </>
    )
}

export default Pizzas;
