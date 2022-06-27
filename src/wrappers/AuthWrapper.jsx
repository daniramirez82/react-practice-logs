import React, { useReducer, useMemo} from "react";
import AuthContext from "../store";
import { userReducer } from "../helpers/reducers";

const initialState = {
  isLoggedIn: false,
  user: "Danilo",
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
    console.log('logIn ran :', info);
  };

  const value = useMemo(()=>(userInfo, logOff, logIn),[userInfo]);
  
  return (
    <AuthContext.Provider value={value}>
      <p>Usuario: {userInfo.user}</p>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthWrapper;
