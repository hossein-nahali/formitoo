export const TickSquare = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g id="vuesax/linear/tick-square">
            <g id="tick-square">
                <path id="Vector" d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      fill={props.checked ? "#1DD1A1" : ""} fillOpacity="0.4" stroke="#292D32" strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
                {props.checked &&
                    <path id="Vector_2" d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round"/>}
            </g>
        </g>
    </svg>
)