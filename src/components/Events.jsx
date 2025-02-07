import React from "react";

const Events = () => {
  const handleClick = function () {
    console.log("clicked");
  };
  const handleSum = (a, b) => {
    alert(a + b);
  };
  return (
    <div className="w-full bg-pink-500 h-60 flex  flex-col justify-center ">
      <button className="bg-red-500 !p-4 px-16 btn" onClick={handleClick}>
        Click Here
      </button>
      <button onClick={() => handleSum(3, 6)}>Sum Add</button>
    </div>
  );
};

export default Events;
