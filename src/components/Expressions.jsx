import React from "react";

const Expressions = () => {
  const username = "john Doe";
  const sum = (a, b) => a + b;

  const message = <p> Hello from Jsx</p>;

  return (
    <div>
      <p>{username}</p>
      <p>The sum is:{sum(2, 4)}</p>
      <div>{message}</div>
    </div>
  );
};

export default Expressions;
