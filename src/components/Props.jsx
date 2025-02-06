import React from "react";

const Props = (prop) => {
  console.log(prop);
  return (
    <div>
      <p>Name: {prop.text}</p>
      <p>Age:</p>
      <p>Occupation:</p>
      <img src="" alt="" />
      <h3>Hobbies</h3>
    </div>
  );
};

export default Props;
