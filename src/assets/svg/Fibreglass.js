import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Fibreglass = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <G
            stroke="#6E6E73"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path d="m18.201 14.767 5.318 2.767-11.525 5.998L.469 17.534l5.318-2.767M3.35 13.493l5.264-2.739M6.231 14.987l5.25-2.732M9.183 16.453l11.385-5.943" />
            <Path d="M18.232 9.249 23.52 12l-11.526 5.997L.47 12l5.318-2.767" />
            <Path d="m23.52 6.466-11.526 5.997L.47 6.466 11.994.469 23.52 6.466Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h23.988v24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Fibreglass
