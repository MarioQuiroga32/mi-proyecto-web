import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { withAuthConsumer } from "../../contexts/AuthStore";
import authService from "../../services/AuthService";
import { withRouter } from "react-router-dom";
import Modal from "./Modal";

class NavBar extends Component {
  state = {
    showModal: false
  };

  toggleModalVisibility = () =>
    this.setState({ showModal: !this.state.showModal }, () =>
      console.info(this.state)
    );

  handleLogout = () => {
    authService.logout().then(() => {
      const { history } = this.props;
      this.props.onUserChange({});
      history.push("/login");
    });
  };

  render() {
    const { showModal } = this.state;

    const { user } = this.props;

    return (
      <div>
        {showModal && <Modal />}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          
          <Link className="navbar-brand" to="/board">MiProyecto</Link>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/home">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/market">Market</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/rank">Rank</NavLink></li>
            </ul>

            <form className="form-inline active-cyan-3 active-cyan-4">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
          </form>

            <button onClick={this.toggleModalVisibility} type="button" className="newpick-btn btn btn-primary btn-large" data-toggle="modal" data-target="#myModal">
              New pick
            </button>

            <ul className="navbar-nav my-2 my-lg-0">
              {!user.email && (
                <Fragment>
                  <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" activeClassName="active"to="/register">Register</NavLink></li>
                </Fragment>
              )}
              {user.email && (
                <Fragment>
                  <li className="nav-item"><a href="/editprofile" className="nav-link">{user.email}</a></li>
                  <li className="nav-item"><a href="/" className="nav-link" onClick={this.handleLogout}>Logout</a></li>
                </Fragment>
              )}
            </ul>
          </div>
        </nav>
        </div>

    

      
    );
  }
}

export default withAuthConsumer(withRouter(NavBar));
