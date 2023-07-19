import {Cloud, Folder, Form, UserSquare} from "../../assets/icons";
import {Language} from "../Language.js";

export const GeneralStatusInfo = [
    {
        icon: <UserSquare color={'#8B73EF'}/>,
        title: Language.fa.participants,
        content: Language.fa.person_27,
        bg_color: '#F3F1FD',
        id:'5454'
    },
    {
        icon: <Form color={'#54A0FF'}/>,
        title: Language.fa.tests,
        content: Language.fa.active_tests_30,
        bg_color: '#EDF5FF',
        id:'32654'
    },
    {
        icon: <Cloud color={'#FF9F43'}/>,
        title: Language.fa.free_host_space,
        content: Language.fa.mg_3000,
        bg_color: '#FFF3E7',
        id:'68742'
    },
    {
        icon: <Folder color={'#FF6B6B'}/>,
        title: Language.fa.used_host_space,
        content: Language.fa.mg_500,
        bg_color: '#FFECEC',
        id:'87841'
    },

]