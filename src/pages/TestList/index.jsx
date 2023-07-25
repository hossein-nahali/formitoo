import {Title} from "../../GlobalComponents/Title";
import {Language} from "../../config/Language.js";

export const TestList = () => {
    const {list_test, personality_test} = Language.fa


    return (
        <>
            <Title title={list_test} presonal={27} test={personality_test} is_show_desc={true}/>
        </>
    )
}