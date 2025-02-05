import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const GalleryIcon = ({width = 17, height = 16, ...props}: SvgProps) => (
  <Svg viewBox="0 0 17 16" width={width} height={height} fill="none" {...props}>
    <Path
      stroke="#0F172A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.833 2v12M15.167 2v12M5.833 2h5.334c.736 0 1.333.597 1.333 1.333v9.334c0 .736-.597 1.333-1.333 1.333H5.833A1.333 1.333 0 0 1 4.5 12.667V3.333C4.5 2.597 5.097 2 5.833 2Z"
    />
  </Svg>
);
