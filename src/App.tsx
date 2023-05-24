import './App.css';

import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { PageLogin } from './components/PageLogin';
import { PageHome } from './components/PageHome';
import { LoginInitial } from './components/LoginInitial';
import { LoginModal } from './components/LoginModal';
import { LoginSignUp } from './components/LoginSignUp';

import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDn1RijVaoxSqZ3gCn6iKVmhWG8TbnxZWg",
  authDomain: "js-final-task-294b9.firebaseapp.com",
  projectId: "js-final-task-294b9",
  storageBucket: "js-final-task-294b9.appspot.com",
  messagingSenderId: "950374001771",
  appId: "1:950374001771:web:00465749f68d417b58952e"
};

const auth0 = initializeApp(firebaseConfig);



const App = () => {

  const auth: any = useSelector((state: any) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();
  

  useEffect(() => {
    
    console.log('auth', auth)

    auth==='' ? navigate('/') : navigate('/Home');
    // eslint-disable-next-line
  }, [ auth ]); //we call it only once

  
      
      
  
  return (
    <Routes>
      <Route path='/Login' element={
        <div className='initialPage'>
          <LoginModal/>
        </div>}/>
      <Route path='/SignUp' element={
        <div className='initialPage'>
          <LoginSignUp/>
        </div>}/>
      <Route path='/' element={
        <div className='initialPage'>
          <LoginInitial/>
        </div>}/>
      <Route path='/Home' element={
        <Fragment>
          <PageHome/>
        </Fragment>}/>
    </Routes>
    
  )
}

export default App
