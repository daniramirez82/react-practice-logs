/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classes from'./ButtonLarge.module.css';

export default function ButtonLarge({ type, disabled, children, isClear, isOuterLine }) {

  return <button className={`${classes.button} 
                              ${(isClear && `${classes["button-clear"]}`)}
                              ${(isOuterLine && `${classes["outer-line"]}`)}`} 
                            
                            
                              type={type} 
                            disabled={disabled}>
                              
                              { children }
          </button>;
}
ButtonLarge.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  isClear : PropTypes.bool,
  isOuterLine: PropTypes.bool,

};
