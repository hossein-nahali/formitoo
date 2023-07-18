import './assets/css/Menu.scss'
import {MenuList} from "../../config/MenuList.jsx";
import {TooltipArrow} from "../../assets/icons/index.js";
import {Link} from "react-router-dom";

export const Menu = () => {

    return (
        <div className={'main-menu'}>
            <ul>
                {MenuList.map(item => {
                    return (
                        <li key={item.path} data-content={item.tooltip}>
                            <Link to={item.path}>{item.icon}</Link>
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