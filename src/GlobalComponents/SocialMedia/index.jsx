import './assets/css/SocialMedia.scss'
import {Instagram, Telegram, Whatsapp} from "../../assets/icons";
import {Language} from "../../config/Language.js";

export const SocialMedia = ({instagram_id = '', telegram_id = '', whatsapp = ''}) => {
    const {our_instagram, our_telegram, our_whatsapp} = Language.fa

    return (
        <div className={'social-media'}>
            {instagram_id ?
                <a href="" className="instagram">
                    <div><Instagram/></div>
                    <p>{our_instagram}</p>
                </a>
                : ''}
            {telegram_id ?
                <a href="" className="telegram">
                    <div><Telegram/></div>
                    <p>{our_telegram}</p>
                </a>
                : ''}
            {whatsapp ?
                <a href="" className="whatsapp">
                    <div><Whatsapp/></div>
                    <p>{our_whatsapp}</p>
                </a>
                : ''}
        </div>
    )
}