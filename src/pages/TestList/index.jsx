import {Title} from "../../GlobalComponents/Title";
import {Language} from "../../config/Language.js";
import './assets/css/TestList.scss'
import {ConfirmBtn} from "../../GlobalComponents/ConfirmBtn/index.jsx";
import {Danger, Trash} from "../../assets/icons";
import {useState} from "react";
import {Table} from "../../GlobalComponents/Table/index.jsx";
import {TestListPage} from "../../config/fakeData/TestListPage.js";

export const TestList = () => {
    const {list_test, personality_test, delete_selected_items, confirm_delete} = Language.fa
    const [btnConfirm, setBtnConfirm] = useState(false)
    const props_confirm_component = {
        text: delete_selected_items,
        secondary_text: confirm_delete,
        icon: <Trash/>,
        secondary_icon: <Danger/>,
        setConfirm: setBtnConfirm,
        loading: btnConfirm.loading,
    }

    return (
        <div className={'test-list-page'}>
            <Title title={list_test} presonal={27} test={personality_test} is_show_desc={true}/>
            <div className="events">
                <ConfirmBtn {...props_confirm_component}/>
            </div>
            <Table headerTable={TestListPage.header} contentTable={TestListPage.body}/>
        </div>
    )
}