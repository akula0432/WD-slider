import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SensitiveIcon = ({
  width = 16,
  height = 17,
  ...props
}: SvgProps) => (
  <Svg
    viewBox="0 0 16 17 "
    fill="none"
    width={width}
    height={height}
    {...props}>
    <Path
      stroke="#0F172A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2.5 10 2.667-5.333L7.833 10M3.167 8.667h4M14.5 6v4m0-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </Svg>
);
