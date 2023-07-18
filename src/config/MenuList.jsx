import {Language} from "./Language.js";
import {Home, ClipboardText, ClipboardExport, UserSquare} from "../assets/icons";

export const MenuList = [
    {
        tooltip: Language.fa.home_tooltip,
        icon: <Home/>,
        path: "/"
    },
    {
        tooltip: Language.fa.list_test,
        icon: <ClipboardText/>,
        path: "/list_test"
    },
    {
        tooltip: Language.fa.create_test,
        icon: <ClipboardExport/>,
        path: "/create_test"
    },
    {
        tooltip: Language.fa.list_users,
        icon: <UserSquare/>,
        path: "/list_users"
    },
]