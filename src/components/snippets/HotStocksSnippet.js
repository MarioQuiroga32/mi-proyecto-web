import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";


class HotStocksSnippet extends Component {
  
  render() {
    return (
      <div className="hotstocks">
      Hot Stocks
      <div></div>
      </div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(HotStocksSnippet));