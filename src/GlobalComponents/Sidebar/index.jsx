import './assets/css/Sidebar.scss'
import {Profile, Search, SliderAuthor, Status, TotalParticipant} from "./conponents";
import {Language} from "../../config/Language.js";
import {useContext} from "react";
import GeneralContext from "../../context/GeneralContext.js";


export const Sidebar = (props) => {
    const {setting} = Language.fa
    const {state, dispatch} = useContext(GeneralContext)

    return (
        <div className={`sidebar-user ${props?.className ? props?.className : ''}`}>
            <div className={'title-sidebar'}>
                <h2>{setting}</h2>
                <div className={'close'}>
                    <i className="gg-close" onClick={() => dispatch({type: 'close_sidebar'})}/>
                </div>
            </div>
            <Profile/>
            <Search/>
            <TotalParticipant/>
            <SliderAuthor/>
            <Status/>
        </div>
    )
}