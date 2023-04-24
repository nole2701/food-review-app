import React from "react";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navigation/navbar";
import Search from "./search";
import Home from "./home";
import LoginScreen from "./login/login-screen";
import ProfileScreen from "./login/profile-screen";
import Restaurant from "./restaurant";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./reducers/restaurants-reducer";
import authReducer from "./reducers/auth-reducer";
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
            <Route path="/restaurant" element={<Restaurant />} />
          </Routes>
        </Router>
      </Provider>
    </div>
    </Provider>
  );
}

export default App;
