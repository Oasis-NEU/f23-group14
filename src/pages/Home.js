import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function readAll() {
      let { data, error } = await supabase.from("listings").select("*");

      console.log("listings: ", data);
      setListings(data);
    }
    readAll();
  }, []);

  return (
    <div className="home-page">
      <h1>Thrifting Exchange</h1>

      <div>
        {listings.map((listing) => (
          <p>{listing.item_description}</p>
        ))}
      </div>

      <h1>Create listing</h1>
      {/* item_description - text input */}
      {/* button, click the button => insert a new listing, refresh the list */}
    </div>
  );
}
