import './App.css';
import Home from "./pages/home/Home";
import Upload from "./pages/Upload";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { supabase } from './utils/supabase'
import Navbar from "./components/NavBar/Navbar";
import threadlogo from "./img/threadlogo.png";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }

]);


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>

      <body className="App-body">
        <img src={threadlogo} alt="Logo" className="logo"/>
        <h1>University Threads</h1>
        <p className="purpose">Swap styles, share trends, spend less</p>
        <p className="purpose">Your campus closet reimagined.</p>
      </body>
    </div>


  );
}

export default App;
