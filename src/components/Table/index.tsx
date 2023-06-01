import { useSelector } from 'react-redux';
import { TableRows, TableColumnHeaders } from 'src/components';
import { useEffect, useState } from 'react';
import { stateInterface, proteinInterface } from 'src/interfaces';
import './style.css';

const Table = () => {

  const proteinList: proteinInterface = useSelector((state: stateInterface) => state.proteinList);
  const searchStr: string = useSelector((state: stateInterface) => state.searchStr);

  const [tempSearch, setTempSearch] = useState('');

  useEffect(() => {
    setTempSearch(searchStr);
  }, [])

  return (
  	
          <div className='table'>
            { proteinList.length + ' Search Results for ' + tempSearch }
            <TableColumnHeaders />
            <TableRows />    
         </div>
  )
};

export default Table;