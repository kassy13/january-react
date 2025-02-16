import React, { useEffect, useState } from "react";

const EffectTwo = () => {
  const [usersList, setUsersList] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const handleApiFetch = async () => {
    try {
      const data = await fetch(url);
      const result = await data.json();
      console.log("result", result);
      setUsersList(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // fetch(url)
    //   .then((data) => data.json())
    //   .then((result) => setUsersList(result));
    handleApiFetch();
  }, []);
  return (
    <div>
      <h1>Effect Two</h1>
      <main>
        {usersList.map((user) => (
          <>
            <p key={user.id}>{user.name} </p>
            <h1>{user.phone}</h1>
          </>
        ))}
      </main>
    </div>
  );
};

export default EffectTwo;
