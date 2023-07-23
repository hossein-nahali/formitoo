import {Language} from "../../../config/Language.js";
import {useContext} from "react";
import GeneralContext from "../../../context/GeneralContext.js";

export const TitleSidebar = () => {
    const {setting} = Language.fa
    const {dispatch} = useContext(GeneralContext)

    return (
        <div className={'title-sidebar'}>
            <h2>{setting}</h2>
            <div className={'close'}>
                <i className="gg-close" onClick={() => dispatch({type: 'close_sidebar'})}/>
            </div>
        </div>
    )
}