import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { ColumnHeaders } from '../ColumnHeaders';
import { TableRow } from '../TableRow';
import { Label } from '../Label';

import './style.css';

export const Table = () => {

  const location = useLocation();
  const length: number = 10;
  const list = Array(length).fill(0);

  return (
  	<Routes>
        <Route path='/*' element={
          <div className='listTable'>
            <ColumnHeaders />
            { list.map(( _, i) => {
              return <TableRow 
                key={ i } 
                index={ i }
                entry={ 'Entry ' + i }
                entryNames='DLEC1_HUMAN'
                genes='BRCA2, FACD, FANCD1'
                organism='homo sapience'
                sublocation='Cytoplasm'
                length={ Math.floor(Math.random() * 1000) }
                />
              })}   
         </div>}/>
     </Routes>
  )
}