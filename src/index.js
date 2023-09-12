import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Appcontext} from './components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Appcontext  >

  <React.StrictMode>
    <App />
  </React.StrictMode>

  </Appcontext>

);


