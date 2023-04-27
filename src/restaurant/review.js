import React from "react";

const Review = ({ review }) => {
  return (
    <li className="list-group-item restaurant-item d-flex justify-content-between">
      <div className="text-start p-2 align-items-center">
        <h5 className="card-title">{review.Number}</h5>
        <p className="card-text">{review.userId}</p>
        <p className="card-text">{review.reviewText} ☆</p>
      </div>
      <div className="d-flex">
        <img
          className="search-image rounded float-right"
          src={`/images/${review.image}`}
          onError={({ target }) => {
            target.onerror = null;
            target.src = "/images/default-restaurant.png";
          }}
          alt={review.userId}
        />
      </div>
    </li>
  );
};
export default Review;
