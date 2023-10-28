import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Upload from "./Upload";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={`Home`}>Home</Link>
        <Link to={`Upload`}>Upload</Link>
        <Link to={'Login'}>Login</Link>
      </header>
    </div>
  );
}

export default App;
