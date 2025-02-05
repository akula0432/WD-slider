import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const PlusIcon = ({width = 16, height = 17, ...props}: SvgProps) => (
  <Svg viewBox="0 0 16 17" width={width} height={height} {...props}>
    <Path
      stroke={props.stroke || '#0F172A'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.333 8.5h9.334M8 3.833v9.334"
    />
  </Svg>
);
