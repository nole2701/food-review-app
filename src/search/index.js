import React from "react";
import RestaurantList from "./restaurant-list";

const Search = () => {
  return (
    <div>
      <h1 className="mt-3">Search for restaurants</h1>
      <hr style={{ margin: 20 }} />
      <div className="container">
        <RestaurantList />
      </div>
    </div>
  );
};
export default Search;
