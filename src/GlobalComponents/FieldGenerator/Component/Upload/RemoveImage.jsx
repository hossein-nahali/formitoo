import {ResetHandler} from "./ResetHandler.js";

export const RemoveImage = ({setFields, fields, setDrag, field}) => {
    return (
        <span className={'remove-image'} onClick={() => ResetHandler(setFields, fields, field, setDrag)}>
            <i className="gg-close setting-title-sidebar"/>
        </span>
    )

}