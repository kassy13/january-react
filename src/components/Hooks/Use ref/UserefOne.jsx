import React, { useRef } from "react";

const UserefOne = () => {
  const btnRef = useRef(null);
  console.log(btnRef);
  const handleClick = () => {
    btnRef.current.textContent = "Dont Submit";
    btnRef.current.classList.add("toggle");
  };
  return (
    <div className="!ml-20 h-40">
      <h1>Use ref</h1>
      <button
        className="bg-red-500 text-white text-3xl"
        ref={btnRef}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
};

export default UserefOne;
