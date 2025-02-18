import React, { useContext } from "react";
import UserContext from "./Hooks/UseContext/context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="h-40 !ml-20 " id="hell">
      <hr />
      <h1>Profile: Hello {user?.username}</h1>
    </div>
  );
};

export default Profile;
