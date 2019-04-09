import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";





class HotStocksSnippet extends Component {
  
  render() {
    return (
      <div className="hotstocks">
      <div className="hotstocks-title">Hot Stocks</div>
      <div className="hotstock">
      <div className="stock">Stock</div>
      <div className="stock">Action</div>
      <div className="stock">Follow</div>
      <div className="stock">See graph</div>
      </div>
      <div className="hotstock">
      <div className="stock">Stock</div>
      <div className="stock">Action</div>
      <div className="stock">Follow</div>
      <div className="stock">See graph</div>
      </div>
      <div className="hotstock">
      <div className="stock">Stock</div>
      <div className="stock">Action</div>
      <div className="stock">Follow</div>
      <div className="stock">See graph</div>
      </div>
      <div className="hotstock">
      <div className="stock">Stock</div>
      <div className="stock">Action</div>
      <div className="stock">Follow</div>
      <div className="stock">See graph</div>
      </div>
      <div className="hotstock">
      <div className="stock">Stock</div>
      <div className="stock">Action</div>
      <div className="stock">Follow</div>
      <div className="stock">See graph</div>
      </div>

      
      
      
      </div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(HotStocksSnippet));