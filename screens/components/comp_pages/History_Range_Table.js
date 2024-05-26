import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { IconButton, Colors } from 'react-native-paper'; // Import IconButton and Colors
import { Colors_Profile } from '../../../constant/Colors'; // Assuming you have defined colors here

const HistoryTable = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  // Group data by date and count URLs
  const groupedData = data.reduce((acc, item) => {
    const date = item.time.split('T')[0]; // Extract date from time
    if (!acc[date]) {
      acc[date] = { totalSec: 0, urls: new Set(), details: [] };
    }
    acc[date].totalSec += item.sec;
    acc[date].urls.add(item.url);
    acc[date].details.push(item);
    return acc;
  }, {});

  // Prepare summary data
  const summaryData = Object.keys(groupedData).map(date => ({
    date,
    totalSec: groupedData[date].totalSec,
    totalUrls: groupedData[date].urls.size,
  }));

  const toggleExpand = (date) => {
    setExpanded(expanded === date ? null : date);
  };

  return (
    <FlatList
      data={summaryData}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={() => toggleExpand(item.date)} style={styles.row}>
            <View style={styles.rowContent}>
              <IconButton
                icon={expanded === item.date ? 'chevron-up' : 'chevron-down'}
                color={Colors_Profile.primary}
                size={24}
                onPress={() => toggleExpand(item.date)}
              />
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <View style={styles.rowContent}>
              <Text style={styles.urlText}>{item.totalUrls} URLs</Text>
              <Text style={styles.secText}>{item.totalSec} sec</Text>
            </View>
          </TouchableOpacity>
          {expanded === item.date && (
            <FlatList
              data={groupedData[item.date].details}
              keyExtractor={(detail) => detail.url}
              renderItem={({ item: detail }) => (
                <View style={styles.detailRow}>
                  <Text style={styles.detailText}>{detail.url}</Text>
                  <Text style={styles.secText}>{detail.sec} sec</Text>
                </View>
              )}
            />
          )}
        </View>
      )}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 5,
  },
  flatList: {
    maxHeight: 400, // Adjust the maxHeight as needed
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#fff',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors_Profile.primary,
    marginLeft: 10,
  },
  secText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors_Profile.secondary,
  },
  urlText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors_Profile.secondary,
    marginRight: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  detailText: {
    fontSize: 14,
    color: Colors_Profile.detailText,
  },
});

export default HistoryTable;
