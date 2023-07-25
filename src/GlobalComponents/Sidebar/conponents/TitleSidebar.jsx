import {Language} from "../../../config/Language.js";
import {useContext} from "react";
import GeneralContext from "../../../context/GeneralContext.js";
import {ArrowLeft} from "../../../assets/icons";

export const TitleSidebar = ({is_setting, setStateSetting}) => {
    const {setting, editing_information} = Language.fa
    const {dispatch} = useContext(GeneralContext)

    return (
        <div className={'title-sidebar'}>
            <h2 className={`${is_setting ? 'setting-active' : 'setting-not-active'}`}>
                <span className={'editing-information'}>{editing_information}</span>
                <span className={'setting-title-sidebar'}>{setting}</span>
            </h2>
            <div className={`close ${is_setting ? 'setting-active' : 'setting-not-active'}`}>
                <ArrowLeft className={'editing-information'} onClick={() => setStateSetting(false)}/>
                <i className="gg-close setting-title-sidebar" onClick={() => dispatch({type: 'close_sidebar'})}/>
            </div>
        </div>
    )
}