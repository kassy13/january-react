import React, { useContext } from "react";
import UserContext from "./UserContext";

const MyChild = ({ children }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="h-96 !ml-20">
      {" "}
      {children} my child {user?.username}
    </div>
  );
};

export default MyChild;
