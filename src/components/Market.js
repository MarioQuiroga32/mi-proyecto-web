import React, { Component } from "react";
import Navbar from "./misc/NavBar";
import ProfileSnippet from "./snippets/ProfileSnippet";
import HotStocksSnippet from "./snippets/HotStocksSnippet";
import RecommendedSnippet from "./snippets/RecommendedSnippet";
import ColdStocksSnippet from "./snippets/ColdStocksSnippet";
import StockSnippet from "./snippets/StockSnippet";

// import { getStock } from 'your-service'

class Market extends Component {

  state = {
    stocks: []
  }

  interval = undefined

  // componentDidMount() {
  //   this.getStocks()
  // }

  // getStocks = () => {
  //   this.interval = setInterval(() => {
  //     getStock()
  //       .then(allStocks => this.setState({ stocks: allStocks }))
  //   }, 1000)
  // };

  listStocks = () => this.state.stocks.map((stock, index) => <StockSnippet key={index} {...stock} />)

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  render() {
    const { stocks } = this.state
    return (
      <div className="home">
        <Navbar />

        <div className="columns">
          <div className="left-column">
            <ProfileSnippet />
            <HotStocksSnippet />
          </div>

          <div className="center-column">
            { this.listStocks() }
            <StockSnippet stock="axp"/>
            <StockSnippet stock="aapl"/>
            <StockSnippet stock="axp"/>
            <StockSnippet stock="axp"/>
            <StockSnippet stock="axp"/>
            <StockSnippet stock="axp"/>
            <StockSnippet stock="axp"/>
            <StockSnippet stock="axp"/>
            <StockSnippet stock="axp"/>
            <StockSnippet stock="axp"/>
            <StockSnippet stock="axp"/>
            <StockSnippet stock="axp"/>
            <StockSnippet stock="axp"/>
          </div>

          <div className="right-column">
            <RecommendedSnippet />
            <ColdStocksSnippet />
          </div>
        </div>
      </div>
    );
  }
}

export default Market;
