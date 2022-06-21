import React from "react";
import classes from './Line.module.css';
import PropTypes from 'prop-types';

const Line = ({widthLine})=>{
    return (
   <div className={classes['line-cont']}>
    {/* <svg width= {widthLine} height="2" viewBox={`0 0 ${widthLine} 2`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={`M1 1H${widthLine}`} stroke="#D5EF9A" strokeWidth="0.7" strokeLinecap="round"/>
    </svg> */}

      <svg width="100%" height="2" viewBox="0 0 100% 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H550" stroke="#D5EF9A" strokeWidth="0.7" strokeLinecap="round"/>
      </svg>
    </div>)
}
Line.proptype= {
  widthLine: PropTypes.string.isRequired,
}

export default Line;