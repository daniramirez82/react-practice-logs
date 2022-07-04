import React, { createContext, useMemo, useReducer} from "react";
import { userReducer } from "../helpers/reducers";

const initialState = {
  isLoggedIn: false,
  user: "Danilo",
  password: "daniloZZZ",
};

const UserContext = createContext();


const AuthWrapper = ({ children }) => {
  
  const [userInfo, dispatch] = useReducer(userReducer, initialState);

  const logOff = () => {
    console.log("logoff ran");
    dispatch({
      type: "LOG_OUT",
    });
  };

  const logIn = (info) => {
    dispatch({ ...info, type: "NEW_USER" });
    console.log('logIn ran :', info);
  };


  const value = useMemo(
    ()=>({userInfo, logOff, logIn}),[userInfo]);
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export {AuthWrapper, UserContext};
