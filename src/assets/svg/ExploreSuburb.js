import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ExploreSuburb(props) {
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
                d="M12.188 23.063V4.688c0-1.036-.84-1.875-1.876-1.875h-7.5c-1.035 0-1.874.839-1.874 1.874v18.375h22.125M6.563.938v1.875"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M8.438 23.063v-5.625h-3.75v5.625m3.75-9.375V12m0-3.75V6.562m-3.75 7.125V12m0-3.75V6.562m18.375 16.5V9.938c0-1.035-.84-1.874-1.875-1.874h-5.25m3.374 3.75h-3.375m3.376 3.75h-3.375m1.687 3.75v3.75"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ExploreSuburb
