import { useSelector } from 'react-redux';
import { TableRows, TableColumnHeaders } from 'src/components';
import './style.css';

const Table = () => {

  const proteinList: any = useSelector((state: any) => state.proteinList);
  const search = useSelector((state: string) => state.search);

  return (
  	
          <div className='table'>
            { proteinList.length + ' Search Results for ' + search }
            <TableColumnHeaders />
            <TableRows />    
         </div>
  )
};

export default Table;