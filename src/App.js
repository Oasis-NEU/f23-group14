import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import SignUp from "./pages/SignUp";
import Login from "./pages/SignUp";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={`Home`}>Home</Link>
        <Link to={`Upload`}>Upload</Link>
        <Link to ={'SignUp'}>Sign Up</Link>
        <Link to ={'Login'}>Login</Link>

      </header>
    </div>
  );
}

export default App;
