import React, { useState, useEffect } from "react";
import supabase from '../../utils/supabase';
import { useNavigate, Link } from "react-router-dom";
import useAuth from"../../hooks/useAuth";
import "./Login.css";
import Button from "../../components/Button/Button";
import Navbar from "../../components/NavBar/Navbar";

function LoginPage() {
    //const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { isLoggedIn } = useAuth();
    //check if email and password fields are filled
    const isFormFilled = email.trim() !== "" && password.trim() !== "";
    
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    const handleLogin = async (event) => {
        event.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        
        if (error) {
            setError(error.message);
          } else {
            navigate("/Home");
          }
    };
    
    return (
        <div className="login-page">
            <header className="login-nav">
                <Navbar></Navbar>
            </header>

            <form onSubmit={handleLogin} className="login-form">
            <h1 className="login-header">Log in</h1>

            {error && <p className="error-message">{error}</p>}

            <label htmlFor="email">Email:</label>
            <input 
                id="email"
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Email"
                required
            />

            <label htmlFor="password">Password:</label>
            <input c
                id="password"
                type= "password"
                value={password} 
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
                
            <Button 
                type="primary" 
                className="login-button" 
                disabled={!isFormFilled}>
                Login
            </Button>

            <div className="alternative-option">
                Don't have an account? <Link to="/SignUp"> Sign Up</Link>
            </div>
            </form>
        </div>
    );
}

export default LoginPage;