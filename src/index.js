import React from 'react';
import ReactDOM from 'react-dom';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';


import App from './App';
import { AuthStore } from './contexts/AuthStore';
import {HashRouter} from 'react-router-dom'


ReactDOM.render(
  <HashRouter>
    <AuthStore>
      <App />
    </AuthStore>
  </HashRouter>, 
  document.getElementById('root'));
