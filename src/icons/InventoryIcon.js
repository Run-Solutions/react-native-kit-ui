import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export default function InventoryIcon({ size = 24, color = '#fff', ...props }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Rect x="3" y="4" width="18" height="16" stroke={color} strokeWidth="2" />
      <Path d="M3 9h18M3 14h18" stroke={color} strokeWidth="2" />
    </Svg>
  );
}
