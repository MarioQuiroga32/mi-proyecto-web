import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { withAuthConsumer } from "../../contexts/AuthStore";
import authService from "../../services/AuthService";
import { withRouter } from "react-router-dom";
import Modal from "./Modal";
import usersService from "../../services/UsersService";
import Select from "react-select";

class NavBar extends Component {
  state = {
    showModal: false,
    collapsed: true,
    usersList: [],
    select: {
      selectedOption: ""
    }
  }



  componentDidMount() {
    usersService.listUsers().then(usersList => this.setUsers(usersList));
  }

  setUsers = usersList => this.setState({ usersList });

  toggleModalVisibility = () =>
    this.setState({ showModal: !this.state.showModal }, () =>
      console.info(this.state)
    );

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
    let userNames = this.state.usersList.map(a => a.username)
    console.log(userNames)
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

            {/* <Select
              name="stock"
              className="select-navbar"
              placeholder="Select a stock"
              onChange={this.handleSelectChange}
              options={userNames}
              value={this.state.select.selectedOption.value}
            /> */}

            <form className="form-inline active-cyan-3 active-cyan-4">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input className="form-control form-control-sm ml-3 w-75" type="text" list="somethingelse" placeholder="Search" aria-label="Search"/>
    
       
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
                  <li className="nav-item"><a href="profile/:{user.id}" className="nav-link">Profile</a></li>
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
