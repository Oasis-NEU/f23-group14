import { useState } from 'react';

export default function SignUp() {
    // sign up states
    // sign-up fields
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [instagram, setInstagram] = useState('');
    
    // error-checking states
    // error-check
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // handling email change
    // email change
    const handleEmail= (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // handling username change
    // username change
    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    // handling password change
    // password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // handling instagram change
    // instagram change
    const handleInstagram = (e) => {
        setInstagram(e.target.value);
        setSubmitted(false);
    };

    // handling form subsmission
    // form subsmission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || username === '' || password === '') {
        export default function SignUp() {
    }}
    return (
        <div>
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

}
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

