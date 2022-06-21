import React from "react";
import PropsTypes from 'prop-types';
import classes from './CircleDisabled.module.css';


const CircleDisabled = ({number})=>{

    return (
        <div>
          <div className={classes.circle}>
            <span className={classes.number}>{number}</span>
          </div>
        </div>
    )
}


CircleDisabled.propstype = {
    number: PropsTypes.number.isRequired,
}

export default CircleDisabled;