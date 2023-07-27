import './assets/css/Table.scss'
import {TickSquare} from "../../assets/icons";
import {useEffect, useState} from "react";

export const Table = (props) => {
    const {headerTable = [], contentTable = [], tableCustomize = false, checkBoxHandler, checkAllBoxHandler} = props
    const [checkedAll, setCheckedAll] = useState(false)

    useEffect(() => {
        const checkBox = !!contentTable.find(itemListPage => itemListPage.checked === false)
        setCheckedAll(!checkBox);
    }, [contentTable])

    const position = (value) => {
        if (!value) return null
        switch (value) {
            case "start":
                return {justifyContent: 'flex-start'}
            case "end":
                return {justifyContent: 'flex-end'}
            case "centered":
                return {justifyContent: 'center'}
            default:
                return {justifyContent: 'flex-start'}
        }
    }

    const styleTableBody = (data) => {

        return ({
            width: `${data?.fullWidth ? '100%' : `calc(100% / ${headerTable.length})`}`,
            ...position(data?.position),
            ...data.style
        })
    }

    const styleTableHeader = (data) => {

        return ({
            display: 'flex',
            width: `${data?.fullWidth ? '100%' : `calc(100% / ${headerTable.length})`}`,
            ...position(data?.position),
            ...data.style
        })
    }
    return (
        <div className={`table ${tableCustomize.check_box ? 'with-checkbox' : ''}`}>
            <div>
                <div className={'table-header'}>
                    {tableCustomize.check_box &&
                        <div className={'checkbox'} onClick={() => checkAllBoxHandler(checkedAll, setCheckedAll)}>
                            <TickSquare checked={checkedAll}/>
                        </div>}
                    {headerTable.map(headerItem => {
                        return <div key={headerItem.id}
                                    style={styleTableHeader(headerItem)}>
                            {headerItem.name}
                        </div>
                    })}
                </div>
                <div className={'table-body'}>
                    {contentTable.map((item) => {
                        return (
                            <div key={item.id} className={'table-item'}>
                                {
                                    tableCustomize.check_box &&
                                    <div className={'checkbox'} onClick={() => checkBoxHandler(item)}>
                                        <TickSquare checked={item.checked}/>
                                    </div>
                                }

                                {item.content.map((itemTable, index) => {
                                    return (
                                        <div key={index} style={styleTableBody(itemTable)}>
                                            {itemTable.name}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}