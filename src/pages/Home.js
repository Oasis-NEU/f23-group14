import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./Home.css";

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
              <div className="item-description">
                {" "}
                {listing.item_description}{" "}
              </div>
              <div className="item-worth"> ${listing.estimated_worth} </div>
            </div>
          );
        })}
      </div>

      <h1>Create listing</h1>
      {/* item_description - text input */}
      {/* button, click the button => insert a new listing, refresh the list */}
    </div>
  );
}
