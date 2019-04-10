import React from 'react';
import ReactDOM from 'react-dom';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';


import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthStore } from './contexts/AuthStore';


ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <AuthStore>
      <App />
    </AuthStore>
  </Router>, 
  document.getElementById('root'));
