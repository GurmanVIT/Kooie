import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowRightIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={props?.size && props?.size} height={props?.size && props?.size} fill="none">
        <Path
            stroke={props?.color ? props?.color : "#6E6E73"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
        />
    </Svg>
)
export default ArrowRightIcon;
