import './Assets/css/Pagination.scss'
import {ArrowLeft} from "../../assets/icons/index.js";

export const Pagination = () => {


    return (
        <div className={'pagination'}>
            <div className="box-pagination prev"><ArrowLeft/></div>
            <div className="box-pagination active">1</div>
            <div className="box-pagination">2</div>
            <div className="box-pagination">3</div>
            <div className="box-pagination">...</div>
            <div className="box-pagination">27</div>
            <div className="box-pagination next"><ArrowLeft/></div>
        </div>
    )
}