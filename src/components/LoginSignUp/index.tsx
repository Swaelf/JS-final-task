import React, { useState, useEffect, useCallback, useRef } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import './style.css';

export const LoginSignUp = () => {

  const location = useLocation();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfurmRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {

    console.log('login ', loginRef.current!.value);
    console.log('password ', passwordRef.current!.value);
    console.log('passwordConfurm ', passwordConfurmRef.current!.value);

    const auth0 = getAuth();

    createUserWithEmailAndPassword(auth0, loginRef.current!.value, passwordRef.current!.value).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    

  }, [location]); 

  

  return (
    <div className='loginWindow'>

      <Label 
        className='login_label' 
        text='Sign Up' />

      <Input 
        className='login_input' 
        placeholder='Login' 
        inputRef={ loginRef }
        text='Email/login'/>

      <Input 
        className='login_input' 
        placeholder='Password' 
        inputRef={ passwordRef }
        text='Pasword'/>

      <Input 
        className='login_input' 
        placeholder='Password' 
        inputRef={ passwordConfurmRef }
        text='Repeat Pasword'/>

      <div className='button_container'>
        <Button 
          className='button button__login--apply' 
          onClick={ handleClick }
          text='Sign Up' 
          to={ location.pathname.replace('/SignUp', '') }/>
        Already have an account?
        <NavLink to={ location.pathname.replace('/SignUp', '/Login') }>Login</NavLink>
      </div>
   </div>
  )
}