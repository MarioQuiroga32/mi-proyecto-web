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


class StockSnippets extends Component {
  
  render() {
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
    }

      const data = {
        labels: [fiveDaysAgo, fourDaysAgo, threeDaysAgo, twoDaysAgo, oneDayAgo, yesterday],
        datasets: [{
          label: 'Stock name will go here',
          data: [12, 19, 3, 5, 2, 3], 
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
      }
  
    return (
      <div className="stock-snippet">
      <Line
      data = {data}
      style={{marginTop: '5%' }}
      width={100}
      height={30}
      options={options}
        /></div>
   );
  }
}
  
  
  

export default withAuthConsumer(withRouter(StockSnippets));