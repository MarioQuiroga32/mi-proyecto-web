import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";


class StockSnippets extends Component {
  
  render() {
    return (
      <div className="stock-snippet">A card from every stock with a graphic will appear here</div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(StockSnippets));