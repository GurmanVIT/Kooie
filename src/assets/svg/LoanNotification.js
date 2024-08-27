import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function LoanNotification(props) {
    return (
        <Svg
            width={81}
            height={80}
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={0.5} width={80} height={80} rx={40} fill="#F5F5F7" />
            <Path
                d="M40.527 27.88c-4.413 0-8 3.587-8 8v3.853c0 .814-.347 2.053-.76 2.747l-1.534 2.547c-.946 1.573-.293 3.32 1.44 3.906a27.895 27.895 0 0017.694 0c1.613-.533 2.32-2.44 1.44-3.907l-1.534-2.546c-.4-.694-.746-1.933-.746-2.747V35.88c0-4.4-3.6-8-8-8z"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
            <Path
                d="M42.993 28.266a8.068 8.068 0 00-1.28-.266c-1.28-.16-2.507-.067-3.653.266a2.647 2.647 0 012.466-1.68c1.12 0 2.08.694 2.467 1.68z"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M44.526 49.414c0 2.2-1.8 4-4 4A4.014 4.014 0 0137.7 52.24a4.014 4.014 0 01-1.174-2.826"
                stroke="#6E6E73"
                strokeWidth={1.5}
                strokeMiterlimit={10}
            />
        </Svg>
    )
}

export default LoanNotification
