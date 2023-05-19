import './App.css';

import { Fragment } from 'react';

import { PageLogin } from './components/PageLogin';
import { PageHome } from './components/PageHome';

const App = () => {
  return (
    <Fragment>
      <PageLogin/>
      <PageHome/>
    </Fragment>
  )
}

export default App
