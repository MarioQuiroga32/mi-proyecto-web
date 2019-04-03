import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";


class LeftColumn extends Component {
  state = {
    user: {
      email: '',
      password: '',
      username: '',
      name: ''
    },
    errors: {},
    touch: {},
    isRegistered: false
  }
  
  render() {
    const { user } = this.props

    return (
      <div className="home-row row home-grid">
      <div className="col-md-3 home-section1">
       
    <div class="twPc-div">
    <a class="twPc-bg twPc-block"></a>
  
  <div>
    <div class="twPc-button">
            
            <a href="https://twitter.com/mertskaplan" class="twitter-follow-button" data-show-count="false" data-size="large" data-show-screen-name="false" data-dnt="true">Follow @{user.username}</a>
           
            
    </div>
  
    <a title="Mert S. Kaplan" href="/profile" class="twPc-avatarLink">
      <img alt="Mert S. Kaplan" src="download.png" class="twPc-avatarImg"/>
    </a>
  
    <div class="twPc-divUser">
      <div class="twPc-divName">
        <a href="https://twitter.com/mertskaplan"></a>
      </div>
      <span>
        <a href="/profile">@<span></span></a>
      </span>
    </div>
  
    <div class="twPc-divStats">
      <ul class="twPc-Arrange">
        <li class="twPc-ArrangeSizeFit">
          <a href='/:id/picks' title="9.840 Tweet">
            <span class="twPc-StatLabel twPc-block">Picks</span>
            <span class="twPc-StatValue">1.000</span>
          </a>
        </li>
        <li class="twPc-ArrangeSizeFit">
          <a href="" title="885 Following">
            <span class="twPc-StatLabel twPc-block">Following</span>
            <span class="twPc-StatValue">885</span>
          </a>
        </li>
        <li class="twPc-ArrangeSizeFit">
          <a href="" title="1.810 Followers">
            <span class="twPc-StatLabel twPc-block">Followers</span>
            <span class="twPc-StatValue">1.81</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  </div>
  
        <div className="hot-stocks">
          <a href=""></a>
        </div>
        </div>
        </div>
  
      
  
    
  
      

    

      
    );
  }
}

export default withAuthConsumer(withRouter(LeftColumn));