import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { ColumnHeaders } from '../ColumnHeaders';
import { TableRow } from '../TableRow';
import { Label } from '../Label';

import './style.css';

export const Table = () => {

  const items: any = useSelector((state: any) => state.items);

  console.log(items);

  const location = useLocation();
  const length: number = 10;
  const list = Array(length).fill(0);

  return (
  	<Routes>
        <Route path='/*' element={
          <div className='listTable'>
            <ColumnHeaders />
            { items.map((item, i) => {
              return <TableRow 
                key={ i } 
                index={ i }
                entry={ item.primaryAccession }
                entryNames={ item.uniProtkbId }
                genes={ 
                  (item.genes[0].geneName.value ? item.genes[0].geneName.value : '') + 
                  (item.genes[0].synonyms ? (',' + item.genes[0].synonyms.map((gene) => (' ' + gene.value))) : '') }
                organism={ item.organism.scientificName }
                sublocation={ 
                  item.comments[0] ? item.comments[0].subcellularLocations.map((sub) => sub.location.value) : ''
                }
                length={ item.sequence.length }
                />
              })}   
         </div>}/>
     </Routes>
  )
}