import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function InformedImg(props) {
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
                d="M28.5 53.334h24M31.967 35.173h-2.134c-.733 0-1.333.6-1.333 1.334V48c0 .733.6 1.333 1.333 1.333h2.134c.733 0 1.333-.6 1.333-1.333V36.507c0-.734-.6-1.334-1.333-1.334zM41.567 30.92h-2.134c-.733 0-1.333.6-1.333 1.333V48c0 .733.6 1.333 1.333 1.333h2.134c.733 0 1.333-.6 1.333-1.333V32.253c0-.733-.6-1.333-1.333-1.333zM51.167 26.666h-2.134c-.733 0-1.333.6-1.333 1.334v20c0 .733.6 1.333 1.333 1.333h2.134c.733 0 1.333-.6 1.333-1.333V28c0-.733-.6-1.334-1.333-1.334z"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default InformedImg
