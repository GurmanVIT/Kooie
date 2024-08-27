import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function EstimateValueWhiteIcon(props) {
    return (
        <Svg
            width={81}
            height={80}
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={0.5} width={80} height={80} rx={40} fill="#fff" />
            <Path
                d="M36.526 27.787l-7.186 5.6c-1.2.933-2.174 2.92-2.174 4.426v9.88c0 3.094 2.52 5.627 5.614 5.627h15.44c3.093 0 5.613-2.533 5.613-5.613V38c0-1.613-1.08-3.68-2.4-4.6l-8.24-5.773c-1.866-1.307-4.866-1.24-6.666.16zM40.5 47.987v-4"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default EstimateValueWhiteIcon
