import React from "react";
import "./home.css";

const RestaurantSummaryItem = ({
  restaurant = {
    name: "Restaurant",
    image: "default-restaurant.png",
    cuisine: "Chicken, Fast Food, Sandwiches",
    avgRating: 0,
  },
}) => {
  return (
    <div className="p-3 col">
      <div className="card" style={{ width: "20em", height: "22em" }}>
        <img
          src={`/images/${restaurant.image}`}
          onError={({ target }) => {
            target.onerror = null;
            target.src = "/images/default-restaurant.png";
          }}
          className="card-img-top restaurant-image"
          alt={restaurant.name}
        />
        <div className="card-body">
          <h5 className="card-title">{restaurant.name}</h5>
          <p className="card-text">{restaurant.cuisine}</p>
          <p className="card-text">{restaurant.avgRating} ☆</p>
          <a href="#" className="btn btn-success">
            See Reviews
          </a>
        </div>
      </div>
    </div>
  );
};
export default RestaurantSummaryItem;
