import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"

function IconSetting(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_2182_475)">
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
                <G mask="url(#a)">
                    <Path
                        d="M12 8.313a3.688 3.688 0 100 7.375 3.688 3.688 0 000-7.375zm10.35 1.056l-.998.822a2.344 2.344 0 000 3.619l.998.822a.938.938 0 01.216 1.192l-1.971 3.415a.938.938 0 01-1.141.409l-1.211-.454a2.344 2.344 0 00-3.134 1.81l-.213 1.275a.937.937 0 01-.925.784h-3.943a.938.938 0 01-.924-.784l-.213-1.275a2.344 2.344 0 00-3.134-1.81l-1.211.454a.938.938 0 01-1.14-.41l-1.972-3.414a.937.937 0 01.216-1.192l.998-.822a2.344 2.344 0 000-3.62L1.65 9.37a.938.938 0 01-.216-1.193l1.971-3.414a.938.938 0 011.141-.41l1.211.454a2.344 2.344 0 003.134-1.81l.213-1.275a.937.937 0 01.924-.783h3.943c.459 0 .85.33.925.783l.213 1.276a2.344 2.344 0 003.134 1.809l1.21-.454a.938.938 0 011.142.41l1.971 3.414a.938.938 0 01-.216 1.193z"
                        stroke="#1D1D1F"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_2182_475">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default IconSetting
