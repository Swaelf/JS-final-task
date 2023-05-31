import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import { Button, Input, Label } from 'src/components';
import { authLogin, setProteinList, setLoadState, setCurrentPath } from 'src/actions';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { loginInterface } from 'src/interfaces';
import './style.css';

const LoginModal = () => {

  const location = useLocation();
  const dispatch = useDispatch();
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
        dispatch(setCurrentPath('/Home'));
        dispatch(setLoadState(false));
        console.log('User logged in:', userCredential.user);
      })
      .catch((error) => {
        console.error('Login error:', error.code, error.message);
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
          to='/Home'/>
        Don’t have an account?
        <NavLink to={ location.pathname.replace('/Login', '/SignUp') }>Sign up</NavLink>
      </div>
   </div>
  )
}

export default LoginModal;