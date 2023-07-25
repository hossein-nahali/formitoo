import {useState} from "react";
import {Language} from "../../../config/Language.js";
import {SetStateFile} from "./Upload/SetStateFile.js";
import {HandleDrag} from "./Upload/HandleDrag.js";
import {RemoveImage} from "./Upload/RemoveImage.jsx";
import {Description} from "./Upload/Description.jsx";
import {Error} from "./Error.jsx";

export const Upload = (props) => {
    const [drag, setDrag] = useState(false)
    const [error, setError] = useState({err: false, message: ''})
    const {drop_file_here} = Language.fa
    const {
        label = '',
        placeholder = '',
        icon = '',
        id = '',
        setFields,
        fields = [],
    } = props.field
    const file = fields.find(field => field.id === id).value?.file[0]
    const preview = fields.find(field => field.id === id).value.preview

    const handleDrop = function (e) {
        const file = e.dataTransfer?.files ? e.dataTransfer.files : e.target.files
        e.preventDefault();
        e.stopPropagation();
        setDrag(false);
        setError({err: false, message: ''})
        SetStateFile(file, setFields, fields, props.field, setError)
    };

    const handleChange = function (e) {
        const file = e.dataTransfer?.files ? e.dataTransfer.files : e.target.files
        setDrag(false);
        setError({err: false, message: ''})
        SetStateFile(file, setFields, fields, props.field, setError)
    };

    return (
        <div
            className={`slider-author upload-file 
            ${drag ? 'dragging' : ''} 
            ${preview ? 'uploaded-file' : ''} 
            ${error.err ? 'error-file' : ''} 
            ${props.field.error.err ? 'error-input' : ''}`}
            data-drag-text={drop_file_here}>
            <input type="file"
                   onDragEnter={(e) => HandleDrag(e, setDrag, setError)}
                   onDragLeave={(e) => HandleDrag(e, setDrag, setError)}
                   onDragOver={(e) => HandleDrag(e, setDrag, setError)}
                   onDrop={handleDrop}
                   onChange={handleChange}
            />
            <h3>{label}</h3>
            <div className="upload">
                {preview ?
                    <RemoveImage setFields={setFields} fields={fields} field={props.field} setDrag={setDrag}/> : ''}
                {!preview ? icon : <img src={preview} alt="preview-uploader"/>}
                <Description placeholder={placeholder} file={file} preview={preview} error={error}/>
            </div>
            <Error error={props.field.error}/>
        </div>
    )
}