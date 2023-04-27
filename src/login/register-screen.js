import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import "./login.css";
import { registerThunk } from "../services/auth-thunks"; // Add a login thunk
function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isRestaurantOwner, setIsRestaurantOwner] = useState(false);
  const [about, setAbout] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const handleRegister = async () => {
      try {
        await dispatch(registerThunk({ username, password, firstName, lastName, isRestaurantOwner, about}));
        navigate("/profile");
      } catch (e) {
        alert(e);
      }
    };
  return (
    <div className="login-body">
      <h1>Register Screen</h1>
      <div className="m-2">
        <label className="m-2">Username</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="m-2">
        <label className="m-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="m-2">
        <label className="m-2">First Name</label>
        <input
          type="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div className="m-2">
        <label className="m-2">Last Name</label>
        <input
          type="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div className="form-check form-switch row d-flex justify-content-center m-2">
        <label className="form-check-label col-2" for="flexSwitchCheckDefault">Is Restaurant Owner</label>
        <input
            className="form-check-input col-2"
            type="checkbox"
            value={isRestaurantOwner}
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={(event) => {setIsRestaurantOwner(event.target.checked);
                console.log(isRestaurantOwner);}
                }
        />
        </div>
        <div className="form-group justify-content-center row">
            <div className="col-6 mb-2">
            <textarea className="form-control input-lg"
            type="text"
            placeholder="About Me"
            onChange={(event) => setAbout(event.target.value)}
            />
            </div>
        </div>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
export default RegisterScreen;
