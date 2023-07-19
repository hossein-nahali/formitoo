import {GeneralStatusInfo} from "../../../config/fakeData/GeneralStatusInfo.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

export const GeneralStatus = () => {

    return (
        <div className={'general-status'}>
            <Swiper slidesPerView={4} spaceBetween={15} loop={true}>
                {GeneralStatusInfo.map(box => {
                    return (
                        <SwiperSlide key={box.id}>
                            <div className={'box'}>
                                <div className="icon" style={{background: `${box.bg_color}`}}>
                                    {box.icon}
                                </div>
                                <div className="content">
                                    <h4>{box.title}</h4>
                                    <p>{box.content}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}