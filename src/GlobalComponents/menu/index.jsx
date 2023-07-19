import './assets/css/Menu.scss'
import {ClipboardExport, ClipboardText, Home, TooltipArrow, UserSquare} from "../../assets/icons";
import {useState} from "react";
import {Language} from "../../config/Language.js";
import {NavLink, useLocation} from "react-router-dom";

export const Menu = () => {
    const location = useLocation()
    const [menu] = useState([
        {
            tooltip: Language.fa.home_tooltip,
            icon: <Home color={location.pathname === '/' ? '#070E16' : ''}/>,
            path: "/",
            active: false
        },
        {
            tooltip: Language.fa.list_test,
            icon: <ClipboardText color={location.pathname === '/list_test' ? '#070E16' : ''}/>,
            path: "/list_test",
            active: false
        },
        {
            tooltip: Language.fa.create_test,
            icon: <ClipboardExport color={location.pathname === '/create_test' ? '#070E16' : ''}/>,
            path: "/create_test",
            active: false
        },
        {
            tooltip: Language.fa.list_users,
            icon: <UserSquare color={location.pathname === '/list_users' ? '#070E16' : ''}/>,
            path: "/list_users",
            active: false
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