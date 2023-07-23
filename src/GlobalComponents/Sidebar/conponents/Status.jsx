import {Language} from "../../../config/Language.js";
import {Setting} from "../../../assets/icons/index.js";
import {StatusNews} from "../../../config/fakeData/StatusNews.js";

export const Status = () => {
    const {status} = Language.fa

    return (
        <div className="status scroll-rtl">
            <h3><Setting/>{status}</h3>
            {StatusNews.map(news => {
                return (
                    <div className={'news'} key={news.id}>
                        <h4>{news.title}</h4>
                        <p>{news.content}</p>
                    </div>
                )
            })}
        </div>
    )
}