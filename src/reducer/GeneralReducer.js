function GeneralReducer(prevState = {sidebar: false}, action) {

    switch (action.type) {
        case "close_sidebar":
            return {
                ...prevState,
                sidebar: false
            }
        case "open_sidebar":
            return {
                ...prevState,
                sidebar: true
            }

        default:
            return prevState;
    }
}


export default GeneralReducer;