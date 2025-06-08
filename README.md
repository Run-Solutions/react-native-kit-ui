# react-native-kit-ui

Librería de componentes y estilos para proyectos React Native. Busca estandarizar la imagen y experiencia de usuario en las aplicaciones internas de la compañía.

---

## ✨ Características

- **Componentes reutilizables**: botones, tarjetas, campos de texto, selección de fechas, carga de archivos, modales y tablas.
- **Temas**: claro y oscuro con tonalidades azul rey y negros.
- **Iconos**: elementos relacionados con inventario y espacio.
- **Documentación integrada**: una vista de ejemplo en `docs/`.

## 📦 Instalación

```bash
npm install @run/react-native-kit-ui
# o
yarn add @run/react-native-kit-ui
```

## 📁 Estructura

```
react-native-kit-ui/
├── src/
│   ├── components/    # Componentes de UI
│   ├── icons/         # Iconos SVG
│   └── themes/        # Definición de temas
├── docs/              # Página de documentación de ejemplo
├── index.js           # Punto de entrada de la librería
└── DEVELOPMENT_PLAN.md
```

## 🚀 Uso rápido

```jsx
import {
  Button,
  Card,
  TextInput,
  DateInput,
  FileInput,
  Modal,
  Table,
  InventoryIcon,
  SpaceIcon,
  LightTheme,
} from '@run/react-native-kit-ui';

export default function App() {
  return (
    <Card title="Inventario" style={{ backgroundColor: LightTheme.colors.card }}>
      <TextInput placeholder="Nombre" />
      <DateInput value="2025-01-01" onChange={() => {}} />
      <FileInput onPick={() => {}} />
      <Button label="Guardar" onPress={() => console.log('save')} />
    </Card>
  );
}
```

Para ver un ejemplo completo de la documentación ejecuta la app dentro del directorio `docs` con React Native.

## 📚 Guía de desarrollo

Las tareas sugeridas para continuar con este proyecto se detallan en [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md).
