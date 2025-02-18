import React, { useContext, useState } from "react";
import UserContext from "./Hooks/UseContext/context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username });
  };
  return (
    <div className="!ml-20">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-gray-200"
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-gray-200"
      />
      <button onClick={handleSubmit} className="bg-red-400">
        Submit
      </button>
    </div>
  );
};

export default Login;
