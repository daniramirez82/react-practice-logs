import { createContext } from "react";

const AuthContext = createContext( {
    isLoggedIn : false,
    logIn : ()=>{},
    logOff :()=>{},
});


export default AuthContext;