// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAbTVjhrn4s_VvOVsp9Q7xo1elg5hOzSyU",
  authDomain: "pizzaapp-b6843.firebaseapp.com",
  projectId: "pizzaapp-b6843",
  storageBucket: "pizzaapp-b6843.appspot.com",
  messagingSenderId: "832662411179",
  appId: "1:832662411179:web:be973bc850492c88ce64ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth=getAuth(app)