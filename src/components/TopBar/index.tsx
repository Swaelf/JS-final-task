import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authLogin } from 'src/actions';
import { loginInterface } from 'src/interfaces'
import './style.css';

const TopBar = () => {

	const dispatch = useDispatch();
	const auth: loginInterface = useSelector((state: any) => state.auth);

	const handleClick = useCallback(() => {
	    dispatch(authLogin({ login: '', iud: '' }));
    }, [ auth ]); 

	return (
		<div className='topbar'> 
			<NavLink 
				to='/'
				onClick={ handleClick }
				className='topbar__link'>
				Logout
			</NavLink>
			{ auth.login }
		</div>
	)
};

export default TopBar;