import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navigation/navbar";
import Search from "./search";
import Home from "./home";
import LoginScreen from "./login/login-screen";
import ProfileScreen from "./login/profile-screen";
import RegisterScreen from "./login/register-screen";
import Restaurant from "./restaurant";
import restaurantsReducer from "./reducers/restaurants-reducer";
import authReducer from "./reducers/auth-reducer";
import RestaurantPage from "./restaurant/restaurant-page";
const store = configureStore({
  reducer: { user: authReducer, restaurants: restaurantsReducer },
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Provider store={store}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/restaurant/:resId" element={<RestaurantPage />} />
            </Routes>
          </Router>
        </Provider>
      </div>
    </Provider>
  );
}

export default App;
