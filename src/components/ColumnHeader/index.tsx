import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

import Interface from './Interface';
import './style.css';

export const ColumnHeader = (props: Interface) => {

  const location = useLocation();

  return (
  	<Routes>
        <Route path='/*' element={
          <div className={ props.className }>
            <Label 
              className='table__headLabel'
              text={ props.text }/>  
            <Button 
              className={ props.disabled ? 'button__sort button__sort--disabled': 'button__sort'}
              onClick={ props.onClick }
              disabled={ props.disabled }
              to={ location.pathname }/> 
          </div>}/>
     </Routes>
  )
}

ColumnHeader.defaultProps = {
    buttonRef: null,
    to: '',
    text: '',
    className: '',
    onClick: (() => {}),
    disabled: false
};