import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ShipIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <G
            stroke="#6E6E73"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path d="m4.704 23.297-3.013-9.038 9.038-4.518 9.037 4.518-3.012 9.038H4.704Z" />
            <Path d="m2.768 17.487 7.96-3.98 7.96 3.98M10.729 9.74v13.557M4.704 12.753 6.21 6.728h9.038l1.506 6.025M8.47 6.728h4.518V3.715H8.47v3.013Z" />
            <Path d="M8.47 3.716h4.518V.703H8.47v3.013Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M.988 0H20.47v24H.99z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default ShipIcon
