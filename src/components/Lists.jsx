import React from "react";

const Lists = () => {
  const names = ["Jonh Doe", "John SMith", "Bat Man"];
  return (
    <div>
      {/* {names.map((num, index) => {
        return (
          <ul key={index}>
            <li>{num}</li>
          </ul>
        );
      })} */}
      <ul>
        {names.map((num, index) => {
          return <li key={index}>{num}</li>;
        })}
      </ul>
    </div>
  );
};

export default Lists;
