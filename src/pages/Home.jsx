import React, {useContext, useEffect} from "react";
import {UserContext} from "../wrappers/AuthWrapper";
import { FlowContext } from "../wrappers/FlowWrapper";
import PageTitles from '../components/ui/PageTitles'
const Home = ()=>{
    const {userInfo} = useContext(UserContext);
    const {setPageFlow} = useContext(FlowContext);

    useEffect(()=>{
        setPageFlow(3)
    },[])
    
    console.log(userInfo);

    return (
        <PageTitles title={`Welcome back ${userInfo.user}`}/>
    )
}

export default Home;