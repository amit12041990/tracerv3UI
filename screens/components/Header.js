import { View, Text } from 'react-native'
import React from 'react'
import { Colors_Profile } from '../../constant/Colors'
const Top_Header = ({screen_info}) => {
  return (
    <View>
     <View style={{height:100,backgroundColor:Colors_Profile.Primary,}}>
          <View style={{flex:1,justifyContent:'center',paddingHorizontal:20}}>
          <Text style={{fontFamily:'poppins_r',color:Colors_Profile.text,fontSize:24,textTransform:'uppercase'}}>Amit</Text>
          <Text style={{fontFamily:'poppins_m',color:Colors_Profile.text,fontSize:16,textTransform:'uppercase'}}>{screen_info}</Text>
          </View>
         
        </View>
    </View>
  )
}

export default Top_Header