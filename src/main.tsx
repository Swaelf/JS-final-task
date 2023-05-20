import "./index.css";

import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from './reducers';

import App from "./App.tsx";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
