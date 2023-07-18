import './assets/css/home.scss'
import {Sidebar} from "../../GlobalComponents/Sidebar";

export const Home = () => {


    return (
        <div className={'home-parent'}>
            <div className={'main'}>home page</div>
            <Sidebar/>
        </div>
    )
}