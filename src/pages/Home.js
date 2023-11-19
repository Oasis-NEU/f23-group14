import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import './Home.css'


export default function Home() {
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
    <div className = "nav">
    <nav>
      <a href="./pages/Home.js">Home</a> |
      <a href="./pages/Upload.js">Upload</a> |
      <a href="pages/Login.js">Log In</a> |
      <a href="pages/Signup.js">Sign Up</a>
    </nav>
    </div>
      <h1>Thrifting Exchange</h1>

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
      <p>Create listing</p>

    </div>
  );
}
