import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton, Divider } from "react-native-paper"; // Import Paper components

export default function DetailView() {
  const keyword = "Cats";
  const totalVideoWatch = 1234;
  const totalUrl = 3;
  const totalComment = 56;
  const date = "2024-05-25";

  return (
    <View style={styles.container}>
      <Text style={styles.keywordText}>{keyword}</Text>
      <Divider style={styles.divider} />
      <View style={styles.detailRow}>
        <IconButton icon="play" color="#000" size={20} />
        <Text style={styles.detailText}>{totalVideoWatch} Total Videos Watched</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.detailRow}>
        <IconButton icon="comment" color="#000" size={20} />
        <Text style={styles.detailText}>{totalComment} Total Comments</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.detailRow}>
        <IconButton icon="link" color="#000" size={20} />
        <Text style={styles.detailText}>{totalUrl} Total Pages</Text>
      </View>
      <Text style={styles.dateText}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  keywordText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    marginLeft: 8,
  },
  dateText: {
    fontSize: 14,
    color: "#888",
    marginTop: 8,
  },
  divider: {
    marginVertical: 8,
  },
});
