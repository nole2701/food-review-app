import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./restaurants-service";

export const findRestaurantsThunk = createAsyncThunk(
  "restaurants/findRestaurants",
  async () => await service.findRestaurants()
);
