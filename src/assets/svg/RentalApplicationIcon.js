import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"

function RentalApplicationIcon(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_68_3983)">
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
                <G mask="url(#a)" stroke="#6E6E73" strokeWidth={1.5}>
                    <Path
                        d="M11.813 4.688a.188.188 0 10.375 0 .188.188 0 00-.376 0z"
                        fill="#6E6E73"
                    />
                    <Path
                        d="M17.625 15.24v5.947c0 1.036-.84 1.875-1.875 1.875h-7.5a1.875 1.875 0 01-1.875-1.875v-3.75M6.375 8.438V2.813c0-1.036.84-1.875 1.875-1.875h7.5c1.035 0 1.875.84 1.875 1.875v3.75M11.063 19.313h1.874M10.125 14.063H2.812a1.875 1.875 0 01-1.874-1.876v-1.874c0-1.036.839-1.875 1.874-1.875H8.25c1.035 0 1.875.839 1.875 1.874v3.75zM10.125 15.938v-1.876"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M13.875 12.188h7.313c1.035 0 1.875-.84 1.875-1.876V8.438c0-1.036-.84-1.875-1.875-1.875H15.75c-1.036 0-1.875.839-1.875 1.875v3.75zM13.875 14.063v-1.876"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_68_3983">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default RentalApplicationIcon
