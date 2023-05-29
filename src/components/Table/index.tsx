import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { TableRows } from '../TableRows';
import { Input } from '../Input';
import { Label } from '../Label';
import { ColumnHeaders } from '../ColumnHeaders';

import './style.css';

export const Table = () => {

  const items: any = useSelector((state: any) => state.items);
  const searchStr = useSelector((state: string) => state.search);

  const location = useLocation();

  return (
  	
          <div className='table'>
            { items.length + ' Search Results for ' + searchStr }
            <ColumnHeaders />
            <TableRows />    
         </div>
  )
}