import { View, Text } from 'react-native'
import WebView from 'react-native-webview'
import React from 'react'
import { Colors_Profile } from '../../../constant/Colors'

const History_Range_chart = () => {
  const screenOptions = {
    series: [
      {
        name: "Screen Time",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chart: {
      height: 450,
      type: "area",
    },
    legend: {
      show: true,
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: '60px',
        fontWeight: 'bold',
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          fontSize: '20px', // Change this value to increase/decrease the font size
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '20px', // Change this value to increase/decrease the font size
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  
  const optionsString = JSON.stringify(screenOptions);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      <style>
        body {
          background-color: 'transparent';
          margin: 0;
      
        },
        #newChart{
          margin-top:100px
        }
       
        
      </style>
    </head>
    <body>
      <div id="newChart"></div>
      <script>
        document.addEventListener("DOMContentLoaded", function() {
          var options = ${optionsString};
          var chart = new ApexCharts(document.querySelector("#newChart"), options);
          chart.render();
        });
      </script>
    </body>
    </html>
  `;
  return (
    <View  style={{height:225}}>

        <View style={{backgroundColor:Colors_Profile.btn_text,padding:5}}>
        <Text style={{fontFamily:'poppins_m',color:Colors_Profile.secondary}}>Screen Time ➡️</Text>
        </View>
        
      <WebView source={{ html: htmlContent }}  style={{borderRadius:70}}/>
    </View>
  )
}

export default History_Range_chart