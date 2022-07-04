import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../wrappers/AuthWrapper";
import { FlowContext } from "../wrappers/FlowWrapper";
import PageTitles from '../components/ui/PageTitles'
import Card from '../components/Card'
const Home = () => {
    const { userInfo } = useContext(UserContext);
    const { setPageFlow } = useContext(FlowContext);
    const [userPic, setUserPic] = useState();

    useEffect(() => {
        setPageFlow(3);
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                setUserPic(`${data.results[0].picture.large}`);
            }).catch(err=>{
                console.log(err);
                setUserPic('/img/logo192.png');
            });
    }, [])

    console.log(userInfo);

    return (<>
        <PageTitles title={`Welcome back ${userInfo.user}`} />
        <Card user={userInfo.user} userPic ={userPic}  />
    </>
    )
}

export default Home;