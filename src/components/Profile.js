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
      
      <div className="thumbnail">
      <div className="profile-avatar"> 
      <a title="Mert S. Kaplan" href="/editprofile" className="avatar">
      <img alt="Mert S. Kaplan" src="http://ecuciencia.utc.edu.ec/media/foto/default-user_x5fGYax.png" className="avatar"/>
    </a>
      </div>
      <div className="thumbnail-button btn">
      <button>Follow</button>
      </div>
      </div>


      <div className="profile-columns">
      <div className="profile-left"></div>
     
      <div className="profile-center">
      <PickSnippet/>
      <PickSnippet/>
      <PickSnippet/>
      </div>
      
      <div className="profile-right">
      <RecommendedSnippet/>
      </div>
      </div>
     
      </div>    
      
      
    );
  }
}

export default Profile;