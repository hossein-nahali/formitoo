import './assets/css/Sidebar.scss'
import {Profile, Search, SliderAuthor, Status, TotalParticipant} from "./conponents";
import {Scrollbars} from 'react-custom-scrollbars-2';


export const Sidebar = () => {

    return (
        <div className={'sidebar-user scroll-rtl'}>
            <Scrollbars renderTrackHorizontal={props => <div {...props} style={{display: 'none'}}/>}>
                <Profile/>
                <Search/>
                <TotalParticipant/>
                <SliderAuthor/>
                <Status/>
            </Scrollbars>
        </div>
    )
}