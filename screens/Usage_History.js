import { View, Text,Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors_Profile } from '../constant/Colors'


import Progress_Circle_Chart from './components/Progress_Circle_Chart'

const {height,width} = Dimensions.get('window')
export default function Usage_History() {

  return (
    <SafeAreaView>
      <View style={{backgroundColor:Colors_Profile.background,height:height}}>
        <View style={{height:100,backgroundColor:Colors_Profile.Primary,}}>
          <View style={{flex:1,justifyContent:'center',paddingHorizontal:20}}>
          <Text style={{fontFamily:'poppins_r',color:Colors_Profile.text,fontSize:24,textTransform:'uppercase'}}>Amit</Text>
          <Text style={{fontFamily:'poppins_m',color:Colors_Profile.text,fontSize:16,textTransform:'uppercase'}}>Usage History</Text>
          </View>
         
        </View>
      
        <ScrollView style={{maxHeight:height-20}}>
          <View>
           
            <View style={{height:225,marginVertical:10,paddingHorizontal:10,overflow: 'hidden',}} key={1}>
            
          {/* <Progress_Circle_Chart/> */}
        
       </View>
    
       
        <View style={{maxHeight:'auto',marginVertical:5,paddingHorizontal:10,overflow: 'hidden',}}>
          <Text style={{marginVertical:2,fontFamily:'poppins_r',backgroundColor:Colors_Profile.btn_text,color:Colors_Profile.secondary}}>Data Table</Text>
    
        </View>
        <View style={{height:100,paddingHorizontal:10,overflow: 'hidden',}}>
 
        </View>
          </View>
       
        </ScrollView>
      
      </View>

    </SafeAreaView>
  )
}
