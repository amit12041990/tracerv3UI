import { View, Text, Dimensions, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors_Profile } from "../../constant/Colors";


import TagCloud_Chart from "../components/comp_tagcloud/TagCloud_Chart";
import TagCloud_Table from "../components/comp_tagcloud/TagCloud_Table";
import Top_Header from "../components/Header";



const { height, width } = Dimensions.get("window");
export default function TagCloud_Screen() {
  return (
    <SafeAreaView>
      <View
        style={{ backgroundColor: Colors_Profile.background, height: height }}
      >
        <Top_Header screen_info='Parents dashboard' />

        <ScrollView style={{ maxHeight: height - 20 }}>
          <View style={{paddingHorizontal:10}}>
            <View
              style={{
                flexDirection:'row',
                justifyContent:'center',
               
               
                marginVertical: 10,
              
                overflow: "hidden",
                backgroundColor:'#fff',
          
              }}
              key={1}
            >
              <TagCloud_Chart/>
             
            </View>

            <View
              style={{
                maxHeight: "auto",
                marginVertical: 5,
                
                overflow: "hidden",
              }}
            >
              <Text
                style={{
                  marginVertical: 2,
                  fontFamily: "poppins_r",
                  backgroundColor: Colors_Profile.btn_text,
                  color: Colors_Profile.secondary,
                }}
              >
                Summary
              </Text>
              <TagCloud_Table/>
            </View>
           
            <View
              style={{ height: 100, paddingHorizontal: 10, overflow: "hidden" }}
            ></View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
