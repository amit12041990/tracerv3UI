import { View, Text, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors_Profile } from "../../constant/Colors";

import History_Range_chart from "../components/comp_pages/History_Range_chart";
import HistoryTable from "../components/comp_pages/History_Range_Table";

const { height } = Dimensions.get("window");

export default function Pages_History() {
  const data = [
    { key: '2023-05-01T10:00:00Z_https://example.com/1', time: '2023-05-01T10:00:00Z', url: 'https://example.com/1', sec: 30 },
    { key: '2023-05-01T10:30:00Z_https://example.com/2', time: '2023-05-01T10:30:00Z', url: 'https://example.com/2', sec: 45 },
    { key: '2023-05-02T11:00:00Z_https://example.com/3', time: '2023-05-02T11:00:00Z', url: 'https://example.com/3', sec: 60 },
    // Rest of the data
];


  return (
    <SafeAreaView>
      <View
        style={{ backgroundColor: Colors_Profile.background, height: height }}
      >
        <View style={{ height: 100, backgroundColor: Colors_Profile.Primary }}>
          <View
            style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}
          >
            <Text
              style={{
                fontFamily: "poppins_r",
                color: Colors_Profile.text,
                fontSize: 24,
                textTransform: "uppercase",
              }}
            >
              Amit
            </Text>
            <Text
              style={{
                fontFamily: "poppins_m",
                color: Colors_Profile.text,
                fontSize: 16,
                textTransform: "uppercase",
              }}
            >
            Screen Time Chart
            </Text>
          </View>
        </View>

        <View style={{paddingHorizontal:10,marginTop:5}}>
          <History_Range_chart/>
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
              Timeline View
            </Text>
            <HistoryTable data={data}/>
          </View>
          <View style={{ height: 100, paddingHorizontal: 10, overflow: "hidden" }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
