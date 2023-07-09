import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter} from 'react-router-dom'


import App from './components/App'; //components
import { ApiContextProvider } from './context/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
    <ApiContextProvider>
      <App />
      </ApiContextProvider>
    </BrowserRouter>
  
);
