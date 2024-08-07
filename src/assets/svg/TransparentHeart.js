import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function TransparentHeart(props) {
    return (
        <Svg
            width={38}
            height={38}
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={38} height={38} rx={19} fill="#000" opacity={0.4} />
            <Path
                d="M19.517 27.175c-.284.1-.75.1-1.034 0-2.416-.825-7.816-4.267-7.816-10.1 0-2.575 2.075-4.658 4.633-4.658 1.517 0 2.858.733 3.7 1.866a4.608 4.608 0 013.7-1.866c2.558 0 4.633 2.083 4.633 4.658 0 5.833-5.4 9.275-7.816 10.1z"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default TransparentHeart
