import './App.css';
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import SignUp from "./pages/SignUp";
import { Link } from "react-router-dom";

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
        <Link to={'Upload'}>Upload</Link>
        <Link to={'Login'}>Log in</Link>
        <Link to={'SignUp'}>Sign up</Link>
      </header>
    </div>
  );
}

export default App;
