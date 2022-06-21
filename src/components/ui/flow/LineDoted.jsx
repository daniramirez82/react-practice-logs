import React from "react";
import PropTypes from 'prop-types';
import classes from './LineDoted.module.css';

const LineDoted = ()=>{
    return ( 
    <div className={classes["line-cont"]}>
      <svg width="100%" height="2" viewBox={`0 0 100% 2`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={`M1 1H550`} stroke="#D5EF9A" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="3,3"/>
      </svg>
    </div>)
}

LineDoted.proptype= {
  widthLine : PropTypes.string.isRequired,
  key : PropTypes.string.isRequired,
}

export default LineDoted;