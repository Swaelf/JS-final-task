import Interface from './Interface';
import { NavLink } from 'react-router-dom';
import './style.css';

const Button = (props: Interface) => {
	
	if (props.disabled) {
		return (
			<span 
				className={ props.className }
				onClick={ props.onClick }
				ref={ props.buttonRef }
			>{ props.text }</span>
		)
	} else {
		return (
			<NavLink 
				to={ props.to ? props.to : '/' }
				className={ props.className }
				ref={ props.buttonRef }
				onClick={ props.onClick }
			>{ props.text }</NavLink>
		)
	}
};

Button.defaultProps = {
  	buttonRef: null,
  	to: '',
  	text: '',
  	className: '',
  	onClick: (() => {}),
  	disabled: false
};

export default Button;
