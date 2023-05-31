
import { Label } from 'src/components';
import Interface from './Interface';
import './style.css';

const TableRowElement = (props: Interface) => {

  return (
    <div className={ props.className }>
      <Label 
        className='table__itemLabel'
        onClick={ props.onClick }
        text={ props.text }/>  
    </div>
  )
}

TableRowElement.defaultProps = {
    buttonRef: null,
    to: '',
    text: '',
    className: '',
    onClick: (() => {}),
    disabled: false
};

export default TableRowElement;