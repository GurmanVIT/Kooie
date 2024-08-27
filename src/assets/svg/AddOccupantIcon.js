import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddOccupantIcon(props) {
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
                d="M19 19.5h-4M17 21.5v-4M12.66 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 01-4.27-4.43A4.428 4.428 0 0112.49 2c2.45 0 4.44 1.99 4.44 4.44 0 2.4-1.9 4.35-4.27 4.43zM12.49 21.81c-1.82 0-3.63-.46-5.01-1.38-2.42-1.62-2.42-4.26 0-5.87 2.75-1.84 7.26-1.84 10.01 0"
                stroke="#1D1D1F"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default AddOccupantIcon
