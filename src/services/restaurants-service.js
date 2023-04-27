import axios from "axios";
const API_BASE = "http://localhost:4000";
const RESTAURANTS_API = `${API_BASE}/api/restaurants`;

export const findRestaurants = async () => {
  const response = await axios.get(RESTAURANTS_API);
  return response.data;
};

export const findRestaurantByName = async (name) => {
  const response = await axios.get(`${RESTAURANTS_API}/${name}`);
  return response.data;
};

export const findRestaurantById = async (id) => {
  const response = await axios.get(`${RESTAURANTS_API}/id/${id}`);
  console.log(`Getting data for restaurant: ", ${response.data._id}`);
  console.log(response.data);
  return response.data;
};
