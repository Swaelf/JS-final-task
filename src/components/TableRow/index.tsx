import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { TableRowElement } from '../TableRowElement';
import { Input } from '../Input';
import { Label } from '../Label';

import { Button } from '../Button';
import { ProteinDetails } from '../ProteinDetails';

import getDataFromServer from '../../functions/getDataFromServer';
import { updateEntry } from '../../actions/updateEntry';
import { setProtein } from '../../actions/setProtein';

import { Interface } from './Interface'
import './style.css';


export const TableRow = (props: Interface) => {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const entry = useSelector((state: any) => state.entry);
  const protein = useSelector((state: any) => state.protein);
  //const entry = location.pathname.substring(location.pathname.lastIndexOf('/') + 1, location.pathname.length)

  


  const handleClick = useCallback(() => {
    
    const localpath: string = `https://rest.uniprot.org/uniprotkb/${props.entry}`;

    getDataFromServer(localpath)
          .then((items) => {
              console.log('get items', items)
              dispatch(setProtein(items));

          });

	  dispatch(updateEntry(props.entry));
    navigate(`/protein/${ props.entry }`);
    console.log('go to ', props.entry)
    }, [ props.entry ]); 



  return (
  	<Routes>
        <Route path='/*' element={
          <div className='tableRow'>
            <TableRowElement 
              className='itemLabel itemLabel--1'
              text={ props.index }/> 
            <TableRowElement 
              className='itemLabel itemLabel--2'
              onClick={ handleClick }
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
  genes: 'geneName',
  organism: 'organism',
  sublocation: 'sublocation',
  length: 0
};