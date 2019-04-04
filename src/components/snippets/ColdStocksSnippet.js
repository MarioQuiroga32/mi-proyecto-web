import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";


class ColdStocksSnippet extends Component {
  
  render() {
    return (
      <div className="coldstocks">
      <h6>Cold Stocks</h6>
      </div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(ColdStocksSnippet));