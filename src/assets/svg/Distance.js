import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const Distance = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G
      stroke="#6E6E73"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M8.488 23.297H1.691V16.5m6.797 6.797V16.5m0 6.797h15.797V16.5H8.488m-6.797 0h6.797m-6.797 0V.703h6.797V16.5M8.488 4.125h-2.25M8.488 7.125h-1.5M8.488 10.125h-2.25M8.488 13.125h-1.5M11.863 16.5v2.25M14.863 16.5V18M17.863 16.5v2.25M20.863 16.5V18" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.988 0h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Distance
