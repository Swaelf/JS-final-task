import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TopBar } from 'src/components';
import { stateInterface } from 'src/interfaces';
import './style.css';

const PageHome = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const auth: string = useSelector((state: stateInterface) => state.auth.uid) as string;

  useEffect(() => {
    
    if (!auth) { 
      navigate('/');
    } else if ( location.pathname === '/' ) {
      navigate('/Home');
    }

  }, [ auth ]);


  if ( auth ) {

    return (
      <div className='homePage'> 
        <TopBar/>
        <Outlet/>
     </div>
     )

  } else {

    return (
      <div className='initialPage'> 
        <Outlet/>
      </div>
     )
  }
  
}

export default PageHome;
