import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FinanceIcon(props) {
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
                clipPath="url(#clip0_68_3837)"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M8.25 13.688a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM15.75 19.313a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
                <Path d="M15.75 9.938l-7.5 9.374M2.625 8.645v10.668a3.75 3.75 0 003.75 3.75h11.25a3.75 3.75 0 003.75-3.75v-5.649" />
                <Path d="M1 10.188l9.817-8.714A1.868 1.868 0 0112.062 1c.479 0 .915.18 1.246.474l9.817 8.713m-3.563-7.312v4.163" />
            </G>
            <Defs>
                <ClipPath id="clip0_68_3837">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default FinanceIcon
