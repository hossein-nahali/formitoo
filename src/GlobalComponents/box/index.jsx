export const Box = ({children}) => {
    const style = {
        borderRadius: 40,
        background: '#FFF',
        boxShadow: '0 4px 50px 0 rgba(131, 203, 236, 0.10)',
    }


    return (
        <div style={style}>
            {{children}}
        </div>
    )
}