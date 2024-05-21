import React, { useState } from 'react';
import { View,Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Colors_Profile } from '../../constant/Colors';
import { Button } from 'react-native-paper';
import Tonality_Emotion_Progress_Bar from './Tonality_Emotion_Bar';


const Separator_line = () =>{
  return (
    <>
    <View style={{ height: 1, backgroundColor: Colors_Profile.secondary, marginVertical: 10 }}></View>
    </>
  )
}

const Progress_Data_Table = () => {
  
  const options = {
    series: [{
    name: 'Impression',
    data: [44]
  }, {
    name: 'Spelling',
    data: [53]
  }, {
    name: 'Fluency',
    data: [12]
  }, {
    name: 'Grammer',
    data: [9]
  }, ],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        style: {
            fontSize: '50px',
            fontWeight: 'bold',
          },
       
        
      }
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
 
  xaxis: {
    categories: ['% Level'],
    labels: {
      formatter: function (val) {
        return val + "%"
      },
      show:false
    }
  },
  yaxis: {
   
    labels: {
      
        show:false
      }
    
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "%"
      }
    },
    style: {
        fontSize: '40px',
        fontWeight: 'bold',
       
      },
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'left',
    offsetX: 40,
    fontSize: '30px',
    
  }
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
 
  const [isOpen,setIsOpen]=useState(false)
  const handleOpen= () =>{  setIsOpen(!isOpen)}
  return (
    <View style={{marginVertical:5,backgroundColor:'white' }}>

        <View style={{backgroundColor:'#fff',padding:5,maxHeight:'auto',flex:1,justifyContent:'space-between'}}>
          
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
    <Text style={{ fontFamily: 'poppins_m', color:Colors_Profile.Primary, flex: 1 }}>
      To increase the font size of each value in your ApexCharts stacked bar chart, you need to adjust the dataLabels settings within the plotOptions object. Specifically, you should enable the data labels and set the desired font size.To increase the font size of each value in your ApexCharts stacked bar chart, you need to adjust the dataLabels settings within the plotOptions object. Specifically, you should enable the data labels and set the desired font size.
    </Text>
    <Text onPress={handleOpen} >⬇️</Text>
  </View>
        </View>
        {
         isOpen && (
          <>
            <Separator_line/>
          <View style={{height:150}}>
          <WebView source={{ html: htmlContent }}/>
          </View>
          <Separator_line/>
          <View style={{paddingHorizontal:10}}>
          <Tonality_Emotion_Progress_Bar emotion='Emotion' label="anger" percentage={65} color="#ff6347"  />
          <Tonality_Emotion_Progress_Bar emotion='Tonality' label="Professional" percentage={90} color="#0FA4AF"  />
          </View>
          
          </>
        
         )
        }
      
   
    </View>
  );
};

export default Progress_Data_Table;
