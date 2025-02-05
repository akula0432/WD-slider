import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const LayoutListIcon = ({
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
      d="M9.333 3.167H14M9.333 6.5H14m-4.667 4H14m-4.667 3.333H14M2.667 2.5H6c.368 0 .667.298.667.667V6.5A.667.667 0 0 1 6 7.167H2.667A.667.667 0 0 1 2 6.5V3.167c0-.369.298-.667.667-.667Zm0 7.333H6c.368 0 .667.299.667.667v3.333A.667.667 0 0 1 6 14.5H2.667A.667.667 0 0 1 2 13.833V10.5c0-.368.298-.667.667-.667Z"
    />
  </Svg>
);
