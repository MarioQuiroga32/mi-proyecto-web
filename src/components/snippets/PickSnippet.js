import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import pickService from "../../services/PickService";
import userService from "../../services/UsersService";

class ProperPickRender extends Component {
  state = {
    pick: {
      user: "",
      username: "",
      action: "",
      description: ""
    },
    picksList: [],
    usersList: []
  };



  componentDidMount() {
    pickService
      .listFollowingPicks()
      .then(picksList => this.setPicks(picksList));

      userService.listUsers().then(usersList => this.setUsers(usersList))
  }

  setPicks = picksList => this.setState({ picksList });
  setUsers = usersList => this.setState({ usersList });

  render() {
    return (
      <div>
        {this.state.picksList.map(
          (pick, index) =>(
              <div key={index} className="pick-snippet">
                <div className="pick-snippet-pic">
                  <img
                    alt=""
                    src="default-profile.png"
                    className="pick-avatar"
                  />
                </div>
                <div className="pick-snippet-username">
                  <a>@{pick.username}</a>
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
