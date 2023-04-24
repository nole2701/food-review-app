import React from "react";

const RestaurantPage = ({
  restaurant = {
    id: "1",
    name: "ExampleRestaurant",
    image: "/images/default-restaurant.png",
    cuisine: "Test",
    rating: "0",
  },
}) => {
  //const dispatch = useDispatch();
  return (
    <div className="row">
      <div className="row">
        <div className="col-2">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="restaurant-image"
          />
        </div>

        <div className="col-2">
          <div className="col-xl-12">
            <h2 className="restaurant-name">{restaurant.name}</h2>
            <div className="col-xl-12">Summary: {restaurant.summary}</div>
          </div>
          <div className="restaurant-rating">Rating: ★{restaurant.rating}</div>
        </div>
      </div>

      {/*    <div className="restaurant-details">*/}
      {/*    */}

      {/*</div>*/}
      {/*    */}

      {/*    <p className="restaurant-summary">{restaurant.summary}</p>*/}
      {/*    <div className="restaurant-rating">*/}
      {/*        <span className="rating-stars">★</span>*/}
      {/*        <span className="rating-number">{restaurant.rating}</span>*/}
      {/*    </div>*/}
    </div>
  );
};
//     return (
//         <div className="p-3 col">
//             <h1>{restaurant.name}</h1>
//             <img
//                 src={restaurant.image}
//                 className="card-img-top"
//                 alt={restaurant.name}
//             />
//             {restaurant.summary}
//             {/*<div className="card" style={{ width: "20em" }}>*/}
//
//             {/*    <div className="card-body">*/}
//             {/*        <h5 className="card-title">{restaurant.name}</h5>*/}
//             {/*        <p className="card-text">{restaurant.summary}</p>*/}
//             {/*        <p className="card-text">{restaurant.rating} ☆</p>*/}
//             {/*        <a href="#" className="btn btn-success">*/}
//             {/*            See Reviews*/}
//             {/*        </a>*/}
//             {/*    </div>*/}
//             {/*</div>*/}
//         </div>
//     );
// };
export default RestaurantPage;
