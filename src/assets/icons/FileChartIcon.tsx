import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const FileChartIcon = ({
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
      d="M9.333 1.833V4.5a1.333 1.333 0 0 0 1.334 1.333h2.666m-8 6.667v-.667M8 12.5v-4m2.667 4v-2M10 1.833H4a1.333 1.333 0 0 0-1.333 1.334v10.666A1.333 1.333 0 0 0 4 15.167h8a1.333 1.333 0 0 0 1.333-1.334V5.167L10 1.833Z"
    />
  </Svg>
);
