import {Title} from "../../GlobalComponents/Title";
import {Language} from "../../config/Language.js";
import './assets/css/style.scss'
import {Sidebar} from "./Component";
import {Note2} from "../../assets/icons";

export const CreateTest = () => {
    const {create_test, desc_create_test} = Language.fa

    return (
        <div className={'create-test-page h-100'}>
            <Title title={create_test} presonal={27} desc={desc_create_test} is_show_desc={true}/>
            <div className={'flex'}>
                <div className={'right'}>
                    <div className="input-field">
                        <label htmlFor="display-name">نام نمایشی</label>
                        <div>
                            <input type="text" id="display-name" placeholder="نام نمایشی" className=""
                                   value="حسین نهالی"/>
                            <div className="icon-field">
                                <Note2/>
                            </div>
                        </div>
                    </div>

                    <div className="input-field">
                        <label htmlFor="display-name">نام نمایشی</label>
                        <div>
                            <textarea id="display-name" placeholder="نام نمایشی"/>
                        </div>
                    </div>
                </div>
                <Sidebar/>
            </div>
        </div>
    )
}