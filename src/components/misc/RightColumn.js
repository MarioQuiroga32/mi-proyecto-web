import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";


class RightColumn extends Component {
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
     
       <div className="col-md-3 home-section3">
          Recommended Users
          <div class="card" style={{width: '18rem'}}>
      <div class="card-body">
      <h5 class="card-title">Username</h5>
      <p class="card-text">Rating</p>
      <a href="#" class="btn btn-primary">Follow</a>
      </div>
        </div>
      
        <div className="hot-stocks">
          <a href=""></a>
        </div>
      
      </div>
   
    );
  }
}

export default withAuthConsumer(withRouter(RightColumn));