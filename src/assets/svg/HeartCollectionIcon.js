import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const HeartCollectionIcon = () => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none">
        <Rect width={96} height={96} fill="#F5F5F7" rx={48} />
        <Path
            stroke="#6E6E73"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M49.24 66.17c-.68.24-1.8.24-2.48 0C40.96 64.19 28 55.93 28 41.93c0-6.18 4.98-11.18 11.12-11.18 3.64 0 6.86 1.76 8.88 4.48a11.06 11.06 0 0 1 8.88-4.48c6.14 0 11.12 5 11.12 11.18 0 14-12.96 22.26-18.76 24.24Z"
        />
    </Svg>
)
export default HeartCollectionIcon;
