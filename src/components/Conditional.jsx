import React from "react";

const Conditional = () => {
  const isTrue = true;
  //   return <div>gf</div>;

  //   if (isTrue) {
  //     return (
  //       <button className="bg-yellow-600 text-white rounded !py-2 !px-10">
  //         Logout
  //       </button>
  //     );
  //   } else {
  //     return <button className="bg-red-400 text-white !p-2 !px-10">Login</button>;
  //   }
  return (
    // <button
    //   className={
    //     isTrue ? "bg-red-400 !p-4 text-white" : "bg-green-600 !p-4 text-white"
    //   }
    // >
    //   {isTrue ? "Logout" : "Login"}
    // </button>
    <button className={isTrue && "bg-amber-400"}>Logout</button>
  );
};

export default Conditional;
