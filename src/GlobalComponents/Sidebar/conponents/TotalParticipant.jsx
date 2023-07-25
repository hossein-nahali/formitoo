import {User} from "../../../assets/icons";
import {Language} from "../../../config/Language.js";

export const TotalParticipant = () => {
    const {totalParticipant, totalParticipantNumber} = Language.fa
    return (
        <div className="total-participant">
            <div>
                <User/>
                <h3>{totalParticipant}</h3>
            </div>
            <span>{totalParticipantNumber}</span>
        </div>
    )
}