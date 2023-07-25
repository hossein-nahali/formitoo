import {Password, Text, Upload} from "./Component";
import './assets/css/FieldGenerator.scss'

export const FieldGenerator = ({field, setFields, fields}) => {
    const field_generator = () => {

        switch (field.type) {
            case "text":
                return (<Text field={{...field, setFields, fields}}/>)
            case "password":
                return (<Password field={{...field, setFields, fields}}/>)
            case "upload":
                return (<Upload field={{...field, setFields, fields}}/>)

            default:
                return <p>problem to render field</p>
        }
    }


    return field_generator()
}