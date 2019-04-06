import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import pickService from '../../services/PickService'


class PickSnippet extends Component {
  
 getFollowingPicks () {
   pickService.listFollowingPicks().then(res => console.log(res.data));
 }

 componentDidMount () {
     this.getFollowingPicks()
 }

  render() {
    return (
      <div className="pick-snippet">Picks from people you follow go here</div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(PickSnippet));