import { AdSliderLayout } from '../layouts/AdSliderStyle'
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import img1 from '../assets/img01.png'
import btnLeft from '../assets/left-hover.svg'
import btnRight from '../assets/right-hover.svg'

import 'swiper';
import 'swiper/css/autoplay'
import '../layouts/SwiperStyle/SwiperStyle.css'
import 'swiper/css/pagination';


export function AdSlider(){

    const ads = [
        {id: '1', image: img1},
        {id: '2', image: 'https://http2.mlstatic.com/D_NQ_635939-MLA71729561421_092023-OO.webp'},
        {id: '3', image: 'https://http2.mlstatic.com/D_NQ_974401-MLA71723098595_092023-OO.webp'},
        {id: '4', image: 'https://http2.mlstatic.com/D_NQ_863126-MLA71368945612_082023-OO.webp'},
        {id: '5', image: 'https://http2.mlstatic.com/D_NQ_666648-MLA71497177269_092023-OO.webp'}
    ]

const settings: SwiperProps = {
    loop: true,
    allowTouchMove: false,
    pagination: {
        clickable: false,
    }
}
    return (
        
        <AdSliderLayout>
             <Swiper {...settings} style={{
                    }}
                modules={[Navigation, Pagination, Autoplay]}            
                navigation
                autoplay={{delay: 2000, pauseOnMouseEnter: true}}
                slidesPerView={1}
                >                
                {ads.map((item)=> (
                    <SwiperSlide key={item.id}>
                        <a href='#'> <img 
                        src={item.image} 
                        className='slide-item' 
                        /> </a>
                        <div className="swiper-button-prev"> <img src={btnLeft} alt="prev" /></div>
                        <div className="swiper-button-next"> <img src={btnRight} alt="next" /></div> 
                    </SwiperSlide>
                  
                ))}                
                </Swiper>  
                
        </AdSliderLayout> 
    )
}