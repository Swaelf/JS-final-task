import { useSelector } from 'react-redux';
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './App.css';
import { PageHome, ProteinPage,ProteinDetails, ProteinFeatureView, ProteinPublications, Error404, LoginInitial, 
  LoginModal, LoginSignUp, SearchBar, Table, FilterModal, TablePlaceHolder, Loader } from 'src/components';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDn1RijVaoxSqZ3gCn6iKVmhWG8TbnxZWg",
  authDomain: "js-final-task-294b9.firebaseapp.com",
  projectId: "js-final-task-294b9",
  storageBucket: "js-final-task-294b9.appspot.com",
  messagingSenderId: "950374001771",
  appId: "1:950374001771:web:00465749f68d417b58952e"
};

initializeApp(firebaseConfig);

const App = () => {

  const loading: any = useSelector((state: any) => state.loading);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/JS-final-task/' element={<PageHome />}>
        <Route path='/JS-final-task/Login' element={<LoginModal/>}/>
        <Route path='/JS-final-task/SignUp' element={<LoginSignUp/>}/>
        <Route path='/JS-final-task/' element={<LoginInitial/>}/> 
        <Route path='/JS-final-task/Home' element={<div> <SearchBar/> <TablePlaceHolder/> <Outlet/> </div>}>
          <Route path='/JS-final-task/Home/filter' element={<FilterModal/>}/>
        </Route>
        <Route path='/JS-final-task/search' element={<div> <SearchBar/> <Table/> <Outlet/> </div>}>
          <Route path='/JS-final-task/search/filter' element={<FilterModal/>}/>
        </Route>
        <Route path='/JS-final-task/protein/:id' element={<ProteinPage/>}> 
          <Route path='/JS-final-task/protein/:id/details' element={<ProteinDetails />}/>
          <Route path='/JS-final-task/protein/:id/feature_viewer' element={<ProteinFeatureView />}/>
          <Route path='/JS-final-task/protein/:id/publications' element={<ProteinPublications />}/>
        </Route>
        <Route path='*' element={<Error404/>}/>
      </Route>
    )
  );

  if (loading) { return <Loader/> }

  return  ( <RouterProvider router={ router } />);

}
  
export default App
