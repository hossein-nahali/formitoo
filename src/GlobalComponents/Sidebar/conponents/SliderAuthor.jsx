import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {Language} from "../../../config/Language.js";
import {developers} from "../../../config/developers/developers.js";
import {Pagination} from 'swiper/modules';

export const SliderAuthor = () => {
    const {developersTitle} = Language.fa

    return (
        <div className={'slider-author'}>
            <h3>{developersTitle}</h3>
            <Swiper modules={[EffectFade, Pagination]} effect="fade" pagination={{clickable: true}}>
                {developers.map(developer => {
                    return (
                        <SwiperSlide key={developer.id}>
                            <img src={developer.profile} alt="profile developer"/>
                            <h4>{developer.name}</h4>
                            <span>{developer.desc}</span>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}