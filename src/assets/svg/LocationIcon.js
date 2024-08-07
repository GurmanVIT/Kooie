import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LocationIcon(props) {
    return (
        <Svg
            width={17}
            height={16}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.603 2.23L3.263 4.82c-1.98.612-2.008 3.403-.042 4.058l2.291.764a2.132 2.132 0 011.348 1.348l.764 2.291c.655 1.966 3.441 1.933 4.059-.042l2.588-8.34c.509-1.64-1.028-3.177-2.668-2.667z"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default LocationIcon
