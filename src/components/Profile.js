import React, { Component } from "react";
import Navbar from "./misc/NavBar";
import RecommendedSnippet from "./snippets/RecommendedSnippet";
import PickSnippet from "./snippets/PickSnippet";


class Profile extends Component {
  state = {
    showModal: false
  };

  render() {
    const { user } = this.props;
    return (
      <div className="profile">
      <Navbar />
      <div className="thumbnail"></div>
      <div className="profile-columns">
      <div className="profile-left"></div>
      <div className="profile-center"></div>
      <div className="profile-right"></div>
      </div>
     
      </div>    
      
      
    );
  }
}

export default Profile;