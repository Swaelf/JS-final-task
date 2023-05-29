import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';

import Interface from './Interface';
import './style.css';

export const TableRowElement = (props: Interface) => {

  const location = useLocation();

  return (
    <div className={ props.className }>
      <Label 
        className='table__itemLabel'
        onClick={ props.onClick }
        text={ props.text }/>  
    </div>
  )
}

TableRowElement.defaultProps = {
    buttonRef: null,
    to: '',
    text: '',
    className: '',
    onClick: (() => {}),
    disabled: false
};