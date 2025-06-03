import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import Button from '../src/components/Button';
import Card from '../src/components/Card';
import LightTheme from '../src/themes/light';

export default function DocPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>react-native-kit-ui</Text>
        <Text style={styles.paragraph}>
          Esta es la documentación básica de la librería interna de componentes.
        </Text>
        <Card title="Botón">
          <Button label="Presióname" onPress={() => {}} />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightTheme.colors.background,
  },
  content: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: LightTheme.colors.text,
  },
  paragraph: {
    marginBottom: 16,
    color: LightTheme.colors.text,
  },
});
