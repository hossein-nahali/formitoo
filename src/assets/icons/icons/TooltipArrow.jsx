export const TooltipArrow = ({color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
        <g filter="url(#filter0_b_224_1787)">
            <path
                d="M7.25 14.5V11.2738C7.25 7.27419 10.0896 5.63085 13.5575 7.63669L16.3488 9.25585L19.14 10.875C22.6079 12.8809 22.6079 16.1554 19.14 18.1613L16.3488 19.7804L13.5575 21.3996C10.0896 23.3692 7.25 21.7379 7.25 17.7263V14.5Z"
                fill="#1E2B3B" fillOpacity="0.99" stroke={color ? color : "#1E2B3B"} strokeOpacity="0.99"
                strokeWidth="1.5"
                strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <filter id="filter0_b_224_1787" x="-10" y="-10" width="49" height="49" filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_224_1787"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_224_1787" result="shape"/>
            </filter>
        </defs>
    </svg>
)