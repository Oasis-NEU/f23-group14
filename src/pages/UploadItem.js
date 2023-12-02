import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./UploadItem.css";

const ListingItem = () => {
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(null);
  const { listingId } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const { data, error } = await supabase
          .from("listings")
          .select("*")
          .eq("listing_id", listingId)
          .single();

        if (error) throw error;

        setListing(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchListing();
  }, [listingId]);

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  if (!listing) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="item-title">{listing.title}</h2>
      <img className="image" src={listing.clothing_image} alt={listing.title} />
      <p className="description">{listing.item_description}</p>
      <p className="detail">
        <strong>Category:</strong> {listing.type}
      </p>
      <p className="detail">
        <strong>Color:</strong> {listing.color}
      </p>
      <p className="detail">
        <strong>Size:</strong> {listing.size}
      </p>
      <p className="detail">
        <strong>Condition:</strong> {listing.wear}
      </p>
      <p className="detail">
        <strong>Status:</strong> {listing.status}
      </p>
      <p className="detail">
        <strong>Posted on:</strong>{" "}
        {new Date(listing.created_at).toLocaleDateString()}
      </p>
    </div>
  );
};
