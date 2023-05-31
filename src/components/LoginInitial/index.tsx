import { useLocation } from 'react-router-dom';
import { Button } from 'src/components'
import './style.css';

const LoginInitial = () => {

  const location = useLocation();

  return (
    <div className='loginContainer'>
        <h1>Q1-Search</h1>
        <ul>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u</ul>
        <Button className='button button__login--initial' text='Login' to={ location.pathname + 'Login' }/>
   </div>
  )
}

export default LoginInitial;
