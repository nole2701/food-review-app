import React from "react";
import { useDispatch } from "react-redux";

const RestaurantSummaryItem = ({
  restaurant = {
    id: "1",
    name: "Restaurant",
    image: "/images/default-restaurant.png",
    summary: "Chicken, Fast Food, Sandwiches",
    rating: "0",
  },
}) => {
  //const dispatch = useDispatch();
  return (
    <div className="p-3 col">
      <div className="card" style={{ width: "20em" }}>
        <img
          src={restaurant.image}
          className="card-img-top"
          alt={restaurant.name}
        />
        <div className="card-body">
          <h5 className="card-title">{restaurant.name}</h5>
          <p className="card-text">{restaurant.summary}</p>
          <p className="card-text">{restaurant.rating} ☆</p>
          <a href="#" className="btn btn-success">
            See Reviews
          </a>
        </div>
      </div>
    </div>
  );
};
export default RestaurantSummaryItem;
