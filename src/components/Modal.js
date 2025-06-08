import React from 'react';
import { Modal as RNModal, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Modal({ visible, onClose, children }) {
  return (
    <RNModal transparent visible={visible} animationType="fade">
      <View style={styles.backdrop}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
        <View style={styles.content}>{children}</View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#1c1c1e',
    padding: 20,
    borderRadius: 6,
    width: '80%',
  },
});
