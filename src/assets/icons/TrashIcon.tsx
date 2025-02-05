import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const TrashIcon = ({width = 17, height = 16, ...props}: SvgProps) => (
  <Svg viewBox="0 0 17 16" width={width} height={height} fill="none" {...props}>
    <Path
      stroke="#0F172A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.5 4h12m-1.333 0v9.333c0 .667-.667 1.334-1.334 1.334H5.167c-.667 0-1.334-.667-1.334-1.334V4m2 0V2.667c0-.667.667-1.334 1.334-1.334h2.666c.667 0 1.334.667 1.334 1.334V4m-4 3.333v4m2.666-4v4"
    />
  </Svg>
);
