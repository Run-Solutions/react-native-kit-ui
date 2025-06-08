import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Table({ headers = [], data = [] }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {headers.map((h, i) => (
          <View key={i} style={styles.cell}>
            <Text style={[styles.text, styles.headerText]}>{h}</Text>
          </View>
        ))}
      </View>
      <ScrollView>
        {data.map((row, ri) => (
          <View key={ri} style={styles.row}>
            {row.map((cell, ci) => (
              <View key={ci} style={styles.cell}>
                <Text style={styles.text}>{cell}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#0d6efd',
  },
  row: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#333',
  },
  cell: {
    flex: 1,
    padding: 8,
  },
  text: {
    color: '#fff',
  },
  headerText: {
    fontWeight: 'bold',
  },
});
