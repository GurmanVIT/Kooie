import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const BrokerLocalIcon = () => (
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
            <Path d="m20.5 25.486 4.3-4.3a1.875 1.875 0 0 1 2.65 0l4.3 4.3" />
            <Path d="M29.875 23.61v3.75c0 1.036-.84 1.876-1.875 1.876h-3.75a1.875 1.875 0 0 1-1.875-1.875v-3.75m3.75 3.75v1.875" />
            <Path d="M22.757 39.388H19.75a2.813 2.813 0 0 1-2.813-2.813v-16.5a2.813 2.813 0 0 1 2.813-2.813H32.5a2.813 2.813 0 0 1 2.813 2.813v3.4M20.687 33.763h3.563m5.089 5.073-2.758.552.552-2.758c.072-.363.25-.697.512-.959l8.217-8.216a1.875 1.875 0 1 1 2.651 2.652l-8.216 8.216c-.262.262-.595.44-.958.513Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M16 16.325h24v24H16z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default BrokerLocalIcon;
