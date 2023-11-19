import React from "react";
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    // sign-up fields
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [instagram, setInstagram] = useState('');
    const navigate = useNavigate();
    
    // error-check
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // email change
    const handleEmail= (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // username change
    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    // password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // instagram change
    const handleInstagram = (e) => {
        setInstagram(e.target.value);
        setSubmitted(false);
    };

    // form subsmission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === '' || username === '' || password === '') {
            setError(true);
        } 
        else {
            setSubmitted(true);
            setError(false);
        }

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if(data){
            navigate("/Home")
        }


    };

    // display success message
    const successMessage = () => {
    return (
    <div
        className="success"
        style={{
        display: submitted ? '' : 'none',
    }}>
        <h1>{username} has successfully signed up!</h1>
    </div>

    );
    };

    return (
    <div className="signup-page">
            <form>  
            <h1 className="login-header">Create your account!</h1>

            <p className="userandpass">School Email*:</p>
            <input className="input"
                type="text" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
            />

            <p className="userandpass">Username*:</p>
            <input className="input"
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
            />

            <p className="userandpass">Password*:</p>
            <input className="input"
                type= "password"
                value={password} 
                onChange={e => setPassword(e.target.value)}
            />

            <p className="userandpass">Instagram:</p>
            <input className="input"
                type= "text"
                value={instagram} 
                onChange={e => setInstagram(e.target.value)}
            />
        
            <button className="login-button" onClick={handleSubmit}>Sign up</button>
            </form>
            
            
    </div>
    )

};
