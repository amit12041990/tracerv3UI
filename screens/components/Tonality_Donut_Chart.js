import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';
import { Colors_Profile } from '../../constant/Colors';

const Tonality_Donut_Chart = () => {
    var options = {
        series: [44, 55, 41, 17, 15,44, 55, 41, 17, 15],
        labels: ['Joy', 'Sadness', 'Anger', 'Fear', 'Surprise','amit',"sumit",'vikash','sanjit','ankit'], // Add your custom labels here
        chart: {
          type: 'donut',
          height: 450,
          offsetY: 30,
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          position: 'bottom',
          
          fontSize: '25px',
          
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: 16 // Set your desired font size here
          },
          formatter: function (val, opts) {
            return opts.w.globals.labels[opts.seriesIndex] + ": " + val.toFixed(1) + "%"; // Customize the label
          }
        },
      };
    
      const optionsString = JSON.stringify(options);
    
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
          <style>
            body {
              background-color: transparent;
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              width: 100%;
            }
            #chart-container {
              position: relative;
              width: 90%;
              height: 90%;
            }
            #chart-details {
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              display: flex;
              justify-content: space-between;
              width: 100%;
              padding: 10px;
              box-sizing: border-box;
              background-color: rgba(255, 255, 255, 0.8);
            }
            .series-detail {
              font-size: 12px;
              color: #000;
            }
          </style>
        </head>
        <body>
          <div id="chart-container">
            <div id="chart"></div>
          </div>
          <script>
            document.addEventListener("DOMContentLoaded", function() {
              var options = ${optionsString};
              var chart = new ApexCharts(document.querySelector("#chart"), options);
              chart.render();
            });
          </script>
        </body>
        </html>
      `;
    
      return (
        <View style={{ height: 225 }}>
          <View style={{ backgroundColor: Colors_Profile.btn_text, padding: 5 }}>
            <Text style={{ fontFamily: 'poppins_m', color: Colors_Profile.secondary }}>Tonality ⬅️</Text>
          </View>
          <WebView source={{ html: htmlContent }} style={{ borderRadius: 70 }} />
        </View>
      );
    };

export default Tonality_Donut_Chart