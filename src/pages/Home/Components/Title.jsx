import {Language} from "../../../config/Language.js";
import {Setting2} from "../../../assets/icons";
import {useContext} from "react";
import GeneralContext from "../../../context/GeneralContext.js";

export const Title = () => {
    const {good_morning, name, status_desc_title, personality_test} = Language.fa
    const {dispatch} = useContext(GeneralContext)

    return (
        <div className="title-page">
            <div>
                <h1>{good_morning} {name}</h1>
                <p>{status_desc_title.today} <span>27</span> {status_desc_title.person} {status_desc_title.in_test}
                    <span>{personality_test}</span> {status_desc_title.participated}</p>
            </div>
            <div onClick={() => dispatch({type: "open_sidebar"})}>
                <Setting2/>
            </div>
        </div>
    )
}