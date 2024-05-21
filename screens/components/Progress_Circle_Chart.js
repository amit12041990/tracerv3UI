import React from 'react';
import { View,Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Colors_Profile } from '../../constant/Colors';



const Progress_Circle_Chart = () => {

  const options = {
    chart: {
      height: 500,
      type: "radialBar",
    },
    series: [86],
    colors: ["#AC3B61"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#123C69",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -20,
            color: "#fff",
            fontSize: "50px",
          },
          value: {
            color: "#fff",
            fontSize: "45px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#AC3B61"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  const optionsString = JSON.stringify(options);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      <style>
        body {
          background-color: 'transparent';
          margin: 0;
      
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
    <View style={{ height: 225 }}>

        <View style={{backgroundColor:Colors_Profile.btn_text,padding:5}}>
        <Text style={{fontFamily:'poppins_m',color:Colors_Profile.secondary}}>Language ➡️</Text>
        </View>
        
      <WebView source={{ html: htmlContent }}  style={{borderRadius:70}}/>
    </View>
  );
};

export default Progress_Circle_Chart;
