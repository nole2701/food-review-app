import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./login.css";
import { profileThunk, logoutThunk, updateUserThunk }
    from "../services/auth-thunks";
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
        <div>
          <label>First Name</label>
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
        <div>
          <label>Last Name</label>
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
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/login");
        }}>
        Logout</button>
      <button onClick={save}>Save</button>

      <div>
          <b><span>Username: </span></b>
          {profile.username}
        </div>
        <div>
        <b><span>Date of Birth: </span></b>
          {profile.dob}
        </div>
        <div>
        <b><span>Account Creation Date: </span></b>
          {profile.createdAt.split("T")[0]}
        </div>
        <div>
        <b><span>Restaurant Owner: </span></b>
          {profile.restaurantOwner ? "No" : "Yes"}
        </div>
        <div><br></br>
        <b><span>About Me: </span></b><br></br>
          {profile.about}
        </div>
    </div>
  );
  // see below
}
export default ProfileScreen;
