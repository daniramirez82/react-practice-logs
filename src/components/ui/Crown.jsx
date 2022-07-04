import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import classes from './Crown.module.css'

const Crown = () => {

    return <div className={classes.main}>
        <p>Corona</p>
        <div className={classes.corner}>
            <div className={classes['number-cont']}>
                <span className={classes.number}>1</span>
            </div>
        </div>

    </div>

}

export default Crown;