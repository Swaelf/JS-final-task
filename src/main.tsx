import "./index.css";

import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from './reducers';

import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';


const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

import App from "./App.tsx";

//const store = createStore(rootReducer);

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store }>

        <App />

    </Provider>
  </React.StrictMode>,
)
