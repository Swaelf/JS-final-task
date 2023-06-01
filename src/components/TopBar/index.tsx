import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authLogin } from 'src/actions';
import { loginInterface, stateInterface } from 'src/interfaces'
import './style.css';

const TopBar = () => {

	const dispatch = useDispatch();
	const auth: loginInterface = useSelector((state: stateInterface) => state.auth);

	const handleClick = useCallback(() => {
		const login: loginInterface = { login: '', uid: '' }
	    dispatch(authLogin(login));
    }, [ auth ]); 

	return (
		<div className='topbar'> 
			<NavLink 
				to='/JS-final-task/'
				onClick={ handleClick }
				className='topbar__link'>
				Logout
			</NavLink>
			{ auth.login }
		</div>
	)
};

export default TopBar;