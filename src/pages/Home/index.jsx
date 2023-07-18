import './assets/css/home.scss'
import {Sidebar} from "../../GlobalComponents/Sidebar";
import {Menu} from "../../GlobalComponents/menu";

export const Home = () => {


    return (
        <div className={'home-parent'}>
            <Menu/>
            <div className={'main'}>home page</div>
            <Sidebar/>
        </div>
    )
}