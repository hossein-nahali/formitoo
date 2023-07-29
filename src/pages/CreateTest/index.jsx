import {Title} from "../../GlobalComponents/Title/index.jsx";
import {Language} from "../../config/Language.js";
import './assets/css/style.scss'

export const CreateTest = () => {
    const {create_test, desc_create_test} = Language.fa

    return (
        <div className={'create-test-page'}>
            <Title title={create_test} presonal={27} desc={desc_create_test} is_show_desc={true}/>
        </div>
    )
}