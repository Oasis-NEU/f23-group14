import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from '../supabaseClient'
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (event) => {
        event.preventDefault()
    
        // setLoading(true)
        // const { error } = await supabase.auth.signInWithOtp({ email })
    
        //if (error) {
        //   alert(error.error_description || error.message)
        // } else {
        //   alert('Wrong Password')
        // }
        // setLoading(false)

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) {
            alert(error.error_description || error.message)
          } else {
            navigate("/Home")
          }

    }
    
    return (
        <div className="login-page">
            <form className="login-form">
            <h1 className="login-header">Log in</h1>
            <p className="userandpass">Email:</p>
            <input className="input"
                type="text" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
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