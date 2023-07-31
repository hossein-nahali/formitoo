export const Move = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none" {...props}>
        <g clipPath="url(#clip0_268_2520)">
            <rect x="9" width="4" height="4" rx="2" fill={props.color ? props.color : "#343434"}/>
            <rect width="4" height="4" rx="2" fill={props.color ? props.color : "#343434"}/>
            <rect y="6" width="4" height="4" rx="2" fill={props.color ? props.color : "#343434"}/>
            <rect y="12" width="4" height="4" rx="2" fill={props.color ? props.color : "#343434"}/>
            <rect y="18" width="4" height="4" rx="2" fill={props.color ? props.color : "#343434"}/>
            <rect x="9" y="18" width="4" height="4" rx="2" fill={props.color ? props.color : "#343434"}/>
            <rect x="9" y="12" width="4" height="4" rx="2" fill={props.color ? props.color : "#343434"}/>
            <rect x="9" y="6" width="4" height="4" rx="2" fill={props.color ? props.color : "#343434"}/>
        </g>
        <defs>
            <clipPath id="clip0_268_2520">
                <rect width="13" height="22" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)