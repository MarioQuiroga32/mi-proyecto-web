import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./misc/NavBar";
import LeftColumn from "./misc/LeftColumn"
import RightColumn from "./misc/RightColumn";


class Home extends Component {
  state = {
    showModal: false
  };

  render() {
    const { user } = this.props;
    return (
      <div className="home">
       <Navbar />
       <LeftColumn/>
        <RightColumn/>
        </div>
    );
  }
}

export default Home;
