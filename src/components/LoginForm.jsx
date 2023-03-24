

import PropTypes from 'prop-types';
import React from 'react';
import useForm from '../hooks/FormHooks';

const LoginForm = (props) => {
  const initValues = {
    username: '',
    password: '',

  };

  const doRegister = () => {
    console.log('submitted', inputs);
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doRegister,
    initValues
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          value = {inputs.username}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value ={inputs.password}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
