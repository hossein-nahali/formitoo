export const ResetHandler = (setFields, fields, field, setDrag) => {
    const {id} = field

    const newInfoUser = fields.map(field => {
        if (field.id === id) {
            return {
                ...field,
                value: {
                    file: [],
                    preview: ''
                },
            };
        }

        return {...field}
    })
    setFields(newInfoUser)
    setDrag(false)
}