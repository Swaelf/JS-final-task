import { useCallback, useRef } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button, Input, Label } from 'src/components';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './style.css';

const LoginSignUp = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfurmRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {

    const authRef = getAuth();
    if (passwordRef.current?.value === passwordConfurmRef.current?.value && passwordRef.current?.value) {

      createUserWithEmailAndPassword(authRef, loginRef.current!.value, passwordRef.current!.value)
                .then(() => {
                  navigate('/JS-final-task/Login');
                })
                .catch(function(error) {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                  } else {
                    alert(errorMessage);
                  }
                  console.log(error);
                  navigate('/JS-final-task/SignUp');
                });
    } else { alert('passwords are not same!')}

  }, [location]); 

  

  return (
    <div className='loginWindow'>

      <Label 
        className='login_label' 
        text='Sign Up' />

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

      <Input 
        className='login_input' 
        placeholder='confurm password' 
        inputRef={ passwordConfurmRef }
        type='password'
        text='Repeat Pasword'/>

      <div className='button_container'>
        <Button 
          className='button button__login--apply' 
          onClick={ handleClick }
          text='Sign Up' 
          to={ location.pathname }/>
        Already have an account?
        <NavLink to={ location.pathname.replace('/SignUp', '/Login') }>Login</NavLink>
      </div>
   </div>
  )
};

export default LoginSignUp;