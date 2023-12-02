import React, { useState, useEffect } from 'react';
import supabase from '../../utils/supabase';
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./SignUp.css";
import Button from "../../components/Button/Button";
import Navbar from "../../components/NavBar/Navbar";


function SignUp() {
    // sign-up fields
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [instagram, setInstagram] = useState('');
    const [error, setError] = useState(null);
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const passwordsMatch = password ===retypePassword && password !== "";

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!passwordsMatch) {
            setError("Passwords do not match");
            return;
        }

        const { user, error } = await supabase.auth.signUp(
            {
              email,
              password
            },
            {
              data: {
                username
              }
            }
          );

          if (error) {
            setError(error.message);
          } else {
            navigate("/Home");
            console.log("Signed up user:", user);
          }
    };

    return (
    <div className="signup-page">
        <header className="signup-nav">
            <Navbar></Navbar>
        </header>
        <form onSubmit={handleSignup} className="signup-form">  
            <h1 className="login-header">Create your account!</h1>

            <label htmlFor="email">School Email*:</label>
            <input 
                id="email"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="School Email"
                required 
            />

            <label htmlFor="username">Username*:</label>
            <input 
                id="username"
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required 
            />

            <label htmlFor="password">Password*:</label>
             <input 
                id="password"
                type= "password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />

            <label htmlFor="retype-password">Confirm Password*:</label>
            <input 
                id="retype-password"
                type= "password"
                value={retypePassword} 
                onChange={(e) => setRetypePassword(e.target.value)}
                placeholder="Re-enter password"
                required
            />

            <label htmlFor="instagram">Instagram (Optional): </label>
            <input 
                id="instagram"
                type= "text"
                value={ instagram } 
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="@Instagram"
            />
        
            <Button 
                type="primary"
                className="signup-button" 
                disabled={!passwordsMatch}>
                    Sign up
            </Button>
            {error && <p>{error}</p>}
            <div className="alternative-option">
                Already have an account? <Link to="/Login">
                    Login
                </Link>
            </div>
        </form>
    </div>
    );

}

export default SignUp;
