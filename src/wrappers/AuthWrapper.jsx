import React, { useState } from "react";
import AuthContext from "../store";

const [isLoggedIn, setLog] = useState(false);

const logOff = () => {
  setLog(false);
};

const logIn = () => {
  setLog(true);
};

const AuthWrapper = ({ children }) => {
  return (
    <AuthContext.Provider value={{ isLoggedIn, logOff, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;
