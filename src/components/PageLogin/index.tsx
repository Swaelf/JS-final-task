import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import { useEffect } from 'react';

export const PageLogin = () => {

  const dispatch = useDispatch();
  const location = useLocation();
	const navigate = useNavigate();

  const auth: any = useSelector((state: any) => state.auth);

  useEffect(() => {
    console.log('auth1 = ',auth);
    !auth ? navigate('/') :  navigate('/Home');
  }, [ auth ]);

  return (
    <div className='initialPage'> 
      <Outlet/> 
    </div>
  )
}


