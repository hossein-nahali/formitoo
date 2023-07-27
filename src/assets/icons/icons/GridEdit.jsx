export const GridEdit = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path
            d="M21.0832 10.5417V8.62508C21.0832 3.83341 19.1665 1.91675 14.3748 1.91675H8.62484C3.83317 1.91675 1.9165 3.83341 1.9165 8.62508V14.3751C1.9165 19.1667 3.83317 21.0834 8.62484 21.0834H9.58317"
            stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.94531 8.146H21.0832" stroke={props.color ? props.color : "#292D32"} strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M1.94531 14.8542H11.4999" stroke={props.color ? props.color : "#292D32"} strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M8.15527 21.0738V1.92627" stroke={props.color ? props.color : "#292D32"} strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M14.8638 11.4904V1.92627" stroke={props.color ? props.color : "#292D32"} strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path
            d="M17.9494 14.0589L13.9724 18.0359C13.819 18.1892 13.6752 18.4863 13.6369 18.6972L13.4165 20.2209C13.3398 20.7671 13.7232 21.1601 14.2694 21.0738L15.7931 20.8534C16.004 20.8247 16.3011 20.6714 16.4544 20.518L20.4315 16.5409C21.1119 15.8605 21.4378 15.0555 20.4315 14.0493C19.4348 13.0526 18.6394 13.3689 17.9494 14.0589Z"
            stroke={props.color ? props.color : "#292D32"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.3838 14.6243C17.7192 15.8318 18.6679 16.7709 19.8754 17.1159" stroke={props.color ? props.color : "#292D32"} strokeWidth="1.5"
              strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)