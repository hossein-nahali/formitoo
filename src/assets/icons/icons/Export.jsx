export const Export = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"{...props}>
        <path d="M9.31995 6.49994L11.8799 3.93994L14.4399 6.49994" stroke={props.color ? props.color : "#292D32"}
              strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.88 14.18V4.01001" stroke={props.color ? props.color : "#292D32"} strokeWidth="1.5"
              strokeMiterlimit="10" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M4 12C4 16.42 7 20 12 20C17 20 20 16.42 20 12" stroke={props.color ? props.color : "#292D32"}
              strokeWidth="1.5" strokeMiterlimit="10"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)