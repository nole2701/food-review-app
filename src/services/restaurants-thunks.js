import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./restaurants-service";

export const findRestaurantsThunk = createAsyncThunk(
  "restaurants/findRestaurants",
  async () => await service.findRestaurants()
);

export const findRestaurantByNameThunk = createAsyncThunk(
  "restaurants/findRestaurantByName",
  async (name) => await service.findRestaurantByName(name)
);

export const findRestaurantByIdThunk = createAsyncThunk(
  "restaurants/findRestaurantById",
  async (id) => await service.findRestaurantById(id)
);
