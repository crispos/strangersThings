import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { loginUser, registerUser } from "../api";

const UserForm = ({ formType }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = formType === "login";

  const title = isLogin ? "Login" : "Register";
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = isLogin ? await loginUser(username, password) : await registerUser(username, password)
    const token = data?.token;

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("username", username)

      setUsername("");
      setPassword("");
      navigate("/");
    }
  };
  return (
    <div id="registerEntries">
      <h4 className="page-title">{title}</h4>
      <form onSubmit={handleSubmit}>
        <input className="userinput"
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input className="userinput"
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">{title}</button>
      </form>
    </div>
  );
};
  
export default UserForm