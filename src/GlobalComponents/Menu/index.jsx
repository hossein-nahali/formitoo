import './assets/css/Menu.scss'
import {ClipboardExport, ClipboardText, Home, TooltipArrow, UserSquare} from "../../assets/icons";
import {useState} from "react";
import {Language} from "../../config/Language.js";
import {NavLink} from "react-router-dom";

export const Menu = () => {
    const [menu] = useState([
        {
            tooltip: Language.fa.home_tooltip,
            icon: <Home/>,
            path: "/home",
            active: false
        },
        {
            tooltip: Language.fa.list_test,
            icon: <ClipboardText/>,
            path: "test/list",
            active: false
        },
        {
            tooltip: Language.fa.create_test,
            icon: <ClipboardExport/>,
            path: "test/create",
            active: false
        },
        {
            tooltip: Language.fa.list_users,
            icon: <UserSquare/>,
            path: "/list_users",
        },
    ])


    return (
        <div className={'main-menu'}>
            <ul>
                {menu.map(item => {
                    return (
                        <li key={item.path} data-content={item.tooltip}>
                            <NavLink to={item.path}>{item.icon}</NavLink>
                            <div className={'arrow'}>
                                <TooltipArrow/>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}