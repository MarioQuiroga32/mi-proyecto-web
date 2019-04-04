import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";


class PickSnippet extends Component {
  
  render() {
    return (
      <div className="pick-snippet">Picks from people you follow go here</div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(PickSnippet));