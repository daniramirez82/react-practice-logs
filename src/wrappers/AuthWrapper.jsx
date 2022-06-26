import React, { useState } from "react";
import AuthContext from "../store";

const AuthWrapper = ({ children }) => {
  const [isLoggedIn, setLog] = useState(false);

  const logOff = () => {
    console.log('logoff ran')
    setLog(false);
  };

  const logIn = () => {
    setLog(true);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, logOff, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;
