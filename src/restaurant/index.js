import React from "react";
import RestaurantPage from "./restaurant-page";

const Restaurant = () => {
  return (
    <div>
      {/*<h1 className="mt-3">Popeyes</h1>*/}
      <hr style={{ margin: 20 }} />
      <div className="container">
        <RestaurantPage />
        {/*<RestaurantSummaryList />*/}
      </div>
    </div>
  );
};
export default Restaurant;
