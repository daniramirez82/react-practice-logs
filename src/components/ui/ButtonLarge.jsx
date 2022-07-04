/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './ButtonLarge.module.css';

export default function ButtonLarge({ type, disabled, children, isClear, isOuterLine, isGrey }) {

  return <button className={`${classes.button} 
                              ${(isOuterLine && `${classes["button-outer-line"]}`)}
                              ${(isClear && `${classes["button-clear"]}`)}
                              ${(isGrey && `${classes["button-gray"]}`)}`}

    type={type}
    disabled={disabled}>

    {children}
  </button>;
}
ButtonLarge.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isClear: PropTypes.bool,
  isOuterLine: PropTypes.bool,
  isGrey: PropTypes.bool,
};
