// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./login.css"; // eslint-disable-next-line
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../services/auth-thunks";
function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = () => {
    dispatch(updateUserThunk(profile));
  };
  // useEffect(async () => {
  //   setProfile(await dispatch(profileThunk()));
  // }, []);
  return (
    <div className="profile-body">
      <h1>Profile Screen</h1>
      <div>
        <div className="m-2">
          <label className="m-2">First Name</label>
          <input
            type="text"
            value={profile.firstName}
            onChange={(event) => {
              const newProfile = {
                ...profile,
                firstName: event.target.value,
              };
              setProfile(newProfile);
            }}
          />
        </div>
        <div className="m-2">
          <label className="m-2">Last Name</label>
          <input
            type="text"
            value={profile.lastName}
            onChange={(event) => {
              const newProfile = {
                ...profile,
                lastName: event.target.value,
              };
              setProfile(newProfile);
            }}
          />
        </div>
      </div>
      <button
        className="m-2"
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/login");
        }}
      >
        Logout
      </button>
      <button onClick={save}>Save</button>

      <div>
        <b>
          <span>Username: </span>
        </b>
        {profile.username}
      </div>
      <div>
        <b>
          <span>Account Creation Date: </span>
        </b>
        {profile.createdAt.split("T")[0]}
      </div>
      <div>
        <b>
          <span>Restaurant Owner: </span>
        </b>
        {profile.isRestaurantOwner ? "Yes" : "No"}
      </div>
      <div className="form-group justify-content-center row">
        <br></br>
        <div className="col-6">
          <b>
            <span>About Me: </span>
          </b>
          <br></br>
          <textarea
            className="form-control input-lg"
            type="text"
            value={profile.about}
            onChange={(event) => {
              const newProfile = {
                ...profile,
                about: event.target.value,
              };
              setProfile(newProfile);
            }}
          />
        </div>
      </div>
    </div>
  );
  // see below
}
export default ProfileScreen;
