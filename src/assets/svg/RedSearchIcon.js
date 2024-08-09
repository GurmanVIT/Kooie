import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function RedSearchIcon(props) {
    return (
        <Svg
            width={34}
            height={34}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={36} height={36} rx={18} fill="#EF1E28" />
            <Path
                d="M17.583 25.5a7.917 7.917 0 100-15.833 7.917 7.917 0 000 15.833zM26.333 26.333l-1.666-1.666"
                stroke="#FAFAFC"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default RedSearchIcon
