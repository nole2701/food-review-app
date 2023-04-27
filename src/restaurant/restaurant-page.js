import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findRestaurantById } from "../services/restaurants-service";
import "./restaurant.css";
import Reviews from "./reviews";

const RestaurantPage = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    findRestaurantById(resId).then((restaurant) => setRestaurant(restaurant));
  }, [resId]);
  return (
    <div className="container restaurant-body border p-4 rounded text-start">
      <img
        src={`/images/${restaurant.image}`}
        onError={({ target }) => {
          target.onerror = null;
          target.src = "/images/default-restaurant.png";
        }}
        maxHeight="600px"
        className="restaurant-image rounded"
        alt={restaurant.name}
      />
      <div className="card-body">
        <h1 className="">{restaurant.name}</h1>
        <h3 className="">{restaurant.cuisine}</h3>
      </div>

      <div className="restaurant-details">
        <p className="card-text">
          <strong>Address:</strong> {restaurant.address}
        </p>
        <p className="card-text">
          <strong>Hours:</strong> {restaurant.openingHours}
        </p>
        <p className="card-text">{restaurant.description}</p>
      </div>

      <hr />
      <div className="restaurant-rating">
        <p className="card-text">
          Current rating: {Math.round(restaurant.avgRating * 10) / 10} ☆ (
          {restaurant.numReviews} ratings)
        </p>
        <span className="rating-number">{restaurant.rating}</span>
      </div>
      <div>
        <h3>Reviews</h3>
        <Reviews />
      </div>
    </div>
  );
};
export default RestaurantPage;
