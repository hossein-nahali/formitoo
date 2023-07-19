import {Language} from "../../../config/Language.js";

export const Title = () => {
    const {good_morning, name, status_desc_title, personality_test} = Language.fa

    return (
        <div className="title-page">
            <h1>{good_morning} {name}</h1>
            <p>{status_desc_title.today} <span>27</span> {status_desc_title.person} {status_desc_title.in_test}
                <span>{personality_test}</span> {status_desc_title.participated}</p>
        </div>
    )
}