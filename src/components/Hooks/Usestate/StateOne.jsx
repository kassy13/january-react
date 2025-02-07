import React, { useState } from "react";

const StateOne = () => {
  //   const arr = useState();
  //   console.log(arr);
  const [test, setTest] = useState(0);

  //The initial state of test will be zero untill we start increment or decrementing

  const handleIncr = () => {
    setTest((count) => count + 1);
  };
  const reset = () => {
    setTest(0);
  };
  //   let count = 0;
  //   const incrememt = () => {
  //     count++;
  //     console.log("count", count);
  //   };
  return (
    <div className="!ml-40 !my-40">
      <h1>First State</h1>
      <button className="bg-green-400 !p-3 px-20 rounded" onClick={handleIncr}>
        +
      </button>
      <button className="bg-red-400 !p-3 px-20 rounded">-</button>
      <button
        className="bg-black !p-3 px-20 rounded text-white"
        onClick={reset}
      >
        Reset
      </button>

      <div>
        <h1>Count from Javascript</h1>
        <h2>Counter</h2>
        <p>Count:{test}</p>
      </div>
    </div>
  );
};

export default StateOne;
