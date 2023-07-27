import {Copy, Eye as EyeIcon, GridEdit, Trash} from './../../assets/icons'

export const Option = (props) => {
    const {
        icons = [],
    } = props

    const IconGenerator = () => {
        return icons.map(icon => {
            switch (icon.type) {
                case "eye":
                    return <EyeIcon key={icon.type}/>
                case "edit":
                    return <GridEdit key={icon.type}/>
                case "trash":
                    return <Trash key={icon.type}/>
                case "copy":
                    return <Copy key={icon.type}/>

                default:
                    return <p>not found icon</p>
            }
        })
    }

    return <div className={'option-table'}><IconGenerator/></div>
}