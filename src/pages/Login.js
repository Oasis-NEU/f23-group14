import React, { useState } from "react";

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
        <div>
            <h1>Log in</h1>
            <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;