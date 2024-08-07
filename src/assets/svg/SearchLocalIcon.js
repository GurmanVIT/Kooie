import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const SearchLocalIcon = () => (
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
            <Path d="M35.73 28.834a1.875 1.875 0 0 1 3.333 1.178c0 .46-.166.883-.419 1.18L34.061 37.3l.055-.068a5.615 5.615 0 0 1-4.428 2.157H18.813a1.875 1.875 0 0 1-1.875-1.875v-1.875c0-1.036.839-1.875 1.875-1.875h3.375a7.363 7.363 0 0 1 4.908-1.875h2.591a1.875 1.875 0 0 1 0 3.75h-3.75M22.375 21.07v5.567c0 1.036.84 1.875 1.875 1.875h5.625c1.035 0 1.875-.839 1.875-1.875V21.07" />
            <Path d="m20.5 22.887 5.258-5.096a1.869 1.869 0 0 1 1.305-.529c.507 0 .967.202 1.304.53l5.258 5.095m-6.563 5.625V25.7m7.306 4.942 1.277-1.7m3 2.25L34.06 37.3" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M16 16.325h24v24H16z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default SearchLocalIcon;
