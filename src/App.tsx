import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { PageHome } from './components/PageHome';
import { PageLogin } from './components/PageLogin';
import { ProteinPage } from './components/ProteinPage';
import { ProteinDetails } from './components/ProteinDetails';
import { ProteinFeatureView } from './components/ProteinFeatureView';
import { ProteinPublications } from './components/ProteinPublications';
import { Error404 } from './components/Error404';
import { LoginInitial } from './components/LoginInitial';
import { LoginModal } from './components/LoginModal';
import { LoginSignUp } from './components/LoginSignUp';
import { SearchBar } from './components/SearchBar';
import { Table } from './components/Table';
import { FilterModal } from './components/FilterModal';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDn1RijVaoxSqZ3gCn6iKVmhWG8TbnxZWg",
  authDomain: "js-final-task-294b9.firebaseapp.com",
  projectId: "js-final-task-294b9",
  storageBucket: "js-final-task-294b9.appspot.com",
  messagingSenderId: "950374001771",
  appId: "1:950374001771:web:00465749f68d417b58952e"
};

const fireBase = initializeApp(firebaseConfig);

const App = () => {

  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const auth: any = useSelector((state: any) => state.auth);
  const items: any = useSelector((state: any) => state.items);
  const protein: any = useSelector((state: any) => state.protein);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={auth ? <PageHome /> : <PageLogin />}>
        <Route path='/Login' element={<LoginModal/>}/>
        <Route path='/SignUp' element={<LoginSignUp/>}/>
        <Route path='/' element={<LoginInitial/>}/> 
        <Route path='/Home' element={<div> <SearchBar/> <Table/> <Outlet/> </div>}>
          <Route path='/Home/filter' element={<FilterModal/>}/>
        </Route>
        <Route path='/protein/:id' element={<ProteinPage/>}> 
          <Route path='/protein/:id/details' element={<ProteinDetails />}/>
          <Route path='/protein/:id/feature_viewer' element={<ProteinFeatureView />}/>
          <Route path='/protein/:id/publications' element={<ProteinPublications />}/>
        </Route>
        <Route path='/not-found' element={<Error404/>}/>
      </Route>
    )
  );

  return  ( <RouterProvider router={ router } />);

}
  
export default App
