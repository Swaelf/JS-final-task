import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TableRowElement } from 'src/components';
import { setCurrentProtein, setLoadState, setCurrentPath } from 'src/actions';
import getProteinInfo from 'src/functions/getProteinInfo';
import { Interface } from './Interface'
import './style.css';

const TableRow = (props: Interface) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = useCallback(() => {

    dispatch(setLoadState(true));
    const localpath: string = `https://rest.uniprot.org/uniprotkb/${props.entry}`;
    const tempPath: string = `/JS-final-task/protein/${ props.entry }`;

    getProteinInfo(localpath)
          .then((protein) => {
              dispatch(setCurrentProtein(protein));
          })
          .catch((error) => { window.alert(error.message)})
          .finally(() => { dispatch(setLoadState(false)); })

    navigate(tempPath);
    dispatch(setCurrentPath(tempPath));
    }, [ props.entry ]); 

  return (

    <div className='tableRow'>
      <TableRowElement 
        className='itemLabel itemLabel--1'
        text={ props.index }/> 
      <TableRowElement 
        className='itemLabel itemLabel--2'
        onClick={ handleClick }
        text={ props.entry }/> 
      <TableRowElement 
        className='itemLabel itemLabel--3'
        text={ props.entryNames }/> 
      <TableRowElement 
        className='itemLabel itemLabel--4'
        text={ props.genes }/> 
      <TableRowElement 
        className='itemLabel itemLabel--5'
        text={ props.organism }/> 
      <TableRowElement 
        className='itemLabel itemLabel--6'
        text={ props.sublocation }/> 
      <TableRowElement 
        className='itemLabel itemLabel--7'
        text={ props.length }/> 
    </div>
  )
};

TableRow.defaultProps = {
  index: 0,
  entry: 'entry',
  entryNames: 'entry names',
  genes: 'geneName',
  organism: 'organism',
  sublocation: 'sublocation',
  length: 0
};

export default TableRow;