import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { Table } from '../Table';
import { Input } from '../Input';
import { Label } from '../Label';

import './style.css';

export const TableHolder = () => {

  const items: any = useSelector((state: any) => state.items);
  const search: string = useSelector((state: string) => state.search);

  const location = useLocation();

  return (
  	<Routes>
        <Route path='/*' element={
          <div className='listHolder'>
            { items.length + ' Search Results for ' + search }
            <Table />    
         </div>}/>
     </Routes>
  )
}