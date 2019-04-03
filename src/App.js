
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import Home from './components/Home';
import PrivateRoute from './guards/PrivateRoute';
import Market from './components/Market';
import Rank from './components/Rank';
import Modal from './components/misc/Modal'


class App extends Component {
  render() {
     return (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/market" component={Market} />
              <PrivateRoute exact path="/rank" component={Rank} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;