import React, { Component } from "react";
import Navbar from "./misc/NavBar";
import ProfileSnippet from "./snippets/ProfileSnippet";
import HotStocksSnippet from "./snippets/HotStocksSnippet";
import RecommendedSnippet from "./snippets/RecommendedSnippet";
import ColdStocksSnippet from "./snippets/ColdStocksSnippet";
import StockSnippet from "./snippets/StockSnippet";


export default () => {
  return (
    <div className="home">
        
    <Navbar />
   

   <div className="columns">
   
   <div className="left-column">
    <ProfileSnippet/>
    <HotStocksSnippet/>
    </div>

    <div className="center-column">
    <StockSnippet/>
    <StockSnippet/>
    <StockSnippet/>
    <StockSnippet/>
    <StockSnippet/>
    <StockSnippet/>
    </div>
    
    <div className="right-column">
    <RecommendedSnippet/>
    <ColdStocksSnippet/>
    </div>
   </div>
    
    
  </div>
  );
}