import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { LoginInitial } from '../LoginInitial';
import { LoginModal } from '../LoginModal';
import { LoginSignUp } from '../LoginSignUp';

import './style.css';

export const PageLogin = () => {
  return (
  	<Routes>
        <Route path='/Initial/*' element={
          <div className='initialPage'>
            <LoginInitial/>
            <LoginModal/>
            <LoginSignUp/>
         </div>}/>
     </Routes>
  )
}

