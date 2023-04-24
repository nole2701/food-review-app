import { createSlice } from "@reduxjs/toolkit";
import { findRestaurantsThunk } from "../services/restaurants-thunks";

const initialState = {
  restaurants: [],
  loading: false,
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  extraReducers: {
    [findRestaurantsThunk.pending]: (state) => {
      state.loading = true;
      state.restaurants = [];
    },
    [findRestaurantsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.restaurants = payload;
    },
    [findRestaurantsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default restaurantsSlice.reducer;
