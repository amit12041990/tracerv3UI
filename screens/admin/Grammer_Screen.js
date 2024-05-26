import { View, Text, Dimensions, Animated, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors_Profile } from '../../constant/Colors';
import PagerView from 'react-native-pager-view';

import Progress_Circle_Chart from '../components/comp_progress/Progress_Circle_Chart';
import Progress_Bar_Chart from '../components/comp_progress/Progres_Bar_Chart';
import Progress_Data_Table from '../components/comp_progress/Progress_Data_Table';
import Emotion_Donut_Chart from '../components/comp_progress/Emotion_Donut_Chart';
import Tonality_Donut_Chart from '../components/comp_progress/Tonality_Donut_Chart';
import Top_Header from '../components/Header';

const { height, width } = Dimensions.get('window');

export default function Grammer_Screen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [60, 0], // Adjust the original height of the header
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight, opacity: headerOpacity }]}>
          <Top_Header screen_info="language and sentiment score" />
        </Animated.View>

        <Animated.ScrollView
          style={{ paddingTop: scrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [40, 0],
              extrapolate: 'clamp',
            }),
          }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
          <View style={styles.content}>
            <PagerView style={styles.pagerView} initialPage={0}>
              <View style={styles.chartContainer} key={1}>
                <Progress_Circle_Chart />
              </View>
              <View style={styles.chartContainer} key={2}>
                <Emotion_Donut_Chart />
              </View>
              <View style={styles.chartContainer} key={3}>
                <Tonality_Donut_Chart />
              </View>
            </PagerView>
            <View style={styles.barChartContainer}>
              <Progress_Bar_Chart />
            </View>
            <View style={styles.dataTableContainer}>
              <Text style={styles.dataTableTitle}>Data Table</Text>
              <Progress_Data_Table />
              <Progress_Data_Table />
            </View>
            <View style={styles.spacer}></View>
          </View>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors_Profile.background,
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  content: {
    flexGrow: 1,
    paddingTop: 60, // Same as the initial header height
  },
  pagerView: {
    height: 250,
  },
  chartContainer: {
    height: 225,
    marginVertical: 10,
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
  barChartContainer: {
    height: 250,
    marginVertical: 5,
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
  dataTableContainer: {
    marginVertical: 5,
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
  dataTableTitle: {
    marginVertical: 2,
    fontFamily: 'poppins_r',
    backgroundColor: Colors_Profile.btn_text,
    color: Colors_Profile.secondary,
  },
  spacer: {
    height: 100,
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
});
