// This servers as wrapper which helps the other components to be aware of the context

import React from "react";

const UserContextProvider = ({ children }) => {
  return <div> {children} </div>;
};

export default UserContextProvider;
