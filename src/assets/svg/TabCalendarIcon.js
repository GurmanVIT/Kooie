import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TabCalendarIcon = () => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none">
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.996 16.7h.009M8.495 13.5h.009M8.294 16.7h.01"
        />
    </Svg>
)
export default TabCalendarIcon
