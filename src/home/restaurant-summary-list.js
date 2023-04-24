import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantSummaryItem from "./restaurant-summary-item";
import { findRestaurantsThunk } from "../services/restaurants-thunks";

const RestaurantSummaryList = () => {
  const { restaurants, loading } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findRestaurantsThunk());
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4">
      {loading && <p>Loading...</p>}
      {restaurants.slice(0, 12).map((restaurant) => (
        <RestaurantSummaryItem key={restaurant._id} restaurant={restaurant} />
      ))}
    </div>
  );
};
export default RestaurantSummaryList;
