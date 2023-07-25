import profile from "../assets/img/profile.png";
import {Admin, Edit} from "../../../assets/icons";
import {Language} from "../../../config/Language.js";

export const Profile = ({setStateSetting}) => {
    const {name, roleAdmin} = Language.fa
    return (
        <div className="profile-parent">
            <div className="profile">
                <div className="profile-image">
                    <img src={profile} alt="profile"/>
                </div>
                <div className={'info-user'}>
                    <h3 className={'name'}>{name}</h3>
                    <div className="role">
                        <Admin/>
                        <span>{roleAdmin}</span>
                    </div>
                </div>
            </div>
            <div className="edit" onClick={() => setStateSetting(true)}>
                <Edit/>
            </div>
        </div>
    )
}