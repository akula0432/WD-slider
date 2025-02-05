import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const FilePenIcon = ({width = 16, height = 17, ...props}: SvgProps) => (
  <Svg fill="none" viewBox="0 0 16 17" width={width} height={height} {...props}>
    <Path
      stroke="#0F172A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 3.833-1.61-1.609c-.25-.25-.588-.39-.942-.39H4a1.333 1.333 0 0 0-1.333 1.333v10.666A1.333 1.333 0 0 0 4 15.167h8a1.333 1.333 0 0 0 1.333-1.334m-8-1.333H6m8.252-3.583a1.416 1.416 0 1 0-2.003-2.002L9.576 9.589a1.333 1.333 0 0 0-.337.57l-.558 1.913a.334.334 0 0 0 .413.413l1.913-.558c.215-.063.411-.179.57-.337l2.675-2.673Z"
    />
  </Svg>
);
