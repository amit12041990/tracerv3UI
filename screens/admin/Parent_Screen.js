import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import { Colors_Profile } from '../../constant/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Top_Header from '../components/Header';
import Childs_Card from '../components/comp_parent/Child_List';
import Form_Modal from '../components/comp_parent/Form_Modal';



const {height,width}=Dimensions.get('window')

const demo_childs = [
  {
    id: 123456,
    name: 'amit kumar',
    age: 32,
    gender: 'male',
    dob: '1992-01-15' // example date of birth
  },
  {
    id: 365246,
    name: 'sneha dubey',
    age: 29,
    gender: 'female',
    dob: '1995-04-22' // example date of birth
  }
];

const Parent_Screen = () => {
  return (
    <SafeAreaView style={{backgroundColor: Colors_Profile.background, flex: 1,}}>
  
      <Top_Header screen_info='Parents dashboard' />
      <Form_Modal/>
   
    {
      demo_childs.map(each=>(
        <Childs_Card child={each} key={each.id}/>
      ))
    }  
   
  
  </SafeAreaView>
  )
}

export default Parent_Screen