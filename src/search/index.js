import React from "react";
import RestaurantList from "./restaurant-list";
import "./search.css";

const Search = () => {
  return (
    <div className="search-body">
      <div className="d-flex justify-content-between align-center">
        <h1 className="ms-5 text-start">Search for restaurants</h1>
      </div>

      <hr style={{ margin: 20 }} />
      <div className="container">
        <RestaurantList />
      </div>
    </div>
  );
};
export default Search;
