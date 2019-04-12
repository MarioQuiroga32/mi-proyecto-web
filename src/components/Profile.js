import React, { Component } from "react";
import Navbar from "./misc/NavBar";
import RecommendedSnippet from "./snippets/RecommendedSnippet";
import ProfilePickSnippet from "./snippets/ProfilePickSnippet";
import ProfileSnippet from "./snippets/ProfileSnippet";
import HotStocksSnippet from "./snippets/HotStocksSnippet";
import ColdStocksSnippet from "./snippets/ColdStocksSnippet";


class Profile extends Component {
  state = {
    pick: {
      user: "",
      username: "",
      action: "",
      description: ""
    },
    user: {
      id: "",
      username: "",
      avatarUrl: ""
    },
    showModal: false
  };

  render() {
    console.log(this.props)
    return (
      <div className="profile">
      <Navbar />
      <div className="profile-columns">
      <div className="profile-left">
      <ProfileSnippet/>
      <HotStocksSnippet/>
      </div>
     
      <div className="profile-center">
      <ProfilePickSnippet/>
      </div>
      
      <div className="profile-right">
      <RecommendedSnippet/>
      <ColdStocksSnippet/>
      </div>
      </div>
     
      </div>    
      
      
    );
  }
}

export default Profile;