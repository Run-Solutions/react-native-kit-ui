import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function FileInput({ label = 'Seleccionar archivo', onPick, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPick} activeOpacity={0.8}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#222',
  },
  label: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
