import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import pickService from '../../services/PickService'

class ProperPickRender extends Component {
  
  state = {
    pick: {
      user: "",
      action: "",
      description: ""
    },
    picksList : []
  }
  
  componentDidMount () {
    pickService.listFollowingPicks().then(picksList => this.setPicks(picksList));
  }
 
  setPicks = picksList => this.setState({ picksList });
  

  render() {

    return (
      <div>
        {this.state.picksList.map((pick, index) => (
          <div key={index} className="pick-snippet">
            <div className="pick-snippet-pic"></div>
      <div className="pick-snippet-username"><a>{pick.user}</a></div>
      <div className="pick-snippet-text">{pick.description}</div>
      <div className="pick-snippet-stock">{pick.stock}</div>
      <div className="pick-snippet-date">{pick.date}</div>
      <div className="pick-snippet-action">{pick.action}</div>
          </div>
        ))}
        </div>
     
    );
  }
}


class PickSnippet extends Component {



  render() {
    return (
      <div className="center-column">
      
      <ProperPickRender picksList />
      </div>
   
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(PickSnippet));