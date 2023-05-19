import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

import './style.css';

export const LoginModal = () => {

  const location = useLocation();

  return (
  	<Routes>
        <Route path='/Login' element={
          <div className='loginWindow'>

            <Label 
              className='login_label' 
              text='Login'/>

            <Input 
              className='login_input' 
              placeholder='Login' 
              text='Email/login'/>

            <Input 
              className='login_input' 
              placeholder='Password' 
              text='Pasword'/>
              
            <div className='button_container'>
              <Button 
                className='button button__login--apply' 
                text='Login' 
                to='/Home'/>
              Don’t have an account?
              <NavLink to={ location.pathname.replace('/Login', '/SignUp') }>Sign up</NavLink>
            </div>
         </div>}/>
     </Routes>
  )
}