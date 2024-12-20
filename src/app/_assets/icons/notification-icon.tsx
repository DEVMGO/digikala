import React from 'react'
import { SVGProps } from './types'

const NotificationIcon = (props: SVGProps) => {
    return (
        <svg
            width={props.width ? props.width : "24"}
            height={props.height ? props.height : "25"}
            viewBox="0 0 24 25"
            fill={props.fill ? props.fill : "none"}
            stroke={props.stroke ? props.stroke : "none"}
            className={props.className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.66701 13.921C4.05686 13.7829 4.39436 13.5275 4.63307 13.1897C4.87177 12.852 4.99997 12.4486 5.00001 12.035V9.035C5.00001 7.17849 5.73751 5.39801 7.05026 4.08526C8.36302 2.7725 10.1435 2.035 12 2.035C13.8565 2.035 15.637 2.7725 16.9498 4.08526C18.2625 5.39801 19 7.17849 19 9.035V12.035C19 12.889 19.54 13.641 20.333 13.921C20.5281 13.9899 20.697 14.1176 20.8164 14.2865C20.9359 14.4554 21 14.6571 21 14.864V19.035C21 19.3002 20.8947 19.5546 20.7071 19.7421C20.5196 19.9296 20.2652 20.035 20 20.035H4.00001C3.73479 20.035 3.48044 19.9296 3.2929 19.7421C3.10537 19.5546 3.00001 19.3002 3.00001 19.035V14.865C2.99979 14.658 3.06383 14.456 3.18331 14.2869C3.30278 14.1178 3.47179 13.9899 3.66701 13.921ZM19 18.035V15.5C18.3918 15.1489 17.8868 14.6438 17.5357 14.0355C17.1846 13.4273 16.9999 12.7373 17 12.035V9.035C17 7.70892 16.4732 6.43715 15.5355 5.49947C14.5979 4.56179 13.3261 4.035 12 4.035C10.6739 4.035 9.40216 4.56179 8.46448 5.49947C7.52679 6.43715 7.00001 7.70892 7.00001 9.035V12.035C7.00017 12.7373 6.81542 13.4273 6.46434 14.0355C6.11326 14.6438 5.60822 15.1489 5.00001 15.5V18.035H19ZM12 23.035C10.615 23.035 9.43701 22.2 9.00001 21.035H15C14.563 22.2 13.385 23.035 12 23.035ZM18.02 3.773L19.524 2.455C21.1238 4.27682 22.0045 6.61945 22.001 9.044H20.001C20.0043 7.10474 19.3 5.23089 18.02 3.774V3.773ZM4.00001 9.043C4.00001 7.077 4.71101 5.223 5.98101 3.773L4.47701 2.455C2.87719 4.27682 1.99652 6.61945 2.00001 9.044L4.00001 9.043Z"
                fill={props.fill ? props.fill : "#424750"}
            />
        </svg>
    )
}

export default NotificationIcon