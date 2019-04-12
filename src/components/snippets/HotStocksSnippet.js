import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import StockService from '../../services/StockService'




class HotStocksSnippet extends Component {
  
  state = {
    stock: {
      symbol: "",
      close: "",
      volume: ""
    },
    stocksList: [],
    apple: "",
    microsoft: "",
    disney: "",
    cisco: "",
    intel: ""
  }

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks() {
    StockService.listStocks()
      .then(data => {
        this.setState({ apple: data['aapl'].map(x => x.volume).slice(-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
        this.setState({ microsoft: data['msft'].map(x => x.volume).slice(-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
        this.setState({ disney: data['dis'].map(x => x.volume).slice(-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
        this.setState({ cisco: data['csco'].map(x => x.volume).slice(-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
        this.setState({ intel: data['intc'].map(x => x.volume).slice(-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
      })
  }





  render() {
    console.log(this.state.apple)
    return (
      <div className="hotstocks">
      <div className="hotstocks-title">Hot Stocks</div>
      <div className="hotstock">
      <div className="stock">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apple</div>
      <div className="stock hotstock-volume">{this.state.apple}</div>
      </div>
      <div className="hotstock">
      <div className="stock">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Microsoft</div>
      <div className="stock hotstock-volume">{this.state.microsoft}</div>
      </div>
      <div className="hotstock">
      <div className="stock">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Disney</div>
      <div className="stock hotstock-volume">{this.state.disney}</div>
      </div>
      <div className="hotstock">
      <div className="stock">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cisco</div>
      <div className="stock hotstock-volume">{this.state.cisco}</div>
      </div>
      <div className="hotstock">
      <div className="stock">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intel</div>
      <div className="stock hotstock-volume">{this.state.intel}</div>
      </div>

      
      
      
      </div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(HotStocksSnippet));