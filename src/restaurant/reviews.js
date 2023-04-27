import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findRestaurantReviewsThunk } from "../services/reviews-thunks";
import Review from "./review";

const Reviews = () => {
  const { reviews, setReviews } = useSelector((state) => state.restaurants);

  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findRestaurantReviewsThunk());
  }, []);

  return (
    <div>
      <ul className="list-group">{reviewList}</ul>
    </div>
  );
};
export default Reviews;

const reviewList = (reviews) => {
  if (reviews.length === 0) {
    return <li className="list-group-item">No reviews found</li>;
  } else {
    return reviews.map((review) => <Review key={review._id} review={review} />);
  }
};
