import React from "react";
import { useState } from 'react';

export default function SignUp() {
    // sign up states
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [instagram, setInstagram = useState('');
    
    // error-checking states
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // handling email change
    const handleEmail= (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // handling username change
    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    // handling password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // handling instagram change
    const handleInstagram = (e) => {
        setInstagram(e.target.value);
        setSubmitted(false);
    };

    // handling form subsmission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || username === '' || password === '') {
            setError(true);
        } 
        else {
            setSubmitted(true);
            setError(false);
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
        <h1>{Username} has successfully signed up!</h1>
    </div>
    );
    };

    

    return (
        <div>
            <h1>Sign up!</h1>
        </div>
    )
}