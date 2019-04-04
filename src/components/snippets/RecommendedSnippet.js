import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import usersService from '../../services/UsersService'
import { Link } from "react-router-dom";


class ProperListRender extends Component{
  state = {
    user: {
      name: '',
      username: ''
    },
    usersList: []
  }

  componentDidMount() {
    usersService.listUsers()
      .then(usersList => this.setUsers(usersList))
  }

  setUsers = usersList => this.setState({ usersList })

  render () {
    return (
      <ul>
        {this.state.usersList.map(x => <h6>{x.email}</h6>)}
      </ul>

    )
  }}

  

class RecommendedSnippet extends Component {

  render() {
    return (
      <div className="recommended"><ProperListRender usersList/></div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(RecommendedSnippet));