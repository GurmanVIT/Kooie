import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NextIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
        />
    </Svg>
)
export default NextIcon
