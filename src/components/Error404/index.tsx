import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../Button'

import './style.css';

export const Error404 = () => {

  const location = useLocation();

  return (
    <div className='errorPage'>
        <h1>404</h1>
        <ul>page not found</ul>
        <Button className='button button__search' text='Back to Search' to='/Home'/>
   </div>
  )
}
