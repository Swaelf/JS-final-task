import { useLocation } from 'react-router-dom';
import { Button, Label } from 'src/components';
import Interface from './Interface';
import './style.css';

const TableColumnHeader = (props: Interface) => {

  const location = useLocation();

  return (
    <div className={ props.className }>
      <Label 
        className='table__headLabel'
        text={ props.text }/>  
      <Button 
        className={ props.disabled ? 'button__sort button__sort--disabled': 'button__sort'}
        onClick={ props.onClick }
        disabled={ props.disabled }
        to={ location.pathname }/> 
    </div>
  )
};

TableColumnHeader.defaultProps = {
    buttonRef: null,
    to: '',
    text: '',
    className: '',
    onClick: (() => {}),
    disabled: false
};

export default TableColumnHeader;