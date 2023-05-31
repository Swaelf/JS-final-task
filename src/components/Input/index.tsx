import Interface from './Interface';
import './style.css';

const Input = (props: Interface) => {
  
  return (
    <div className='input__text'>
      { props.text }
      <input
        className={ props.className }
        onChange={ props.onChange }
        placeholder={ props.placeholder }
        type={ props.type }
        ref={ props.inputRef }/>
    </div>
  );
};

Input.defaultProps = {
    onChange: (() => {}),
    className: '',
    text: '',
    type: '',
    placeholder: 'placeholder',
    inputRef: null
};

export default Input;