import React, { Component } from "react";
import { withAuthConsumer } from "../../contexts/AuthStore";
import { withRouter } from "react-router-dom";
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

const date = new Date();
const yesterday = date.setDate(date.getDate() - 1);
const oneDayAgo = date.setDate(date.getDate() - 2);
const twoDaysAgo = date.setDate(date.getDate() - 3);
const threeDaysAgo = date.setDate(date.getDate() - 4);
const fourDaysAgo = date.setDate(date.getDate() - 5);
const fiveDaysAgo = date.setDate(date.getDate() - 6);

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
    stocks: []
  }

  interval = undefined

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ stocks: '' })
    }, 1000)
  }

  getDateTime = timestamp => {
    const hours = new Date(timestamp).getHours()
    const minutes = new Date(timestamp).getMinutes()
    const seconds = new Date(timestamp).getSeconds()
    return `${hours}:${minutes}:${seconds}`
  }

  getRandomData = () => ~~(Math.random() * 100)


  getFullData = () => new Array(6).fill(null).map(_ => this.getRandomData())

  setDynamicDataChart = () => {
    return {
      labels: [this.getDateTime(fiveDaysAgo), this.getDateTime(fourDaysAgo), this.getDateTime(threeDaysAgo), this.getDateTime(twoDaysAgo), this.getDateTime(twoDaysAgo), this.getDateTime(oneDayAgo)],
      datasets: [{
        label: 'Stock name will go here',
        data: this.getFullData(),
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
      data = {this.setDynamicDataChart()}
      width={100}
      height={31}
      options={options}
        /></div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(StockSnippets));