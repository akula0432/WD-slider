import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const AudioLinesIcon = ({
  width = 16,
  height = 17,
  ...props
}: SvgProps) => (
  <Svg fill="none" viewBox="0 0 16 17" width={width} height={height} {...props}>
    <Path
      stroke="#0F172A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.333 7.167v2M4 4.5v7.333M6.667 2.5v12m2.666-8.667V10.5M12 3.833V12.5m2.667-5.333v2"
    />
  </Svg>
);
