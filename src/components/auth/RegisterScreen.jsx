import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import validator from 'validator';

import { startRegisterWithPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm'

const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );

  const [ formValues, handleInputChange ] = useForm({
    name: "Brian",
    email: "brianz@gmail.com",
    password: "123456",
    password2: "123456"
  })

  const { name, email, password, password2 } = formValues

  useEffect(() => {
    msgError && Swal.fire("Error", msgError, 'error')
  }, [msgError])


  const handleRegister = (e) => {
    e.preventDefault();

    if ( isFormValid() ) {
      dispatch( startRegisterWithPasswordName(name, email, password) );
    }
  }

  const isFormValid = () => {
    
    if ( name.trim().length === 0 ) {
      dispatch( setError('Name is required') )
      return false 
    } else if ( !validator.isEmail(email) ) {
      dispatch( setError('Email not valid') )
      return false;
    } else if ( password !== password2 || password.length < 6 ) {
      dispatch( setError('Password not valid') )
      return false
    }

    dispatch( removeError() )
    return true;

  }

  


  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form 
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={ handleRegister }
      >

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={ name }
          className="auth__input"
          autoComplete="off"
          onChange={ handleInputChange }
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={ email }
          className="auth__input"
          autoComplete="off"
          onChange={ handleInputChange }
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={ password }
          className="auth__input"
          onChange={ handleInputChange }
        />

        <input
          type="password"
          placeholder="Confirm"
          name="password2"
          value={ password2 }
          className="auth__input"
          onChange={ handleInputChange }
        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>

        <Link
          to="/auth/login"
          className="link"
        >
          Already registered?
        </Link>

      </form>
    </>
  )
}

export default RegisterScreen
