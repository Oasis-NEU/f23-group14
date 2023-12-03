import React, { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./Home.css";
import Navbar from "../../components/NavBar/Navbar";

export default function Home() {
    const navigate = useNavigate()
    const handleLogOut = async ()=> {
        const { error } = await supabase.auth.signOut()
        navigate("/Login")
    }

    const [listings, setListings] = useState([]);
    const [imageUrl, setImageUrl] = useState([]);

    async function readAll() {
        let { data, error } = await supabase.from("listings").select("*");
    
        console.log("listings: ", data);
        setListings(data);
      }
    
      useEffect(() => {
        readAll();
      }, []);

    return (

        <div className="home-page">
            <header className="home-nav"><Navbar></Navbar></header>
            <h1>University Threads</h1>

            <div className="listing">
            {listings.map((listing) => {
            return (
                <div>
                <img
                    src={listing.clothing_image}
                    alt="cloth"
                    width={300}
                    height={350}
                ></img>
                <div className="item-description"> {listing.item_description} </div>
                <div className="item-worth"> ${listing.estimated_worth} </div>
                </div>
            );
            })}

            
            </div>
            <button onClick={handleLogOut} className="logout-btn">Log Out</button>     
        </div> 
    )
}

