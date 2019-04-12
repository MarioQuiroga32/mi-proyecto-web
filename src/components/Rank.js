import React, { Component } from "react";
import Navbar from "./misc/NavBar";
import ProfileSnippet from "./snippets/ProfileSnippet";
import HotStocksSnippet from "./snippets/HotStocksSnippet";
import RecommendedSnippet from "./snippets/RecommendedSnippet";
import ColdStocksSnippet from "./snippets/ColdStocksSnippet";
import RankSnippet from "./snippets/RankSnippet";


class Rank extends Component {
  render() {
  return (
    <div className="home">
        
    <Navbar />
   

   <div className="columns">
   
   <div className="left-column">
   <ProfileSnippet/>
    <HotStocksSnippet/>
    </div>

    <div className="center-column">
    <RankSnippet/>
    </div>
    
    <div className="right-column">
    <RecommendedSnippet/>
    <ColdStocksSnippet/>
    </div>
   </div>
    
    
  </div>
  );
  }
}

export default Rank