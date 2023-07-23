export const Menu = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 7H21" stroke={props.color ? props.color : "#292D32"} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 12H21" stroke={props.color ? props.color : "#292D32"} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 17H21" stroke={props.color ? props.color : "#292D32"} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
)