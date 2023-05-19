import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { ColumnHeader } from '../ColumnHeader';
import { Input } from '../Input';
import { Label } from '../Label';

import './style.css';

export const ColumnHeaders = () => {

  const location = useLocation();

  return (
  	<Routes>
        <Route path='/*' element={
          <div className='listRow'>
            <ColumnHeader 
              disabled={ true }
              className='headLabel headLabel--1'
              text='#'/> 
            <ColumnHeader 
              className='headLabel headLabel--2'
              text='Entry'/> 
            <ColumnHeader 
              className='headLabel headLabel--3'
              text='Entry Names'/> 
            <ColumnHeader 
              className='headLabel headLabel--4'
              text='Genes'/> 
            <ColumnHeader 
             className='headLabel headLabel--5'
              text='Organism'/> 
            <ColumnHeader 
             className='headLabel headLabel--6'
              disabled={ true }
              text='Subcellular Location'/> 
            <ColumnHeader 
              className='headLabel headLabel--7'
              text='Length'/> 
         </div>}/>
     </Routes>
  )
}