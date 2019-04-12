import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import pickService from "../../services/PickService";
import userService from "../../services/UsersService";
import { Link } from "react-router-dom";

class ProperPickRender extends Component {
  state = {
    picksList: [],
    usersList: [],

  };



  componentDidMount() {
    pickService
      .listFollowingPicks()
      .then(picksList => this.setPicks(picksList));

      userService.listUsers().then(usersList => this.setUsers(usersList));

  }

  setPicks = picksList => this.setState({ picksList });
  setUsers = usersList => this.setState({ usersList });

 

  render() {
    return (
      <div>
        {this.state.picksList.sort((a,b) => new Date(b.date) - new Date(a.date)).map(
          (pick, index) =>(
              <div key={index} className="pick-snippet">
                <div className="pick-snippet-pic">
                  <img
                    alt=""
                    src={pick.avatarUrl}
                    className="pick-avatar"
                  />
                </div>
                <div className="pick-snippet-username">
                <Link to={`/profile/${pick.user}`}>@{pick.username}</Link>
                </div>
                <div className="pick-snippet-text">{pick.description}</div>
                <div className="pick-snippet-stock">Stock: {pick.stock}</div>
                <div className="pick-snippet-date">Date: {pick.date}</div>
                <div className="pick-snippet-action">Prediction: {pick.action}</div>
              </div>
            )
        )}
      </div>
    );
  }
}

class PickSnippet extends Component {
  render() {
    return (
      <div className="center-column">
        <ProperPickRender picksList />
      </div>
    );
  }
}

export default withAuthConsumer(withRouter(PickSnippet));
