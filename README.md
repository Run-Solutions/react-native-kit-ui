# react-native-kit-ui

Librería de componentes y estilos para proyectos React Native. Su objetivo es unificar la imagen y experiencia de usuario en las aplicaciones internas de la compañía.

---

## ✨ Características

- **Componentes reutilizables**: botones, tarjetas y más.
- **Temas**: claro y oscuro listos para usar.
- **Documentación integrada**: una pequeña vista de ejemplo en `docs/`.

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
│   └── themes/        # Definición de temas
├── docs/              # Página de documentación de ejemplo
├── index.js           # Punto de entrada de la librería
└── DEVELOPMENT_PLAN.md
```

## 🚀 Uso rápido

```jsx
import { Button, Card, LightTheme } from '@run/react-native-kit-ui';

export default function App() {
  return (
    <Card title="Bienvenido" style={{ backgroundColor: LightTheme.colors.card }}>
      <Button label="Presióname" onPress={() => console.log('click')} />
    </Card>
  );
}
```

Para ver un ejemplo completo de la documentación ejecuta la app dentro del directorio `docs` con React Native.

## 📚 Guía de desarrollo

Las tareas sugeridas para continuar con este proyecto se detallan en [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md).
