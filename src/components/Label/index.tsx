import Interface from './Interface';
import './style.css';

const Label = (props: Interface) => {

	return (
	<label 
		className={ props.className }
		ref={ props.labelRef }
		onClick={ props.onClick }>
		{ props.text }
	</label>)
};

Label.defaultProps = {
  	labelRef: null,
  	text: '',
  	className: '',
  	onClick: (() => {})
};

export default Label;