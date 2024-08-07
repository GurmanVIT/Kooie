import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MeterIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            fill="#6E6E73"
            fillRule="evenodd"
            d="M3.5 3.75a.25.25 0 0 1 .25-.25H8v5.75a.75.75 0 0 0 1.5 0V3.5h9.75a.25.25 0 0 1 .25.25V8.5h-7.25a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V10h6.5v4.75a.75.75 0 0 0 1.5 0v-11A1.75 1.75 0 0 0 19.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h15.5A1.75 1.75 0 0 0 21 20.25v-3a.75.75 0 0 0-1.5 0v3a.25.25 0 0 1-.25.25H13v-1.75a.75.75 0 0 0-1.5 0v1.75H3.75a.25.25 0 0 1-.25-.25V14H8v2.75a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75H3.5V3.75Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default MeterIcon
