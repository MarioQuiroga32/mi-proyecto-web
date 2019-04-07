import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";

class ProfileSnippet extends Component {
  state = {
    user: {
      email: "",
      password: "",
      username: "",
      name: ""
    }
  };

  render() {
    const { user } = this.props;

    return (
      <div className="profile-snippet">
        <div className="twPc-div">
          <a className="twPc-bg twPc-block" />

          <div>
           
            <a
              href="/editprofile"
              className="twPc-avatarLink" >
              <img
                alt=""
                src="../../public/download.png"
                className="twPc-avatarImg"
              />
            </a>

            <div className="twPc-divUser">
              <div className="twPc-divName">
                <a href="https://twitter.com/mertskaplan" />
              </div>
              <span>
                <a className="profile-username" href="/profile">
                  @{user.email}<span />
                </a>
              </span>
            </div>

            <div className="twPc-divStats">
              <ul className="twPc-Arrange">
                <li className="twPc-ArrangeSizeFit">
                  <a href="/:id/picks" title="9.840 Tweet">
                    <span className="twPc-StatLabel twPc-block">Picks</span>
                    <span className="twPc-StatValue">1.000</span>
                  </a>
                </li>
                <li className="twPc-ArrangeSizeFit">
                  <a href="" title="885 Following">
                    <span className="twPc-StatLabel twPc-block">Following</span>
                    <span className="twPc-StatValue">885</span>
                  </a>
                </li>
                <li className="twPc-ArrangeSizeFit">
                  <a href="" title="1.810 Followers">
                    <span className="twPc-StatLabel twPc-block">Followers</span>
                    <span className="twPc-StatValue">1.810</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hot-stocks">
          <a href="" />
        </div>
      </div>
    );
  }
}

export default withAuthConsumer(withRouter(ProfileSnippet));
