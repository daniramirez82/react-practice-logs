import React from "react";
import PropsTypes from 'prop-types';
import classes from './CircleActive.module.css';


const CircleActive = ({activeNumber})=>{

    return (
        <div>
          <div className={classes.circle}>
            <span className={classes.number}>{activeNumber}</span>
          </div>
        </div>
    )
}


CircleActive.propstype = {
    activeNumber: PropsTypes.number.isRequired,
}

export default CircleActive;