import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CircleIcon = ({width = 17, height = 16, ...props}: SvgProps) => (
  <Svg fill="none" viewBox="0 0 17 16" width={width} height={height} {...props}>
    <Path
      stroke="#0F172A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 14.667a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334Z"
    />
  </Svg>
);
