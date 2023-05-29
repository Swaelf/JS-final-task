import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { authLogin } from '../../actions/authLogin';

import './style.css';

export const TopBar = () => {

	const location = useLocation();
	const dispatch = useDispatch();
	
	const auth: any = useSelector((state: any) => state.auth);

	const handleClick = useCallback(() => {
		console.log(auth)
		localStorage.setItem('uid', '')
	    dispatch(authLogin(''));

    }, [ auth ]); 

	
	
	return (
		<div className='topbar'> 
			<NavLink 
				to='/'
				onClick={ handleClick }
				className='topbar__link'>
				Logout
			</NavLink>
			your_email@email.com
		</div>
	)
}