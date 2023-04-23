import React from "react";
import "./home.css";
import RestaurantSummaryList from "./restaurant-summary-list";

const Home = () => {
  return (
    <div>
      <img
        className="home-image"
        src="/images/neu campus.png"
        width="100%"
        height="450px"
        alt="NEU Campus"
      ></img>
      <h1 className="mt-3">Featured:</h1>
      <hr style={{ margin: 20 }} />
      <div className="container">
        <RestaurantSummaryList />
      </div>
    </div>
  );
};
export default Home;
