import React from "react";
import { supabase } from '../supabaseClient'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    const handleLogOut = async ()=> {
        const { error } = await supabase.auth.signOut()
        navigate("/Login")
    }

    return (


        <div className="home-page">
            <h1>Thrifting Exchange</h1>

            <button onClick={handleLogOut} className="logout-btn">Log Out</button>
     
        </div>
    )
}