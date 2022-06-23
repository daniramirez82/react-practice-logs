import React from "react";
import {Link} from 'react-router-dom';
import Titles from "../components/ui/PageTitles";
import Button from "../components/ui/Button";
import classes from './Wellcome.module.css'


const Wellcome = ()=>{
    return(
        <div className={classes['wellcome-wrapper']}>
        <Titles title="wellcome again :)" />
        <div className={classes.buttons}>
        <Button type ={'button'} isClear={false}>Register </Button>
        <Link  to={'/Step2'}> <Button type="button" isClear={false}>Login</Button></Link>
        </div>
        </div>
    )
}

export default Wellcome;