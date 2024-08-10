import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ListingIcon(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G
                clipPath="url(#clip0_68_4026)"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M12.412 23.063H2.86a1.875 1.875 0 01-1.875-1.875V2.813c0-1.036.84-1.876 1.875-1.876h14.063c1.035 0 1.875.84 1.875 1.875v9.017" />
                <Path d="M9 5h6.563M9 8.75h6.563M9 12.5h6.563M9 16.25h2.815M9 20h2.459m7.854-2.813s.708-1.125 2.109-1.125c1.249 0 2.11 1.155 2.11 2.5 0 1.557-1.174 3.4-4.22 5-3.045-1.6-4.218-3.443-4.218-5 0-1.345.86-2.5 2.11-2.5 1.4 0 2.108 1.125 2.108 1.125z" />
            </G>
            <Defs>
                <ClipPath id="clip0_68_4026">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default ListingIcon
