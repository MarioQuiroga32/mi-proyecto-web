import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter, Link } from "react-router-dom";
import UsersService from '../../services/UsersService'


class RankSnippets extends Component {
  state = {
    usersList:[]
  }

  componentDidMount() {
    UsersService.listUsers().then(usersList => this.setUsers(usersList));
  }
  setUsers = usersList => this.setState({ usersList });

  render() {
    return (
      <div>
       {this.state.usersList.map(
          (user, index) =>(
              <div key={index} className="pick-snippet">
                <div className="pick-snippet-pic">
                  <img
                    alt=""
                    src={user.avatarUrl}
                    className="pick-avatar"
                  />
                </div>
                <div className="pick-snippet-username">
                <Link to={`/profile/${user.user}`}>@{user.username}</Link>
                </div>

              </div>
            )
        )}

      </div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(RankSnippets));