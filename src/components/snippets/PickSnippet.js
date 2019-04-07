import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import pickService from '../../services/PickService'


class PickSnippet extends Component {

  state = {
    pick: {
      user: "",
      action: "",
      description: "",
      likes: [],
      comments: [],
      createdAt: "",
      updatedAt: "",
      id: ""
    },
    picksList : []
  }
  
 componentDidMount () {
   pickService.listFollowingPicks().then(picksList => this.setPicks(picksList)).then(console.log(this.state.picksList));

 }

 setPicks = picksList => this.setState({ picksList });


  render() {
    return (
      <div className="pick-snippet">
      <div className="pick-snippet-pic"></div>
      <div className="pick-snippet-username"><a>UsernameHere</a></div>
      <div className="pick-snippet-text">Pick description here</div>
      <div className="pick-snippet-stock">Stock</div>
      <div className="pick-snippet-date">Date</div>
      <div className="pick-snippet-action">Action</div>
      </div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(PickSnippet));