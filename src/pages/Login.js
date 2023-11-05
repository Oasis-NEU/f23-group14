import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        // Handle the login logic here
        if (username && password) {
            // Submit the data to the backend for authentication
        } else {
            alert('Both fields are required!');
        }
    
    };

    return (
        <div className="login-page">
            <form>
            <h1 className="login-header">Log in</h1>
            <p className="userandpass">Username:</p>
            <input className="input"
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
            />
            <p className="userandpass">Password:</p>
            <input className="input"
                type= "password"
                value={password} 
                onChange={e => setPassword(e.target.value)}
            />
                
             

            <button className="login-button" onClick={handleLogin}>Login</button>
            </form>
            
            
        </div>
    );
}

export default LoginPage;