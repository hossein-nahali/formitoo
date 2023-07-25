import './assets/css/Sidebar.scss'
import {EditUser, Profile, Search, SliderAuthor, Status, TitleSidebar, TotalParticipant} from "./conponents";
import {useState} from "react";


export const Sidebar = (props) => {
    const [openSetting, setOpenSetting] = useState(false)

    const CheckDataSidebar = () => {
        if (openSetting) {
            return <EditUser/>
        }

        return (
            <>
                <Profile setStateSetting={setOpenSetting}/>
                <Search/>
                <TotalParticipant/>
                <SliderAuthor/>
                <Status/>
            </>
        )
    }

    return (
        <div className={`sidebar-user ${props?.className ? props?.className : ''}`}>
            <TitleSidebar is_setting={openSetting} setStateSetting={setOpenSetting}/>
            <CheckDataSidebar/>
        </div>
    )
}