import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button, Search } from 'src/components';
import { setProteinList, updateSearch, updateLink, setLoadState, setCurrentPath } from 'src/actions';
import getProteinList from 'src/functions/getProteinList';

import './style.css';

const SearchBar = () => {

	const searchRef = useRef<HTMLInputElement>(null);
	const location = useLocation();
	const dispatch = useDispatch();

	const currentPath: string = useSelector((state: any) => state.currentPath);

  	const handleSearch = useCallback(() => {
		let tempPath: string = '';
		let query: string = '';

		if (searchRef && searchRef.current) {
			query = encodeURIComponent(searchRef.current.value);

			tempPath = '/search?query=' +  query;
			dispatch(setCurrentPath(tempPath));	
		} else { 
			tempPath ='/Home';
			dispatch(setCurrentPath(tempPath));
		}
		
		// eslint-disable-next-line
  	}, [ location ]); 


  	const handleClick = useCallback(() => {

		dispatch(setLoadState(true));
		dispatch(setCurrentPath('/search'));	

		let query: string = '';
		
		if (searchRef && searchRef.current) {
			query = searchRef.current.value;	
			dispatch(updateSearch(query));
		} else { 
			dispatch(updateSearch(''));
		}
	
  		const path: string = `https://rest.uniprot.org/uniprotkb/search?&query=${ query }&fields=accession,id,gene_names,organism_name,length,cc_subcellular_location`;

		getProteinList(path)
			.then((proteinList) => { 
				dispatch(setProteinList(proteinList.results));
				proteinList.newlink ? dispatch(updateLink(proteinList.newlink)) : '';
			})
			.catch(error => window.alert('error while fetch: ' + error.message))
			.finally(() => { dispatch(setLoadState(false)) })

    	// eslint-disable-next-line
  	}, [ location ]); 

  	return (
		<div className='searchbar'> 
			<Search 
				className='search__string' 
				onChange={ handleSearch } 
				placeholder='Search'
				inputRef={ searchRef }
				value={ decodeURIComponent(location.search).replace('search?query=', '') }/>

			<Button 
				className='button button__search' 
				to={ currentPath }
				onClick={ handleClick }
				text='Search'/>

			<Button 
				className='button button__filter' 
				to={ location.pathname.replace('/filter', '') + '/filter' + location.search }
				text=''/>
		</div>
	);
	
};

export default SearchBar;
