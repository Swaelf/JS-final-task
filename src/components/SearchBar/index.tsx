import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Search } from '../Search';
import getDataFromServer from '../../functions/getDataFromServer';
import { updateItems } from '../../actions/updateItems';
import { updateSearch } from '../../actions/updateSearch';
import { updateLink } from '../../actions/updateLink';

import Interface from './Interface';

import './style.css';

export const SearchBar = (props: Interface) => {

	const items: any = useSelector((state: any) => state.items);

	const searchRef = useRef<HTMLInputElement>(null);
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

  	const handleSearch = useCallback(() => {

  		if (searchRef && searchRef.current) {

  			if (searchRef.current.value) {
  				navigate(location.pathname + '?q=' + encodeURIComponent(searchRef.current.value));
  				//setCurrentSearch(decodeURIComponent(location.search).replace('?q=', ''));
  				//channel.postMessage({ path: location.pathname + '?q=' + encodeURIComponent(searchRef.current.value) });
  			} else {
  				navigate(location.pathname);
  				//setCurrentSearch('');
  				//channel.postMessage({ path: location.pathname });
  			}
  		};

  		
		// eslint-disable-next-line
  	}, [ location ]); 

  	const handleClick = useCallback(() => {
  		let query: string = '';

  		if (searchRef && searchRef.current) {
  			query = searchRef.current.value;
  		}

  		let path: string = `https://rest.uniprot.org/uniprotkb/search?fields=accession,id,gene_names,organism_name,length,cc_subcellular_location&query=${ query }`;
  		console.log(path)

  		getDataFromServer(path)
  			.then((items) => {
				dispatch(updateItems(items.results.results));
				items.newlink ? dispatch(updateLink(items.newlink)) : '';
  				dispatch(updateSearch(query));
  			})
			.catch(error => window.alert('error while fetch: ' + error.message))
  			//.then((items) => console.log(items));

    	// eslint-disable-next-line
  	}, [ location ]); 

  	return (
		<div className='searchbar'> 
			<Search 
				className='search__string' 
				onChange={ handleSearch } 
				placeholder='Search'
				inputRef={ searchRef }
				value={ decodeURIComponent(location.search).replace('?q=', '') }/>

			<Button 
				className='button button__search' 
				to={ location.pathname + ((searchRef && searchRef.current) ? ('?q=' + encodeURIComponent(searchRef.current.value)) : '') }
				onClick={ handleClick }
				text='Search'/>

			<Button 
				className='button button__filter' 
				to='/Home/filter'
				text=''/>
		</div>
	);
};

/*SearchBar.defaultProps = {
	currentDate: '',
  	modalWindowState: 0,
  	setModalWindowState: (() => {}), 
  	taskList: [],
  	setTaskList: (() => {}),
  	searchPattern: '',
  	setSearchPattern: (() => {})
};*/