import React, { useReducer} from "react";
import AuthContext from "../store";
import { userReducer } from "../helpers/reducers";

const initialState = {
  isLoggedIn: false,
  user: "",
  password: "",
};

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
  };
  return (
    <AuthContext.Provider value={{ userInfo, logOff, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;
