import { View, Text,Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors_Profile } from '../constant/Colors'
import PagerView from 'react-native-pager-view';

import Progress_Circle_Chart from './components/Progress_Circle_Chart'
import Progress_Bar_Chart from './components/Progres_Bar_Chart'
import Progress_Data_Table from './components/Progress_Data_Table'
import Emotion_Donut_Chart from './components/Emotion_Donut_Chart'
import Tonality_Donut_Chart from './components/Tonality_Donut_Chart'
import Top_Header from './components/Header';
const {height,width} = Dimensions.get('window')
export default function Grammer_Screen() {

  return (
    <SafeAreaView>
      <View style={{backgroundColor:Colors_Profile.background,height:height}}>
        
        <Top_Header screen_info='language and sentiment score'/>
        <ScrollView style={{maxHeight:height-20}}>
          <View>
            <PagerView style={{height:250}} initialPage={0}>
            <View style={{height:225,marginVertical:10,paddingHorizontal:10,overflow: 'hidden',}} key={1}>
            
        <Progress_Circle_Chart/>
        
        </View>
        <View style={{height:225,marginVertical:10,paddingHorizontal:10,overflow: 'hidden',}} key={2}>
        <Emotion_Donut_Chart/>
        </View>
        <View style={{height:225,marginVertical:10,paddingHorizontal:10,overflow: 'hidden',}} key={3}>
        <Tonality_Donut_Chart/>
        </View>
    
            </PagerView>
            <View style={{height:250,marginVertical:5,paddingHorizontal:10,overflow: 'hidden',}}>
     <Progress_Bar_Chart/> 
        </View>
       
        <View style={{maxHeight:'auto',marginVertical:5,paddingHorizontal:10,overflow: 'hidden',}}>
          <Text style={{marginVertical:2,fontFamily:'poppins_r',backgroundColor:Colors_Profile.btn_text,color:Colors_Profile.secondary}}>Data Table</Text>
     <Progress_Data_Table/>
     <Progress_Data_Table/>
        </View>
        <View style={{height:100,paddingHorizontal:10,overflow: 'hidden',}}>
 
        </View>
          </View>
       
        </ScrollView>
      
      </View>

    </SafeAreaView>
  )
}
