import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { withAuthConsumer } from "../../contexts/AuthStore";
import authService from "../../services/AuthService";
import { withRouter } from "react-router-dom";
import Modal from "./Modal";
import usersService from "../../services/UsersService";
import {Typeahead} from 'react-bootstrap-typeahead';


class NavBar extends Component {
  state = {
    // showModal: false,
    collapsed: true,
    usersList: [],
    select: {
      selectedOption: ""
    }
  }



  componentDidMount() {
    usersService.listUsers().then(usersList => this.setUsers(usersList.map(x => x.username)));
  }

  setUsers = usersList => this.setState({ usersList });

  toggleModalVisibility = () =>
    this.setState({ showModal: !this.state.showModal });

    toggleNavbar = () => {
      this.setState({
      collapsed: !this.state.collapsed,
      });
      }

  handleLogout = () => {
    authService.logout().then(() => {
      const { history } = this.props;
      this.props.onUserChange({});
      history.push("/login");
    });
  };

  handleSelectChange = selectedOption => {
    const newPick = {...this.state.pick, stock: selectedOption.value}
    this.setState({ pick: newPick }, () => console.info('PICK IS DIFFERENT => ', this.state.pick))
  };

 

  render() {
    console.log(this.state.usersList)
    const { showModal } = this.state;

    const { user } = this.props;
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
      <div>
        {showModal && <Modal />}
        <nav className="navbar navbar-expand-lg">
          
          <Link className="navbar-brand" to="/home">Pickster</Link>

         
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">>
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`${classOne}`} id="mainNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/home">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/market">Market</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/rank">Rank</NavLink></li>
            </ul>

           

            <form className="form-inline active-cyan-3 active-cyan-4">
            <Typeahead
              minLength= "2"
              placeholder="Search..."
               onChange={(selected) => {
                 
              }}
                options={this.state.usersList}/>
       
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
                  <li className="nav-item"><a href="mi-proyecto-web/editprofile" className="nav-link">Profile</a></li>
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
