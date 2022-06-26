import { createContext } from "react";

const AuthContext = createContext( {
    userInfo : {},
    logIn : ()=>{},
    logOff :()=>{},
});


export default AuthContext;