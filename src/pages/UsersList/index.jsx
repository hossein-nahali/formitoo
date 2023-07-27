import {Title} from "../../GlobalComponents/Title";
import {Language} from "../../config/Language.js";
import './assets/css/UsersList.scss'
import {ConfirmBtn} from "../../GlobalComponents/ConfirmBtn/index.jsx";
import {Danger, Trash} from "../../assets/icons";
import {useEffect, useState} from "react";
import {Table} from "../../GlobalComponents/Table/index.jsx";
import {Pagination} from "../../GlobalComponents/Pagination/index.jsx";
import {UsersListPage} from "../../config/fakeData/UsersListPage.jsx";

export const UsersList = () => {
    const {list_users, personality_test, delete_selected_items, confirm_delete} = Language.fa
    const [btnConfirm, setBtnConfirm] = useState(false)
    const [testListPage, setTestListPage] = UsersListPage()
    const [isChecked, setIsChecked] = useState(false)
    const props_confirm_component = {
        text: delete_selected_items,
        secondary_text: confirm_delete,
        icon: <Trash/>,
        secondary_icon: <Danger/>,
        setConfirm: setBtnConfirm,
        loading: btnConfirm.loading,
    }

    useEffect(() => {
        const checkBox = !!testListPage.body.find(itemListPage => itemListPage.checked === true)
        setIsChecked(checkBox);
    }, [testListPage])

    const checkBoxHandler = (item) => {
        const body = testListPage.body.map(itemListPage => {
            if (itemListPage.id === item.id) {
                return {
                    ...itemListPage,
                    checked: !item.checked
                };
            }

            return {...itemListPage}
        })
        setTestListPage(({...testListPage, body}))
    }

    const checkAllBoxHandler = (checkedAll, setCheckedAll) => {
        const body = testListPage.body.map(itemListPage => {
            return {
                ...itemListPage,
                checked: !checkedAll
            };
        })
        setCheckedAll(!checkedAll)
        setTestListPage(({...testListPage, body}))
    }

    return (
        <div className={'test-list-page'}>
            <Title title={list_users} presonal={27} test={personality_test} is_show_desc={true}/>
            {isChecked && <div className="events">
                <ConfirmBtn {...props_confirm_component}/>
            </div>}
            <Table headerTable={testListPage.header} contentTable={testListPage.body}
                   tableCustomize={testListPage.customize} checkBoxHandler={checkBoxHandler}
                   checkAllBoxHandler={checkAllBoxHandler}/>
            <Pagination/>
        </div>
    )
}