import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { authLogin } from '../../actions/authLogin';

import './style.css';

export const TopBar = () => {

	const location = useLocation();
	const auth: any = useSelector((state: any) => state.auth);

	const handleClick = useCallback(() => {
		console.log(auth)
	    dispatch(authLogin(''));

    }, [ auth ]); 

	
	
	return (
	<Routes>
        <Route path='/*' element={
			<div className='topbar'> 
				<NavLink 
					to='/'
					onClick={ handleClick }
					className='topbar__link'
					>Logout</NavLink>
				your_email@email.com
			</div>}/>
     </Routes>)
}