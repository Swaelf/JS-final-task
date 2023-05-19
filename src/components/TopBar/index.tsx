import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './style.css';

export const TopBar = () => {
	
	return (
	<Routes>
        <Route path='/*' element={
			<div className='topbar'> 
				<NavLink 
					to='/Initial'
					className='topbar__link'
					>Logout</NavLink>
				your_email@email.com
			</div>}/>
     </Routes>)
}