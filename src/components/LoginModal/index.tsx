import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

import { authLogin } from '../../actions/authLogin';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import './style.css';

export const LoginModal = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const auth: any = useSelector((state: any) => state.auth);

  const handleClick = useCallback(() => {

    console.log('login ', loginRef.current.value);
    console.log('password ', passwordRef.current.value);

    const auth0 = getAuth();

    signInWithEmailAndPassword(auth0, loginRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        dispatch(authLogin(user.uid));
        console.log('User logged in:', user);
      })
      .catch((error) => {
        // Handle login error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login error:', errorCode, errorMessage);
      });

    }, [location]); 

  return (
    <div className='loginWindow'>
      <Label 
        className='login_label' 
        text='Login'/>

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
        
      <div className='button_container'>
        <Button 
          className='button button__login--apply' 
          onClick={ handleClick }
          text='Login' 
          to={ auth==='' ? '/Initial' : '/Home' }/>
        Don’t have an account?
        <NavLink to={ location.pathname.replace('/Login', '/SignUp') }>Sign up</NavLink>
      </div>
   </div>
  )
}