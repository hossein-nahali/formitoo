import './assets/css/Sidebar.scss'
import {Profile, Search, SliderAuthor, Status, TitleSidebar, TotalParticipant} from "./conponents";


export const Sidebar = (props) => {

    return (
        <div className={`sidebar-user ${props?.className ? props?.className : ''}`}>
            <TitleSidebar/>
            <Profile/>
            <Search/>
            <TotalParticipant/>
            <SliderAuthor/>
            <Status/>
        </div>
    )
}