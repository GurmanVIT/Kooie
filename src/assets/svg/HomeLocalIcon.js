import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const HomeLocalIcon = () => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none">
        <Rect width={56} height={56} y={0.325} fill="#F5F5F7" rx={28} />
        <G
            stroke="#6E6E73"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <Path d="m22.375 32.075 4.3-4.3a1.875 1.875 0 0 1 2.65 0l4.3 4.3" />
            <Path d="M31.75 30.2v3.75c0 1.035-.84 1.875-1.875 1.875h-3.75a1.875 1.875 0 0 1-1.875-1.875V30.2M28 33.95v1.875" />
            <Path d="M39.063 33.013v2.625a3.75 3.75 0 0 1-3.75 3.75H20.687a3.75 3.75 0 0 1-3.75-3.75v-9a3.75 3.75 0 0 1 3.75-3.75h14.625a3.75 3.75 0 0 1 3.75 3.75v2.312m-3.82-6.063-6.042-5.19a1.867 1.867 0 0 0-1.2-.434c-.456 0-.875.162-1.2.433l-6.041 5.191" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M16 16.325h24v24H16z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default HomeLocalIcon;
