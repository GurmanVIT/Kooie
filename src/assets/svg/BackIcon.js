import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function BackIcon(props) {
    return (
        <Svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={40} height={40} rx={20} fill="#F5F5F7" />
            <Path
                d="M17.57 13.93L11.5 20l6.07 6.07M28.5 20H11.67"
                stroke="#1D1D1F"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default BackIcon
