import React from "react";
import "./search.css";
import { Link } from "react-router-dom";

const RestaurantItem = ({
  restaurant = {
    name: "Restaurant",
    image: "default-restaurant.png",
    cuisine: "Chicken, Fast Food, Sandwiches",
    avgRating: 0,
  },
}) => {
  return (
    <>
      <Link
        to={`/restaurant/${restaurant._id}`}
        style={{ textDecoration: "none" }}
      >
        <li className="list-group-item restaurant-item d-flex justify-content-between">
          <div className="text-start p-2 align-items-center">
            <h5 className="card-title">{restaurant.name}</h5>
            <p className="card-text">{restaurant.cuisine}</p>
            <p className="card-text">{restaurant.avgRating} ☆</p>
          </div>
          <div className="d-flex">
            <img
              className="search-image rounded float-right"
              src={`/images/${restaurant.image}`}
              onError={({ target }) => {
                target.onerror = null;
                target.src = "/images/default-restaurant.png";
              }}
              alt={restaurant.name}
            />
          </div>
        </li>
      </Link>
    </>
  );
};
export default RestaurantItem;
