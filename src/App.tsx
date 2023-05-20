import './App.css';

import { Fragment } from 'react';

import { PageLogin } from './components/PageLogin';
import { PageHome } from './components/PageHome';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn1RijVaoxSqZ3gCn6iKVmhWG8TbnxZWg",
  authDomain: "js-final-task-294b9.firebaseapp.com",
  projectId: "js-final-task-294b9",
  storageBucket: "js-final-task-294b9.appspot.com",
  messagingSenderId: "950374001771",
  appId: "1:950374001771:web:00465749f68d417b58952e"
};

// Initialize Firebase
const app0 = initializeApp(firebaseConfig);

const App = () => {
  return (
    <Fragment>
      <PageLogin/>
      <PageHome/>
    </Fragment>
  )
}

export default App
