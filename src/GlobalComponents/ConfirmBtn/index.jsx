import './assets/css/ConfirmBtn.scss'
import {useState} from "react";
import {Language} from "../../config/Language.js";

export const ConfirmBtn = ({text = '', secondary_text = '', icon, secondary_icon = '', setConfirm}) => {
    const {yes, no} = Language.fa
    const [click, setClick] = useState(false)

    const ClickHandler = () => {
        setClick(true)
    }

    const ConfirmationHandler = () => {
        setClick(false)
        setConfirm(true)
    }

    const CancelHandler = () => {
        setClick(false)
        setConfirm(false)
    }

    const BtnConfirmGenerator = () => {
        if (!click) return ''
        return (
            <div className="btn-questions">
                <p className={'delete'} onClick={ConfirmationHandler}>{yes}</p>
                <p className={'cancel'} onClick={CancelHandler}>{no}</p>
            </div>
        )
    }

    return (
        <div className={`btn ${click ? 'confirm-mode' : ''}`} onClick={() => !click ? ClickHandler() : ''}>
            <div>
                <div>{click ? secondary_icon : icon}</div>
                {click ? <span>{secondary_text}</span> : <span>{text}</span>}
            </div>
            <BtnConfirmGenerator/>
        </div>
    )
}