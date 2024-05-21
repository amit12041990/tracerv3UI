import React from "react";
import { View,Text,StyleSheet } from "react-native";
const Tonality_Emotion_Progress_Bar = ({ emotion,label, percentage, color }) => {
    return (
        <View style={styles.container}>
          <Text style={styles.emotionLabel}>{emotion}</Text>
          <View style={styles.barContainer}>
            <View
              style={[
                styles.bar,
                { width: `${percentage}%`, backgroundColor: color },
              ]}
            >
              <Text style={styles.barText}>
                {label} {percentage}%
              </Text>
            </View>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: "row", // Align items in a row
        alignItems: "center", // Center items vertically
        marginVertical: 10,
      },
      emotionLabel: {
        width: 80, // Fixed width for emotion label
        fontSize: 16,
        marginRight: 10, // Space between label and bar
      },
      barContainer: {
        flex: 1, // Take up the remaining space
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        overflow: "hidden",
        height: 40, // Height to accommodate text inside the bar
        justifyContent: "center",
      },
      bar: {
        height: "100%",
        justifyContent: "center", // Center contents vertically
        alignItems: "center", // Center contents horizontally
      },
      barText: {
        color: "#fff", // White color for better contrast
        fontSize: 14,
        textAlign: "center",
      },
    });

export default Tonality_Emotion_Progress_Bar