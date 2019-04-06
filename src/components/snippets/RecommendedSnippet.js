import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import usersService from "../../services/UsersService";
import { Link } from "react-router-dom";

class ProperListRender extends Component {
  state = {
    user: {
      name: "",
      username: ""
    },
    usersList: []
  };

  componentDidMount() {
    usersService.listUsers().then(usersList => this.setUsers(usersList));
  }

  setUsers = usersList => this.setState({ usersList });

  // onClickFollow() {
  //   usersService.listUsers().findByIdAndUpdate(sessionStorage.id)
  // }

  render() {

    return (
      <ul>
        {this.state.usersList.map((recommendedUser, index) => (
          <div key={index} className="recommended-card">
            <h6>{recommendedUser.email}</h6>
            <button className="btn-follow">
              Follow
            </button>
          </div>
        ))}
      </ul>
    );
  }
}

class RecommendedSnippet extends Component {
  render() {
    return (
      <div className="recommended">
        <ProperListRender usersList />
      </div>
    );
  }
}

export default withAuthConsumer(withRouter(RecommendedSnippet));
