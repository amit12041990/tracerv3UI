import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import { Colors_Profile } from '../../constant/Colors'


const Progress_Bar_Chart = () => {

 const options ={
    series: [
    {
      name: 'Actual',
      data: [
        {
          x: 'Grammer',
          y: 80,
          goals: [
            {
              name: 'Expected',
              value: 75,
              strokeWidth: 2,
              strokeDashArray: 2,
              strokeColor: '#AC3B61'
            }
          ]
        },
        {
          x: 'Spell',
          y: 44,
          goals: [
            {
              name: 'Expected',
              value: 54,
              strokeWidth: 5,
              strokeHeight: 10,
              strokeColor: '#AC3B61'
            }
          ]
        },
        {
          x: 'Impression',
          y: 54,
          goals: [
            {
              name: 'Expected',
              value: 52,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#AC3B61'
            }
          ]
        },
        {
          x: 'Fluency',
          y: 66,
          goals: [
            {
              name: 'Expected',
              value: 61,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#AC3B61'
            }
          ]
        },
       
       
      ]
    }
  ],
    chart: {
    height: 500,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  colors: [Colors_Profile.Primary],
  dataLabels: {
    style: {
      fontSize: '50px',
      fontWeight: 'bold',
    },
    formatter: function(val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
          .goals
  
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`
      }
      return val
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: [Colors_Profile.Primary, Colors_Profile.secondary]
    },
    fontSize: '30px',
    fontWeight: 'bold',
  },
  xaxis: {
    labels: {
      style: {
        fontSize: '20px',

       
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: '25px',
        fontWeight: 'bold',
        color: '#AC3B61'
     
       
      },
    },
  },
  tooltip: {
    style: {
      fontSize: '30px',
      fontWeight: 'bold',
     
    },
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
    <View  style={{ height: 400,}}>
      <View style={{backgroundColor:Colors_Profile.btn_text,padding:5}}>
        <Text style={{fontFamily:'poppins_m',color:Colors_Profile.secondary}}>Overviews</Text>
        </View>
      <WebView source={{ html: htmlContent }}/>
    </View>
  )
}

export default Progress_Bar_Chart