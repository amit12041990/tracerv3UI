import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton, Divider } from "react-native-paper"; // Import Paper components

export default function TagCloud_Table() {
  const totalVideoWatch = 1234;
  const totalPagesVisit = 456;
  const totalCommentMade = 78;

  return (
    <View style={styles.container}>
      <View style={[styles.detailRow, styles.videoDetail]}>
        <IconButton icon="play" color="#000" size={20} />
        <Text style={styles.detailText}>{totalVideoWatch} Total Videos Watched</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={[styles.detailRow, styles.pageDetail]}>
        <IconButton icon="link" color="#000" size={20} />
        <Text style={styles.detailText}>{totalPagesVisit} Total Pages Visited</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={[styles.detailRow, styles.commentDetail]}>
        <IconButton icon="comment" color="#000" size={20} />
        <Text style={styles.detailText}>{totalCommentMade} Total Comments Made</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f8ff", // Light blue background for uniqueness
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    margin: 2,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  videoDetail: {
    backgroundColor: "#d1e7dd", // Light green background for video detail
  },
  pageDetail: {
    backgroundColor: "#ffe5b4", // Light orange background for pages detail
  },
  commentDetail: {
    backgroundColor: "#f8d7da", // Light red/pink background for comment detail
  },
  detailText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#000",
  },
  divider: {
    marginVertical: 8,
    backgroundColor: "#ccc",
  },
});
