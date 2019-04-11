import React, { Component } from "react";
import Navbar from "./misc/NavBar";
import ProfileSnippet from "./snippets/ProfileSnippet";
import HotStocksSnippet from "./snippets/HotStocksSnippet";
import RecommendedSnippet from "./snippets/RecommendedSnippet";
import ColdStocksSnippet from "./snippets/ColdStocksSnippet";
import StockSnippet from "./snippets/StockSnippet";

class Market extends Component {

  state = {
    stocks: []
  }

  interval = undefined


  listStocks = () => this.state.stocks.map((stock, index) => <StockSnippet key={index} {...stock} />)

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
            <StockSnippet stock="axp" name="American Express"/>
            <StockSnippet stock="aapl" name="Apple"/>
            <StockSnippet stock="ba" name="Boeing"/>
            <StockSnippet stock="cat" name="Caterpillar"/>
            <StockSnippet stock="cvx" name="Chevron"/>
            <StockSnippet stock="csco" name="Cisco"/>
            <StockSnippet stock="ko" name="Coca-Cola"/>
            <StockSnippet stock="dwdp" name="DuPont"/>
            <StockSnippet stock="dis" name="Disney"/>
            <StockSnippet stock="xom" name="ExxonMobil"/>
            <StockSnippet stock="gs" name="Goldman Sachs"/>
            <StockSnippet stock="hd" name="Home Depot"/>
            <StockSnippet stock="ibm" name="IBM"/>
            <StockSnippet stock="intc" name="Intel"/>
            <StockSnippet stock="jnj" name="Johnson & Johnson"/>
            <StockSnippet stock="jpm" name="JP Morgan"/>
            <StockSnippet stock="mcd" name="McDonald's"/>
            <StockSnippet stock="mrk" name="Merck & Co"/>
            <StockSnippet stock="msft" name="Microsoft"/>
            <StockSnippet stock="nke" name="Nike"/>
            <StockSnippet stock="pfe" name="Pfizer"/>
            <StockSnippet stock="pg" name="Procter & Gamble"/>
            <StockSnippet stock="trv" name="The Travelers"/>
            <StockSnippet stock="utx" name="United Technologies"/>
            <StockSnippet stock="unh" name="United Health"/>
            <StockSnippet stock="vz" name="Verizon"/>
            <StockSnippet stock="v" name="Visa"/>
            <StockSnippet stock="wba" name="Walgreens Boots"/>
            <StockSnippet stock="wmt" name="Walmart"/>
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
