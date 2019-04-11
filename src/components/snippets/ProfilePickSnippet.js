import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import pickService from "../../services/PickService";

class ProperPickRender extends Component {
  state = {
    pick: {
      user: "",
      username: "",
      action: "",
      description: ""
    },
    user: {
      id: "",
      username: ""
    },
    userPicksList: []
  };



  componentDidMount() {
    pickService
      .listUserPicks(this.props.name)
      .then(userPicksList => this.setPicks(userPicksList));
  }

  setPicks = userPicksList => this.setState({ userPicksList });

  render() {
    return (
      <div>
        {this.state.userPicksList.map(
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
        <ProperPickRender userPicksList name={this.props.match.params.id}/>
      </div>
    );
  }
}

export default withAuthConsumer(withRouter(PickSnippet));