import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import StockService from "../../services/StockService";

const date = new Date();


const options = {
  annotation: {
       annotations: [{
           drawTime: 'afterDatasetsDraw',
           borderColor: 'red',
           borderDash: [2, 2],
           borderWidth: 2,
           mode: 'vertical',
           type: 'line',
           value: 10,
           scaleID: 'x-axis-0',
     }]
  },
  maintainAspectRation: false
};


class StockSnippets extends Component {

  state = {
    stocks: [],
    labels: []
  }

  interval = undefined

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks() {
    StockService.listStocks()
      .then(data => {
        this.setState({ stocks: data['axp'].map(x => x.close).slice(-6) })
        this.setState({ labels: data['axp'].map(x => this.getDateTime(x.createdAt)).slice(-6) })
        
        // this.setState({ stocks: data[this.props.stock].map(x => x.close).slice(-6) })
        // this.setState({ labels: data[this.props.stock].map(x => this.getDateTime(x.createdAt)).slice(-6) })
      })
  }

  getDateTime = timestamp => {
    const hours = new Date(timestamp).getHours()
    const minutes = new Date(timestamp).getMinutes()
    const seconds = new Date(timestamp).getSeconds()
    return `${hours}:${minutes}:${seconds}`
  }

  getRandomData = () => ~~(Math.random() * 100)


  getFullData = () => [
    { x: new Date(), y: 1 },
    { x: 2, y: 3 }
  ]

  setDynamicDataChart = () => {
    return {
      labels: this.state.labels,
      datasets: [{
        label: 'Stock name will go here',
        data: this.state.stocks,
        backgroundColor: /*'rgba(197, 0, 26, 0.5)'*/ 'rgba(56,161,242, 0.5)',
        borderColor: /*'rgba(197, 0, 26, 1)'*/ 'rgba(56,161,242, 0.5)',
        borderWidth: 1
      }]
    }
  }

  render() {
    return (
      <div className="stock-snippet">
      <Line
      data={this.setDynamicDataChart()}
      width={100}
      height={31}
      options={options}
        /></div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(StockSnippets));