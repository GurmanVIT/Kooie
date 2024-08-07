import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"

function RenterProfileIcon(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_68_3813)">
                <Mask
                    id="a"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={24}
                    height={24}
                >
                    <Path
                        d="M23.25 23.25V.75H.75v22.5h22.5z"
                        fill="#fff"
                        stroke="#fff"
                        strokeWidth={1.5}
                    />
                </Mask>
                <G
                    mask="url(#a)"
                    stroke="#6E6E73"
                    strokeWidth={1.5}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <Path d="M2.813 14.531v-7.64A4.687 4.687 0 017.5 2.203h9a4.687 4.687 0 014.687 4.688v7.64M23.062 19.922c0 1.035-.839 1.875-1.875 1.875H2.812a1.875 1.875 0 010-3.75h18.375c1.036 0 1.875.84 1.875 1.875z" />
                    <Path d="M10.172 7.5a2.016 2.016 0 114.031 0 2.016 2.016 0 01-4.031 0zM15.05 14.531a2.835 2.835 0 00-2.741-2.11h-.524c-1.319 0-2.427.902-2.742 2.11" />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_68_3813">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default RenterProfileIcon
