import React from "react";
import PropTypes from 'prop-types';
import classes from './LineDoted.module.css';

const LineDoted = ({widthLine})=>{
    return ( 
    <div className={classes["line-cont"]}>
      <svg width={widthLine} height="2" viewBox={`0 0 ${widthLine} 2`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={`M1 1H${widthLine}`} stroke="#D5EF9A" stroke-width="0.7" stroke-linecap="round" stroke-dasharray="3,3"/>
      </svg>
    </div>)
}

LineDoted.proptype= {
  widthLine : PropTypes.string.isRequired,
}

export default LineDoted;