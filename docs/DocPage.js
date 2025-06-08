import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import Button from '../src/components/Button';
import Card from '../src/components/Card';
import TextInput from '../src/components/TextInput';
import DateInput from '../src/components/DateInput';
import FileInput from '../src/components/FileInput';
import Modal from '../src/components/Modal';
import Table from '../src/components/Table';
import InventoryIcon from '../src/icons/InventoryIcon';
import SpaceIcon from '../src/icons/SpaceIcon';
import LightTheme from '../src/themes/light';

export default function DocPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>react-native-kit-ui</Text>
        <Text style={styles.paragraph}>
          Ejemplo de componentes de la librería.
        </Text>

        <Card title="Inputs">
          <TextInput placeholder="Texto" />
          <DateInput value="2025-01-01" onChange={() => {}} style={{ marginTop: 8 }} />
          <FileInput onPick={() => {}} style={{ marginTop: 8 }} />
        </Card>

        <Card title="Botones e iconos">
          <Button label="Mostrar modal" onPress={() => setShowModal(true)} />
          <InventoryIcon style={{ marginTop: 12 }} />
          <SpaceIcon style={{ marginTop: 12 }} />
        </Card>

        <Card title="Tabla">
          <Table headers={["ID", "Nombre"]} data={[["1", "Caja"], ["2", "Estante"]]} />
        </Card>
      </ScrollView>

      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <Text style={{ color: LightTheme.colors.text }}>Hola desde el modal</Text>
        <Button label="Cerrar" onPress={() => setShowModal(false)} style={{ marginTop: 12 }} />
      </Modal>
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
