import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TopBar } from 'src/components';
import './style.css';

const PageHome = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const auth: string = useSelector((state: any) => state.auth.uid);

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
