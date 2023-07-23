import './assets/css/Table.scss'

export const Table = ({headerTable = [], contentTable = []}) => {

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
        <div className="table">
            <div className={'table-header'}>
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
    )
}