/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classes from'./Button.module.css';

export default function Button({ type, disabled, children, isClear, onClick }) {
  // eslint-disable-next-line react/prop-types
  return <button onClick={onClick} className={`${classes.button} ${(isClear ? `${classes["button-clear"]}` : "")}`} 
                            type={type} 
                            disabled={disabled}>
                              
                              { children }
          </button>;
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  isClear : PropTypes.bool,
  onClick: PropTypes.any,
};
