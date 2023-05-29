import Interface from './Interface';

import './style.css';

export const Input = (props: Interface) => {

  return (
    <div className='input__text'>
      { props.text }
      <input
        className={ props.className }
        onChange={ props.onChange }
        placeholder={ props.placeholder }
        ref={ props.inputRef }/>
    </div>
  );
};

Input.defaultProps = {
    onChange: (() => {}),
    className: '',
    text: '',
    placeholder: 'placeholder',
    inputRef: null
};