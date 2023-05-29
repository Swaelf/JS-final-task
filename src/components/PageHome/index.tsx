import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { TopBar } from '../TopBar';

import './style.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const PageHome = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const auth: any = useSelector((state: any) => state.auth);

  useEffect(() => {
    console.log('auth1 = ',auth);
    !auth ? navigate('/') :  navigate('/Home');
  }, [ auth ]);

  
  return (
    <div className='homePage'> 
      <TopBar/>
      <Outlet/>
   </div>
  )
}

