import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import "./login.css";
import { loginThunk } from "../services/auth-thunks"; // Add a login thunk
function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const handleLogin = async () => {
      try {
        await dispatch(loginThunk({ username, password }));
        navigate("/profile");
      } catch (e) {
        alert(e);
      }
    };
  return (
    <div className="login-body">
      <h1>Login Screen</h1>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default LoginScreen;
