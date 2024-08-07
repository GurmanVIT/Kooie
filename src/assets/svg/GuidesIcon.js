import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GuidesIcon(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8 9.495v-4.33L11.75 3l3.75 2.165v4.33l-3.75 2.165L8 9.495z"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M2.625 21.188v-16.5a3.75 3.75 0 013.75-3.75H19.5c1.035 0 1.875.839 1.875 1.875v12.75"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M8.25 15.563h7.5m5.625 5.624c0 1.036-.84 1.875-1.875 1.875h-15a1.875 1.875 0 010-3.75h16.875v1.875z"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default GuidesIcon
