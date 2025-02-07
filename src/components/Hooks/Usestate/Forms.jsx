import React, { useState } from "react";

const Forms = () => {
  const [username, setuserName] = useState("");

  const handleChange = (e) => {
    setuserName(e.target.value);
    console.log(username);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setuserName("");
    alert(username);
  };

  return (
    <div className="!ml-40 !my-40">
      <p>Input form</p>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border "
          placeholder="Enter Username"
          value={username}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Forms;
