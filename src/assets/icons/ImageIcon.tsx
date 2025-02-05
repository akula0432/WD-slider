import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ImageIcon = ({width = 17, height = 16, ...props}: SvgProps) => (
  <Svg viewBox="0 0 17 16" fill="none" width={width} height={height} {...props}>
    <Path
      stroke="#0F172A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.5 10-2.057-2.057a1.333 1.333 0 0 0-1.886 0L4.5 14M3.833 2h9.334c.736 0 1.333.597 1.333 1.333v9.334c0 .736-.597 1.333-1.333 1.333H3.833A1.333 1.333 0 0 1 2.5 12.667V3.333C2.5 2.597 3.097 2 3.833 2Zm4 4a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0Z"
    />
  </Svg>
);
