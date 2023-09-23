import {Swiper, SwiperProps} from 'swiper/react'
import { ReactNode } from 'react';
import { Navigation } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/navigation';
import '../layouts/SwiperStyle/SwiperStyle.css'

interface SliderProps {
    sliderSettings: SwiperProps,
    children: ReactNode
}

export function Slider ({sliderSettings, children} : SliderProps){
    return(
        <Swiper modules={[Navigation]} 
            /* navigation= {{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }} */
        {...sliderSettings}> 
            {children} 
        </Swiper>
    )
}

