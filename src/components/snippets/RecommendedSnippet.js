import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import usersService from "../../services/UsersService";
import { Link } from "react-router-dom";
const CURRENT_USER_KEY = 'current-user';

class ProperListRender extends Component {
  state = {
    loggedUser: JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || '{}'),
    user: {
      name: "",
      username: "",
      id: "",
    },
    usersList: [],
    
  };

  componentDidMount() {
    usersService.listUsers().then(usersList => this.setUsers(usersList));
  }

  setUsers = usersList => this.setState({ usersList });

  onClickFollow(id) {
    usersService.follow(id)
  }

  onClickUnFollow(id) {
    usersService.unFollow(id)
  }


  

  render() {
    return (
      <ul className="recommended-list">
        {this.state.usersList.map((recommendedUser, index) => (
          <div key={index} className="recommended-card">
          <div className="recommended-pic">
           <img
                    alt=""
                    src={recommendedUser.avatarUrl}
                    className="pick-avatar"
                  /></div>
            <Link to={`/profile/${recommendedUser.id}`}><h6>@{recommendedUser.username}</h6></Link>
            
            {this.state.loggedUser.following.includes(recommendedUser.id) === true ? 
            <button className="btn-unfollow" onClick={this.onClickUnFollow.bind(this, recommendedUser.id)}>
            Unfollow
          </button>
            : 
            <button className="btn-follow" onClick={this.onClickFollow.bind(this, recommendedUser.id)}>
            Follow
          </button>}</div>

          
          
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
