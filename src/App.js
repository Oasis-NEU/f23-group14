import './App.css';
import Home from "./pages/home/Home";
import Upload from "./pages/Upload";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { supabase } from './utils/supabase'
import Navbar from "./components/NavBar/Navbar";


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
      <h1>University Threads</h1>
        <Link className="header-links" to={'Home'}>Home</Link>
        <Link className="header-links" to={'Upload'}>Upload</Link>
        <Link className="header-links" to={'Login'}>Log in</Link>
        <Link className="header-links" to={'SignUp'}>Sign up</Link>
      </body>
    </div>


  );
}

export default App;
