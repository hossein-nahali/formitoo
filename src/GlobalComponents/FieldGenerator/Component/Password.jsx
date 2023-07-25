import {Error} from "./Error.jsx";

export const Password = (props) => {
    const {
        label = '',
        placeholder = '',
        defaultValue,
        icon = '',
        id = '',
        setFields,
        fields = [],
        show_password,
        error
    } = props.field
    const is_children = props.field?.children

    const inputHandler = e => {
        const newInfoUser = fields.map(field => {
            if (field.id === id) {
                return {
                    ...field,
                    value: e.target.value
                };
            }

            return {...field}
        })
        setFields(newInfoUser)
    }

    const fieldChildHandler = (e, id) => {

        const newInfoUser = fields.map(field => {
            if (field.id === props.field.id) {
                return {
                    ...field,
                    children: [
                        ...field.children.map(childrenField => {
                            if (childrenField.id === id) {
                                return {
                                    ...childrenField,
                                    value: e.target.value
                                };
                            }

                            return {...childrenField}
                        })
                    ]
                }
            }

            return {...field}
        })

        setFields(newInfoUser)
    }

    const ShowPasswordHandler = () => {
        const newInfoUser = fields.map(field => {
            if (field.id === id) {
                return {
                    ...field,
                    show_password: !field.show_password
                };
            }

            return {...field}
        })
        setFields(newInfoUser)
    }

    const ShowPasswordChildHandler = (id, parentId) => {
        const newInfoUser = fields.map(field => {
            if (field.id === props.field.id) {
                return {
                    ...field,
                    children: [
                        ...field.children.map(childrenField => {
                            if (childrenField.id === id) {
                                return {
                                    ...childrenField,
                                    show_password: !childrenField.show_password
                                };
                            }

                            return {...childrenField}
                        })
                    ]
                }
            }

            return {...field}
        })

        setFields(newInfoUser)
    }
    return (
        <div className={`input-field`}>
            <label htmlFor={id}>{label}</label>
            <div>
                <input type={`${!show_password ? "password" : "text"}`} id={id} placeholder={placeholder}
                       defaultValue={defaultValue} onChange={inputHandler} className={`${error.err ? 'error-input' : ''}`}/>
                <div className="icon-field" onClick={() => ShowPasswordHandler(id)}>
                    {icon}
                </div>
            </div>
            {is_children ? props.field?.children.map((field_is_child) => (
                <div key={field_is_child.id}>
                    <input type={`${!field_is_child.show_password ? "password" : "text"}`} id={field_is_child.id}
                           placeholder={field_is_child.placeholder}
                           defaultValue={field_is_child.defaultValue}
                           onChange={e => fieldChildHandler(e, field_is_child.id)}
                           className={`${field_is_child.error.err ? 'error-input' : ''}`}/>
                    <div className="icon-field" onClick={() => ShowPasswordChildHandler(field_is_child.id, id)}>
                        {icon}
                    </div>
                </div>
            )) : ''}
            <Error error={error}/>
        </div>
    )
}