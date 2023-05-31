import { TableColumnHeader } from 'src/components';
import './style.css';

const TableColumnHeaders = () => {

  return (
    <div className='listRow'>
      <TableColumnHeader 
        disabled={ true }
        className='headLabel headLabel--1'
        text='#'/> 
      <TableColumnHeader 
        className='headLabel headLabel--2'
        text='Entry'/> 
      <TableColumnHeader 
        className='headLabel headLabel--3'
        text='Entry Names'/> 
      <TableColumnHeader 
        className='headLabel headLabel--4'
        text='Genes'/> 
      <TableColumnHeader 
        className='headLabel headLabel--5'
        text='Organism'/> 
      <TableColumnHeader 
        className='headLabel headLabel--6'
        disabled={ true }
        text='Subcellular Location'/> 
      <TableColumnHeader 
        className='headLabel headLabel--7'
        text='Length'/> 
    </div>
  )
};

export default TableColumnHeaders;