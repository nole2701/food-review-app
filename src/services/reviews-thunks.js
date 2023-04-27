import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./reviews-service";

export const findReviewsThunk = createAsyncThunk(
  "restaurants/findReviews",
  async () => await service.findReviews()
);

export const findRestaurantReviewsThunk = createAsyncThunk(
  "restaurants/findRestaurantReviews",
  async (name) => await service.findRestaurantReviews(name)
);
