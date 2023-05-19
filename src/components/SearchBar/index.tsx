import { useCallback, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Search } from '../Search';

import Interface from './Interface';

import './style.css';

export const SearchBar = (props: Interface) => {

	const searchRef = useRef<HTMLInputElement>(null);
	const location = useLocation();
	const navigate = useNavigate();
	//const channel = new BroadcastChannel("ToDoApp");

  	const handleSearch = useCallback(() => {

  		if (searchRef && searchRef.current) {

  			if (searchRef.current.value) {
  				navigate(location.pathname + '?q=' + encodeURIComponent(searchRef.current.value));
  				//channel.postMessage({ path: location.pathname + '?q=' + encodeURIComponent(searchRef.current.value) });
  			} else {
  				navigate(location.pathname);
  				//channel.postMessage({ path: location.pathname });
  			}
  		};

  		
		// eslint-disable-next-line
  	}, [location]); 

  	const handleClick = useCallback(() => {

  		//channel.postMessage({ path: location.search ? '/ModalTask' + location.pathname + location.search: '/ModalTask' + location.pathname });
    	
    	// eslint-disable-next-line
  	}, [ location ]); 

  	return (
	<Routes>
	  	<Route path={'/*'} element={
			<div className='searchbar'> 

				<Search 
					className='search__string' 
					onChange={ handleSearch } 
					placeholder='Search'
					inputRef={ searchRef }
					value={ decodeURIComponent(location.search).replace('?q=', '') }/>

				<Button 
					className='button button__search' 
					to='/Home'
					onClick={ handleClick }
					text='Search'/>

				<Button 
					className='button button__filter' 
					to='/Home/filter'
					onClick={ handleClick }
					text=''/>
			</div>}/>
		 </Routes>
	);
};

SearchBar.defaultProps = {
	currentDate: '',
  	modalWindowState: 0,
  	setModalWindowState: (() => {}), 
  	taskList: [],
  	setTaskList: (() => {}),
  	searchPattern: '',
  	setSearchPattern: (() => {})
};