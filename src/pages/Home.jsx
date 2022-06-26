import React, {useContext} from "react";
import AuthContext from "../store";

const Home = ()=>{
    const logContext = useContext(AuthContext);
    console.log(logContext);

    return (
        <p>{logContext.user}</p>
    )
}

export default Home;