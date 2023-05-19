import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { TableRowElement } from '../TableRowElement';
import { Input } from '../Input';
import { Label } from '../Label';

import { Interface } from './Interface'
import './style.css';

export const TableRow = (props: Interface) => {

  const location = useLocation();

  return (
  	<Routes>
        <Route path='/*' element={
          <div className='listRow'>
            <TableRowElement 
              className='itemLabel itemLabel--1'
              text={ props.index }/> 
            <TableRowElement 
              className='itemLabel itemLabel--2'
              text={ props.entry }/> 
            <TableRowElement 
              className='itemLabel itemLabel--3'
              text={ props.entryNames }/> 
            <TableRowElement 
              className='itemLabel itemLabel--4'
              text={ props.genes }/> 
            <TableRowElement 
             className='itemLabel itemLabel--5'
              text={ props.organism }/> 
            <TableRowElement 
             className='itemLabel itemLabel--6'
              text={ props.sublocation }/> 
            <TableRowElement 
              className='itemLabel itemLabel--7'
              text={ props.length }/> 
         </div>}/>
     </Routes>
  )
}

TableRow.defaultProps = {
  index: 0,
  entry: 'entry',
  entryNames: 'entry names',
  genes: 'genes',
  organism: 'organism',
  sublocation: 'sublocation',
  length: 0
};