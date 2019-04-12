import React from 'react';
import ReactDOM from 'react-dom';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';


import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthStore } from './contexts/AuthStore';
import {HashRouter} from 'react-router-dom'


ReactDOM.render(
  <HashRouter>
  {/* <Router basename={process.env.PUBLIC_URL}> */}
    <AuthStore>
      <App />
    </AuthStore>
  {/* </Router> */}
  </HashRouter>
 
  , 
  document.getElementById('root'));
