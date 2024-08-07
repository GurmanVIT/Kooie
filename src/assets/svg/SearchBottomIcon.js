import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchBottomIcon(props) {
    return (
        <Svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22.5 22l-2-2"
                stroke={props.stroke}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SearchBottomIcon

