import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import StockService from '../../services/StockService'


class ColdStocksSnippet extends Component {
  state = {
    stock: {
      symbol: "",
      close: "",
      volume: ""
    },
    stocksList: [],
    trv: "",
    mmm: "",
    gs: "",
    mcd: "",
    axp: ""
  }

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks() {
    StockService.listStocks()
      .then(data => {
        this.setState({ trv: data['trv'].map(x => x.volume).slice(-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
        this.setState({ mmm: data['ibm'].map(x => x.volume).slice(-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
        this.setState({ gs: data['gs'].map(x => x.volume).slice(-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
        this.setState({ mcd: data['mcd'].map(x => x.volume).slice(-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
        this.setState({ axp: data['axp'].map(x => x.volume).slice(-1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") })
      })
  }

  render() {
    return (
      <div className="hotstocks">
      <div className="hotstocks-title">Cold Stocks (volume)</div>
      <div className="hotstock">
      <div className="stock">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Travelers Companies Inc</div>
      <div className="stock coldstock-volume">{this.state.trv}</div>
      </div>
      <div className="hotstock">
      <div className="stock">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3M</div>
      <div className="stock coldstock-volume">{this.state.mmm}</div>
      </div>
      <div className="hotstock">
      <div className="stock">&nbsp;&nbsp;&nbsp;&nbsp;Goldman Sachs</div>
      <div className="stock coldstock-volume">{this.state.gs}</div>
      </div>
      <div className="hotstock">
      <div className="stock">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;McDonald's</div>
      <div className="stock coldstock-volume">{this.state.mcd}</div>
      </div>
      <div className="hotstock">
      <div className="stock">American Express</div>
      <div className="stock coldstock-volume">{this.state.axp}</div>
      </div>

      
      
      
      </div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(ColdStocksSnippet));