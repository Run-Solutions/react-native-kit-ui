import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export default function SpaceIcon({ size = 24, color = '#fff', ...props }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <Path d="M12 2c3 3 4 7 4 10s-1 7-4 10" stroke={color} strokeWidth="2" />
    </Svg>
  );
}
