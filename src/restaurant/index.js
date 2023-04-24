import React from "react";
import RestaurantPage from "./restaurant-page";

const Restaurant = () => {
  return (
    <div>
      <img
        className="home-image"
        src="/images/neu campus.png"
        width="100%"
        height="450px"
      ></img>
      {/*<h1 className="mt-3">Popeyes</h1>*/}
      <hr style={{ margin: 20 }} />
      <div className="container">
        <RestaurantPage />
        {/*<RestaurantSummaryList />*/}
      </div>
    </div>
  );
};
export default RestaurantPage;
