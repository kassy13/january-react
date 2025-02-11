import React, { useState } from "react";
import { RiCloseFill, RiMenu2Fill } from "react-icons/ri";

const StateTwo = () => {
  const [istrue, setIstrue] = useState(false);
  console.log(istrue);

  const handleMenu = () => {
    setIstrue(!istrue);
  };
  return (
    <section className="flex flex-col justify-between items-center !pb-12 relative">
      <div
        className={`flex flex-col justify-between items-center absolute bg-red-500 text-white w-[600px] top-10 !transition  right-full h-screen ${
          istrue ? "!right-0" : "r!ight-full"
        }`}
      >
        <h1>Side Bar</h1>
        <span>
          <RiCloseFill />
        </span>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <button
        onClick={handleMenu}
        className="bg-black text-white z-[99999] absolute right-0 top-0  "
      >
        {" "}
        <RiMenu2Fill size={30} />
      </button>
    </section>
  );
};

export default StateTwo;
