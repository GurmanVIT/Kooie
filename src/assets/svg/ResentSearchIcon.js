import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function ResentSearchIcon(props) {
    return (
        <Svg
            width={96}
            height={96}
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={96} height={96} rx={48} fill="#F5F5F7" />
            <Path
                d="M47 66c10.493 0 19-8.507 19-19 0-10.494-8.507-19-19-19-10.494 0-19 8.506-19 19 0 10.493 8.506 19 19 19zM68 68l-4-4"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ResentSearchIcon
