import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";


class RankSnippets extends Component {
  
  render() {
    return (
      <div className="rank-snippet">A card for every user in the ranking will appear here</div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(RankSnippets));