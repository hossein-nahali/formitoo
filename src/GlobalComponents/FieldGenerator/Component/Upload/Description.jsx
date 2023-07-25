import {Language} from "../../../../config/Language.js";

export const Description = ({placeholder, file = {}, preview, error}) => {
    const {size_file, name_file} = Language.fa
    if (error.err) return <p>{error.message}</p>

    if (!preview) {
        return <p>{placeholder}</p>
    }

    return (
        <ul>
            <li>{size_file}: {(file.size / (1024 * 1024)).toFixed(2)} mg</li>
            <li title={file.name}>{name_file}: <span>{file.name}</span></li>
        </ul>
    )
}