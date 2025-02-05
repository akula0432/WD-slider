import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const StickerIcon = ({width = 17, height = 16, ...props}: SvgProps) => (
  <Svg viewBox="0 0 17 16" fill="none" width={width} height={height} {...props}>
    <Path
      stroke="#0F172A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.833 2v2.667A1.333 1.333 0 0 0 11.167 6h2.666m-8 2.667h.007m5.327 0h.006m-4.006 2s.533.666 1.333.666c.867 0 1.333-.666 1.333-.666m1-8.667h-7A1.333 1.333 0 0 0 2.5 3.333v9.334C2.5 13.4 3.1 14 3.833 14h9.334a1.334 1.334 0 0 0 1.333-1.333v-7L10.833 2Z"
    />
  </Svg>
);
