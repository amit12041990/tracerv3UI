import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import { Colors_Profile } from '../constant/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Top_Header from './components/Header'

const {height,width}=Dimensions.get('window')

const Parent_Screen = () => {
  return (
   <SafeAreaView>
    <View style={{backgroundColor:Colors_Profile.background,height:height}}>
    <Top_Header screen_info='Parents dashboard'/>
    </View>
   </SafeAreaView>
  )
}

export default Parent_Screen