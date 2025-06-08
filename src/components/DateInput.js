import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TextInput from './TextInput';

export default function DateInput({ value, onChange, placeholder = 'YYYY-MM-DD', style }) {
  const handlePress = () => {
    // Placeholder: integrate a date picker according to platform requirements
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.wrapper} activeOpacity={0.8}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        editable={false}
        style={[styles.input, style]}
      />
      <View style={styles.iconArea} pointerEvents="none">
        <Text style={styles.icon}>📅</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  input: {
    paddingRight: 40,
  },
  iconArea: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  icon: {
    color: '#888',
  },
});
