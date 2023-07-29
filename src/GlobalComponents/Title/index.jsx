import {useContext} from "react";
import GeneralContext from "../../context/GeneralContext.js";
import {Language} from "../../config/Language.js";
import {Setting2} from "../../assets/icons/index.js";
import './assets/css/Title.scss'

export const Title = ({title, is_show_desc, presonal, desc}) => {
    const {status_desc_title, personality_test} = Language.fa
    const {dispatch} = useContext(GeneralContext)

    return (
        <div className="title-page">
            <div>
                <h1>{title}</h1>
                {
                    is_show_desc ?
                        desc ? <p>{desc}</p> :
                            <p>{status_desc_title.today}
                                <span>{presonal ? presonal : 27}</span> {status_desc_title.person} {status_desc_title.in_test}
                                <span>{`${personality_test} `} </span> {status_desc_title.participated}</p>
                        : ''}
            </div>
            <div onClick={() => dispatch({type: "open_sidebar"})}>
                <Setting2/>
            </div>
        </div>
    )
}