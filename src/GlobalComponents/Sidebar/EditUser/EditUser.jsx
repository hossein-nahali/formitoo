import './Assets/css/EditUser.scss'
import {Export, Eye, IdentificationCard, User} from "../../../assets/icons";
import {Language} from "../../../config/Language.js";
import {useState} from "react";
import {FieldGenerator} from "../../FieldGenerator";

export const EditUser = () => {
    const {
        display_name,
        name,
        login,
        label_username,
        label_password,
        desc_upload,
        edit_profile_picture,
        save
    } = Language.fa
    const [fields, setFields] = useState([
        {
            type: 'text',
            label: display_name,
            placeholder: display_name,
            defaultValue: name,
            required: true,
            value: '',
            icon: <User/>,
            error: {err: false, message: ''},
            id: 'display-name'
        },
        {
            type: 'text',
            label: label_username,
            placeholder: label_username,
            defaultValue: 'hosseinnahali',
            required: true,
            icon: <IdentificationCard/>,
            value: '',
            error: {err: false, message: ''},
            id: 'username',
        },
        {
            type: 'password',
            label: label_password,
            placeholder: label_password,
            defaultValue: '',
            required: true,
            icon: <Eye/>,
            id: 'password',
            value: '',
            error: {err: false, message: ''},
            show_password: false,
            children: [
                {
                    type: 'password',
                    placeholder: label_password,
                    id: 'check_password',
                    defaultValue: '',
                    icon: <Eye/>,
                    value: '',
                    error: {err: false, message: ''},
                    required: true,
                    show_password: false,
                    is_children: true,
                }
            ]
        },
        {
            type: 'upload',
            label: edit_profile_picture,
            placeholder: desc_upload,
            icon: <Export/>,
            error: {err: false, message: ''},
            value: {
                file: [],
                preview: ''
            },
            id: 'upload-file',
        },
    ])

    const formHandler = (e) => {
        e.preventDefault()
        console.log('ok')
    }

    console.log(fields);
    return (
        <div className="edit-user-admin">
            <form onSubmit={formHandler}>
                <div className={'scroller'}>
                    {
                        fields.map(field => {
                            return (
                                <FieldGenerator field={field} setFields={setFields} fields={fields} key={field.id}/>
                            )
                        })
                    }
                </div>
                <div className={'submit'}>
                    <input type="submit" value={save}/>
                </div>
            </form>
        </div>
    )
}