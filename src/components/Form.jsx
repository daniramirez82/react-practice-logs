/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import formReducer from '../helpers/formLoginRedurcer';
import { validPassRegex, validUserRegex } from '../helpers/validators';
import './Form.css';
import Button from './ui/Button';
import Input from './ui/Input';
import {Link} from 'react-router-dom'

const initialFormState = {
  user: '',
  password: '',
  errors: {
    user: '*You need at least 8 characters',
    password: '*You need at least 8 characters and one number',
  },
};

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => {
    if (val.length > 0) {
      valid = false;
    }
  });
  return valid;
};

export default function Form({ formTitle }) {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { errors } = formState;
    if (name === 'user') {
      errors.user = validUserRegex.test(value) ? '' : '*You need at least 8 characters';
    }
    if (name === 'password') {
      errors.password = validPassRegex.test(value) ? '' : '*You need at least 8 characters and one number';
    }
    dispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: name,
      payload: value,
      errors,

    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm(formState.errors)) {
      console.log('Valid Form');
    } else {
      console.log('Invalid Form');
    }
    dispatch({
      type: 'CLEAR_FORM',
    });
  };

  return (
    <>
      <div className="form-title">{formTitle}</div>
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={submitHandler}>
            <Input label="Your user name will be:" name="user" type="text" onChange={changeHandler} value={formState.user} validateState={formState.errors.user} />
            <Input label="Very secret pass" name="password" type="password" onChange={changeHandler} value={formState.password} validateState={formState.errors.password} />
            <div className="buttons">
              <Link to='/'><Button type="button" isClear={true} disabled={false}>Go Back</Button></Link>
              <Button type="submit" disabled={!(!formState.errors.user && !formState.errors.password)}>Login</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

Form.propTypes = {
  formTitle: PropTypes.string.isRequired,
};
