import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantSummaryItem from "./restaurant-summary-item";

const RestaurantSummaryList = () => {
  // const { restaurants, loading } = useSelector((state) => state.restaurants);
  // useEffect(() => {
  //   dispatchEvent(findRestaurantsThunk());
  // }, []);

  // Query the database for 12 random restaurants with a score of 4 or higher idk, it looks good on the page
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4">
      {/* {loading && <p>Loading...</p>}
    {Restaurants.map((restaurant) => (
      <RestaurantSummaryItem />
    ))} */}
      <RestaurantSummaryItem />
      <RestaurantSummaryItem />
      <RestaurantSummaryItem />
      <RestaurantSummaryItem />
      <RestaurantSummaryItem />
      <RestaurantSummaryItem />
      <RestaurantSummaryItem />
      <RestaurantSummaryItem />
      <RestaurantSummaryItem />
      <RestaurantSummaryItem />
      <RestaurantSummaryItem />
      <RestaurantSummaryItem />
    </div>
  );
};
export default RestaurantSummaryList;
