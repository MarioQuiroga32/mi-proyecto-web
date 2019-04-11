import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import StockService from '../../services/StockService';




class HotStocksSnippet extends Component {
  
  state = {
    stock: {
      symbol: "",
      close: "",
      volume: ""
    },
    stocksList: []
  }

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks() {
    const stocks = ['axp', 'aapl', 'ba', 'cat', 'cvx', 'csco', 'ko', 'dwdp', 'dis', 'xom', 'gs', 'hd', 'ibm', 'intc', 'jnj', 'jpm', 'mcd', 'mrk', 'msft', 'nke', 'pfe', 'pg', 'trv', 'utx', 'unh', 'vz', 'v', 'wba', 'wmt'];

    StockService.listStocks()
      .then(data => {
        for(let i = 0; i < stocks.length; i++) {
        this.setState({ stocksList: data[stocks[i]].map(x =>  stocks[i] + ' ' + x.volume).slice(-1) })
       } })
  }




  render() {
    console.log(this.state.stocksList)
    return (
      <div className="hotstocks">
      <div className="hotstocks-title">Hot Stocks</div>
      <div className="hotstock">
      <div className="stock">Stock</div>
      <div className="stock">{this.state.stocksList}</div>
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