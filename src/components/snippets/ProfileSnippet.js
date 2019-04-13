import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class ProfileSnippet extends Component {
  state = {
   
  };

  render() {
    const { user } = this.props;
    return (
      <div className="profile-snippet">
        <div className="twPc-div">
          <div className="twPc-bg twPc-block" />

          <div>
           
            <a
              href="/editprofile"
              className="twPc-avatarLink" >
              <img
                alt=""
                src={user.avatarUrl}
                className="twPc-avatarImg"
              />
            </a>

            <div className="twPc-divUser">
              <div className="twPc-divName">
              </div>
              <span>
              <Link to={`/profile/${user.id}`}>@{user.username}<span /></Link>
              </span>
            </div>

            <div className="twPc-divStats">
              <ul className="twPc-Arrange">
                <li className="twPc-ArrangeSizeFit">
                  <a href="/:id/picks" title="9.840 Tweet">
                    <span className="twPc-StatLabel twPc-block">Picks</span>
                    <span className="twPc-StatValue">12</span>
                  </a>
                </li>
                <li className="twPc-ArrangeSizeFit">
                  <a href="/profile" title="885 Following">
                    <span className="twPc-StatLabel twPc-block">Following</span>
                    <span className="twPc-StatValue">{user.following.length}</span>
                  </a>
                </li>
                <li className="twPc-ArrangeSizeFit">
                  <a href="/profile" title="1.810 Followers">
                    <span className="twPc-StatLabel twPc-block">Followers</span>
                    <span className="twPc-StatValue">{user.followers.length}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withAuthConsumer(withRouter(ProfileSnippet));
