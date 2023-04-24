import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantItem from "./restaurant-item";
import { findRestaurantsThunk } from "../services/restaurants-thunks";

const getFilteredRestaurants = (query, restaurants) => {
  if (!query) {
    return restaurants;
  }
  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(query.toLowerCase())
  );
};

const RestaurantList = () => {
  const { restaurants, loading } = useSelector((state) => state.restaurants);

  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findRestaurantsThunk());
  }, []);

  const filteredRestaurants = getFilteredRestaurants(query, restaurants);
  return (
    <>
      <div class="input-group rounded mb-3">
        <input
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="bi bi-search"></i>
        </span>
      </div>
      <ul className="list-group">
        {loading && <li className="list-group-item">Loading...</li>}
        {filteredRestaurants.map((restaurant) => (
          <RestaurantItem key={restaurant._id} restaurant={restaurant} />
        ))}
      </ul>
    </>
  );
};
export default RestaurantList;
