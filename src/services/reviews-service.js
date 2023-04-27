import axios from "axios";
const API_BASE = "http://localhost:4000";
const RESTAURANTS_API = `${API_BASE}/api/reviews`;

export const findReviews = async () => {
  const response = await axios.get(RESTAURANTS_API);
  return response.data;
};

export const findRestaurantReviews = async (resId) => {
  const response = await axios.get(`${RESTAURANTS_API}/${resId}`);
  return response.data;
};
