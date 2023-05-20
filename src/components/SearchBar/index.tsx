import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Search } from '../Search';
import getDataFromServer from '../../functions/getDataFromServer';
import { updateItems } from '../../actions/updateItems';
import { updateSearch } from '../../actions/updateSearch';

import Interface from './Interface';

import './style.css';

export const SearchBar = (props: Interface) => {

	const items: any = useSelector((state: any) => state.items);
	const search: search = useSelector((state: string) => state.search);

	const searchRef = useRef<HTMLInputElement>(null);
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	//const [currentSearch, setCurrentSearch] = useState('')
	//const channel = new BroadcastChannel("ToDoApp");


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

  		//setCurrentSearch(decodeURIComponent(location.search).replace('?q=', ''));

  		let path: string = `https://rest.uniprot.org/uniprotkb/search?fields=accession,id,gene_names,organism_name,length,cc_subcellular_location&query=${query}`;
  		console.log(path)

  		let data: any;
  		getDataFromServer(path)
  			.then((items) => {
  				dispatch(updateItems(items.results));
  				dispatch(updateSearch(query));
  			});
  			//.then((items) => console.log(items));

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
					to={ location.pathname + ((searchRef && searchRef.current) ? ('?q=' + encodeURIComponent(searchRef.current.value)) : '') }
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