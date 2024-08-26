import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BedIcon = (props, { color, size }) => {
    console.log(color, size, props)
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width={props?.size && props?.size} height={props?.size && props?.size} {...props}>
            <Path
                fill={props?.color ? props?.color : "#6E6E73"}
                d="M6.75 4h10.5a2.75 2.75 0 0 1 2.745 2.582L20 6.75v3.354a2.752 2.752 0 0 1 1.994 2.459l.006.187v7.5a.75.75 0 0 1-1.493.102l-.007-.102V18h-17v2.25a.75.75 0 0 1-.648.743L2.75 21a.75.75 0 0 1-.743-.648L2 20.25v-7.5c0-1.259.846-2.32 2-2.647V6.75a2.75 2.75 0 0 1 2.582-2.745L6.75 4Zm12.5 7.5H4.75a1.25 1.25 0 0 0-1.244 1.122l-.006.128v3.75h17v-3.75a1.25 1.25 0 0 0-1.122-1.243l-.128-.007Zm-2-6H6.75a1.25 1.25 0 0 0-1.244 1.122L5.5 6.75V10H7a1 1 0 0 1 1-1h2a1 1 0 0 1 .993.883L11 10h2a1 1 0 0 1 1-1h2a1 1 0 0 1 .993.883L17 10h1.5V6.75a1.25 1.25 0 0 0-1.122-1.244L17.25 5.5Z"
            />
        </Svg>
    )
}
export default BedIcon
