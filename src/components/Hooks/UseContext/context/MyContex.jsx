// This servers as wrapper which helps the other components to be aware of the context

import React, { useState } from "react";
import UserContext from "./UserContext";

const MyContex = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default MyContex;
