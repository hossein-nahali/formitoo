import {Search as SearchIcon} from '../../../assets/icons'
import {Language} from "../../../config/Language.js";

export const Search = () => {
    const {searchPlaceholder} = Language.fa
    return (
        <div className="search">
            <div>
                <SearchIcon/>
                <input type="text" placeholder={searchPlaceholder}/>
            </div>
        </div>
    )
}