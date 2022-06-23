/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classes from'./Button.module.css';

export default function Button({ type, disabled, children, isClear }) {
  // eslint-disable-next-line react/prop-types
  return <button className={`${classes.button} ${(isClear ? `${classes["button-clear"]}` : "")}`} 
                            type={type} 
                            disabled={disabled}>
                              
                              { children }
          </button>;
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  isClear : PropTypes.bool.isRequired,
};
