import "./styles/global.css";
import Pizzas from "./pages/Pizzas";
import PizzaDetails from "./pages/PizzaDetails";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Context } from "./Context";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Desserts from "./pages/Desserts";
import DessertDetails from "./pages/DessertDetails";

function App() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [pizzaDetails, setPizzaDetails] = useState([]);
  const [dessertDetails, setDessertDetails] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // showing pizzas info page
  const handlePizzaInfo = (data) => {
    setPizzaDetails(data);
    navigate("/pizzadetails");
  };

  // showing desserts info page
  const handleDessertInfo = (data) => {
    setDessertDetails(data);
    navigate("/dessertDetails");
  };
  // adding items to cart
  const addToCart = (item) => {
    if (cartItems.includes(item)) {
      window.alert("already added to cart");
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  // removing items from cart
  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  
  // increasing pizza quantity
  const incrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        id === item.id
          ? { ...item, quantity: item.quantity + (item.quantity < 5 ? 1 : 0) }
          : item
      )
    );
  };
  // decreasing pizza quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        id === item.id
          ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
          : item
      )
    );
  };



  return (
    <Context.Provider
      value={{
        handleDessertInfo,
        dessertDetails,
        setDessertDetails,
        decreaseQuantity,
        incrementQuantity,
        handleRemove,
        addToCart,
        cartItems,
        setCartItems,
        pizzaDetails,
        setPizzaDetails,
        handlePizzaInfo,
        setIsAuth,
        isAuth,
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pizzas" element={localStorage.getItem('token')?<Pizzas />: <Login/>} />
        <Route path="/desserts" element={localStorage.getItem('token')?<Desserts />: <Login/>} />
        <Route path="/pizzadetails" element={localStorage.getItem('token')?<PizzaDetails />: <Login/>} />
        <Route path="/dessertDetails" element={<DessertDetails />} />
        <Route path="/cart" element={localStorage.getItem('token')?<Cart />: <Login/>} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
