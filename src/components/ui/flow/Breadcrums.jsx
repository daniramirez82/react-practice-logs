import React from "react";
import PropTypes from 'prop-types';
import classes from './Breadcrums.module.css'

const Breadcrums =({actualStep, totalSteps})=>{
    return (
        <div className={classes.breadcrums}>
            <span className={`${classes.breadcrums} ${classes['breadcrums-strong']}`}> Step {actualStep}</span>
            <span className={classes.breadcrums}> of {totalSteps}</span>
      </div>
    )
}

Breadcrums.proptype = {
    actualStep: PropTypes.number.isRequired,
    totalSteps: PropTypes.number.isRequired,
}

export default Breadcrums;