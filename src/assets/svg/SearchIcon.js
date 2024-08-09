import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const SearchIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Rect width={44} height={44} fill="#F5F5F7" rx={22} />
        <Path
            stroke="#6E6E73"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21.583 29.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM30.333 30.333l-1.666-1.666"
        />
    </Svg>
)
export default SearchIcon;
