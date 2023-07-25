import {Error} from './'

export const Text = (props) => {
    const {
        label = '',
        placeholder = '',
        defaultValue,
        icon = '',
        id = '',
        setFields,
        fields = [],
        error = [],
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
            if (field.children) {
                field.map(childrenField => {
                    if (childrenField.id === id) {
                        return ({
                            ...childrenField,
                            value: e.target.value
                        })
                    }
                })
            }

            return {...field}
        })
        setFields(newInfoUser)
    }

    return (
        <div className={`input-field`}>
            <label htmlFor={id}>{label}</label>
            <div>
                <input type="text" id={id} placeholder={placeholder}
                       onChange={inputHandler} defaultValue={defaultValue}
                       className={`${error.err ? 'error-input' : ''}`}/>
                <div className="icon-field">
                    {icon}
                </div>
            </div>
            {is_children ? props.field?.children.map((field_is_child) => (
                <div key={field_is_child.id}>
                    <input type="text" id={field_is_child.id} placeholder={field_is_child.placeholder}
                           onChange={e => fieldChildHandler(e, field_is_child.id)}
                           className={`${field_is_child.error.err ? 'error-input' : ''}`}
                           defaultValue={field_is_child.defaultValue}/>
                    <div className="icon-field">
                        {icon}
                    </div>
                </div>
            )) : ''}
            <Error error={error}/>
        </div>
    )

}