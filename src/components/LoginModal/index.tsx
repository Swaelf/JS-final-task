import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import { Button, Input, Label } from 'src/components';
import { authLogin, setProteinList, setLoadState, setCurrentPath } from 'src/actions';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { loginInterface } from 'src/interfaces';
import './style.css';

const LoginModal = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {

    const authRef = getAuth();
    dispatch(setLoadState(true));

    signInWithEmailAndPassword(authRef, loginRef.current!.value, passwordRef.current!.value)
      .then((userCredential) => {
        const login: loginInterface = { login: userCredential.user.email as string, uid: userCredential.user.uid };
        dispatch(authLogin(login));
        dispatch(setProteinList([]));
        dispatch(setCurrentPath('/JS-final-task/Home'));
        dispatch(setLoadState(false));
        navigate('/JS-final-task/Home');
        console.log('User logged in:', userCredential.user.email);
      })
      .catch((error) => {
        console.error('Login error:', error.code, error.message);
        alert('Login error:' + error.code + error.message);
        navigate('/JS-final-task/Login');
        dispatch(setLoadState(false));
      });

    }, [location]); 

  return (
    <div className='loginWindow'>
      <Label 
        className='login_label' 
        text='Login'/>

      <Input 
        className='login_input' 
        placeholder='email' 
        inputRef={ loginRef }
        text='Email/login'/>

      <Input 
        className='login_input' 
        placeholder='password' 
        inputRef={ passwordRef }
        type='password'
        text='Pasword'/>
        
      <div className='button_container'>
        <Button 
          className='button button__login--apply' 
          onClick={ handleClick }
          text='Login' 
          to={ location.pathname }/>
        Don’t have an account?
        <NavLink to={ location.pathname.replace('/Login', '/SignUp') }>Sign up</NavLink>
      </div>
   </div>
  )
}

export default LoginModal;