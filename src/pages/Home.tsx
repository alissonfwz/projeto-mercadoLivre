import { AdSlider } from "../components/AdSlider";
import { PaymentInfo } from "../components/PaymentInfo";
import { ProductListIT } from "../components/ProductListIT";
import { ProductListVehicles } from "../components/ProductListVehicles";
import { ProductListSaleDay } from "../components/ProductListSaleDay";
/* import { BannerAd } from '../components/BannerAd' */

export function Home(){
    return (
    <> 
    <AdSlider/>
    <PaymentInfo/>
    <ProductListIT />
    <ProductListVehicles /> 
    <ProductListSaleDay />
    <br/> <br/> 
    </>
    )
}