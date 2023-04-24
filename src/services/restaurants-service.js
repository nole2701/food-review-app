import axios from "axios";
const API_BASE = "http://localhost:4000";
const RESTAURANTS_API = `${API_BASE}/api/restaurants`;

export const findRestaurants = async () => {
  const response = await axios.get(RESTAURANTS_API);
  return response.data;
};
