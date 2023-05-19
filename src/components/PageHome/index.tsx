import React, { useState, useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { SearchBar } from '../SearchBar';
import { TopBar } from '../TopBar';
import { TableHolder } from '../TableHolder';

import './style.css';

export const PageHome = () => {
  return (
  	<Routes>
        <Route path='/Home/*' element={
          <div className='homePage'>
            <TopBar />
            <SearchBar />
            <TableHolder />
         </div>}/>
     </Routes>
  )
}

