import {Language} from "../../../../config/Language.js";

export const SetStateFile = (file, setFields, fields, field,setError) => {
    const {select_image_only} = Language.fa
    const {id} = field
    if (!file && !file[0]) return null
    if (!file[0].name.match(/\.(jpg|jpeg|png|gif)$/)) return setError({err: true, message: select_image_only})

    const newInfoUser = fields.map(field => {
        if (field.id === id) {
            return {
                ...field,
                value: {
                    file: {...file},
                    preview: URL.createObjectURL(file[0]),
                }
            };
        }

        return {...field}
    })
    setFields(newInfoUser)
}