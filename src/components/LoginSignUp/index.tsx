import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

import './style.css';

export const LoginSignUp = () => {

  const location = useLocation();

  return (
  	<Routes>
        <Route path='/SignUp' element={
          <div className='loginWindow'>

            <Label 
              className='login_label' 
              text='Sign Up' />

            <Input 
              className='login_input' 
              placeholder='Login' 
              text='Email/login'/>

            <Input 
              className='login_input' 
              placeholder='Password' 
              text='Pasword'/>

            <Input 
              className='login_input' 
              placeholder='Password' 
              text='Repeat Pasword'/>

            <div className='button_container'>
              <Button 
                className='button button__login--apply' 
                text='Sign Up' 
                to={ location.pathname.replace('/SignUp', '') }/>
              Already have an account?
              <NavLink to={ location.pathname.replace('/SignUp', '/Login') }>Login</NavLink>
            </div>
         </div>}/>
     </Routes>
  )
}