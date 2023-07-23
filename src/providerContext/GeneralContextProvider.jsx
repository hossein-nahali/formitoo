import GeneralContext from "../context/GeneralContext.js";
import {useReducer} from "react";
import GeneralReducer from "../reducer/GeneralReducer.js";

export const GeneralContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(GeneralReducer, {sidebar: false});
    return (
        <GeneralContext.Provider value={{state, dispatch}}>
            {children}
        </GeneralContext.Provider>
    )
}