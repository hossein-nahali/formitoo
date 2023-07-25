export const Error = ({error}) => {

    if (error.err) {
        return <p className={'error-text'}>{error.message}</p>
    }

    return ''
}