import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { Table } from '../Table';
import { Input } from '../Input';
import { Label } from '../Label';

import './style.css';

export const TableHolder = () => {

  const location = useLocation();

  return (
  	<Routes>
        <Route path='/*' element={
          <div className='listHolder'>
            { '123' + ' Search Results for ' + location.search.replace('?q=', '') }
            <Table />    
         </div>}/>
     </Routes>
  )
}