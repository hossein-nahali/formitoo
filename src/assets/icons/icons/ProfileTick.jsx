export const ProfileTick = ({color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path d="M16.2451 21.4312L17.9551 23.1412L21.3751 19.7212" stroke="#1DD1A1" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M13.6799 12.2287C13.5674 12.2175 13.4324 12.2175 13.3087 12.2287C10.6312 12.1387 8.50493 9.945 8.50493 7.245C8.49368 4.48875 10.7324 2.25 13.4887 2.25C16.2449 2.25 18.4837 4.48875 18.4837 7.245C18.4837 9.945 16.3462 12.1387 13.6799 12.2287Z"
            stroke={color ? color : "#1DD1A1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path
            d="M13.4887 24.5363C11.4412 24.5363 9.40492 24.0188 7.85242 22.9838C5.12992 21.1613 5.12992 18.1913 7.85242 16.38C10.9462 14.31 16.0199 14.31 19.1137 16.38"
            stroke={color ? color : "#1DD1A1"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)