import React, { useEffect, useState } from "react";

const EffectOne = () => {
  const [counter, setCounter] = useState(0);
  //   When you a parent has a state , the usual behaviour is that once the state is updated , the children components are going to be rendered
  //   url for your api call =https://www.jsonplaceholder.org/
  return (
    // Parent component
    <div className="!px-20">
      <h1>Useefect hook</h1>
      <button onClick={() => setCounter((value) => value + 1)}>+</button>
      <h4>Useeffect counter:{counter}</h4>
      <User />
      {/* <User2 /> */}
      {counter > 5 && <User2 counter={counter} />}
    </div>
  );
};

export default EffectOne;

const User = () => {
  console.log("user component was rendered on every render");
  return <div>User Component without use effect</div>;
};

const User2 = ({ counter }) => {
  useEffect(() => {
    console.log("user component was rendered once");
  }, [counter]);
  return <h1>Component with Useefect</h1>;
};
