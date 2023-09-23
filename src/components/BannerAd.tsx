import imgBannerAd from '../assets/banner2.png'
import { BannerAdLayout } from '../layouts/BannerAdStyle'

export function BannerAd(){
    return (
    <BannerAdLayout> 
    <img src={imgBannerAd} alt="Ad - Banner" />
    </BannerAdLayout>
    )
}