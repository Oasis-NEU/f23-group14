import './App.css';
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import SignUp from "./pages/SignUp";
import Login from "./pages/SignUp";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth-ex'
import Account from './Account-ex'



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
        <h1>Thrifting Exchange</h1>
        <Link className="header-links" to={'Home'}>Home</Link>
        <Link className="header-links" to={'Upload'}>Upload</Link>
        <Link className="header-links" to={'Login'}>Log in</Link>
        <Link className="header-links" to={'SignUp'}>Sign up</Link>

      </header>

      <body className="App-body">
        
      </body>
    </div>
  );
}

export default App;
