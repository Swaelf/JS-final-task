import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { LoginInitial } from '../LoginInitial';
import { LoginModal } from '../LoginModal';
import { LoginSignUp } from '../LoginSignUp';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import './style.css';

export const PageLogin = () => {

  const auth: any = useSelector((state: any) => state.auth);
  const navigate = useNavigate();

  return (
    <div className='initialPage'>
      <LoginInitial/>
      <LoginModal/>
      <LoginSignUp/>
   </div>
  )
}

