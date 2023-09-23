import { ProductListInfo } from "./ProductList"
import { ProductList } from "./ProductList"
import { ProductListTitleInfo } from "./ProductListTitle";
import { ProductListTitle } from "./ProductListTitle";
import { ProductListLayout } from "../layouts/ProductListStyle";
import { SwiperSlide } from 'swiper/react'
import { Slider } from "./ListSlider"


import 'swiper'
import listLeftBtn from '../assets/listLeftBtn.svg' 
import listRightBtn from '../assets/listRightBtn.svg' 
import imgProduct01 from "../assets/img-products-IT/product-01.png"
import imgProduct02 from "../assets/img-products-IT/product-02.png"
import imgProduct03 from "../assets/img-products-IT/product-03.png"
import imgProduct04 from "../assets/img-products-IT/product-04.png"
import imgProduct05 from "../assets/img-products-IT/product-05.png"

const productListTitleInfo: ProductListTitleInfo = {
    title: "Relacionado com as visitas em ",
    userInterest: "Informática",
}

const productList: ProductListInfo[] = [
    {
        id: 1,
        image: imgProduct01,
        price: 229,
        oldPrice: 240,
        creditPrice: '21,75',
        info: 'Teclado Foda Gamer Novo Preto Foda Nerd Gamer LED FODA gamer '
    },
    {
        id: 2,
        image: imgProduct02,
        price: 177.77,
        oldPrice: 999,
        creditPrice: '14,81',
        info: 'PC câmera Webcam 1600k Pixels Com Microfone'
    },
    {
        id: 3,
        image: imgProduct03,
        price: 28,
        oldPrice: 240,
        creditPrice: '21,75',
        info: 'Sei la q porra e isso '
    },
    {
        id: 4,
        image: imgProduct04,
        price: 28.82,
        oldPrice: 45,
        creditPrice: '1,00',
        info: 'Mousepad para Idosos'
    },
    {
        id: 5,
        image: imgProduct05,
        price: 99,
        oldPrice: 150,
        creditPrice: '8,50',
        info: 'macbook da shopee'
    },
    {
        id: 6,
        image: imgProduct01,
        price: 229,
        oldPrice: 240,
        creditPrice: '21,75',
        info: 'Teclado Foda Gamer Novo Preto Foda Nerd Gamer LED FODA gamer '
    },
    {
        id: 7,
        image: imgProduct02,
        price: 229,
        oldPrice: 240,
        creditPrice: '21,75',
        info: 'Teclado Foda Gamer Novo Preto Foda Nerd Gamer LED FODA gamer '
    },
    {
        id: 8,
        image: imgProduct03,
        price: 229,
        oldPrice: 240,
        creditPrice: '21,75',
        info: 'Teclado Foda Gamer Novo Preto Foda Nerd Gamer LED FODA gamer '
    },
    {
        id: 9,
        image: imgProduct04,
        price: 229,
        oldPrice: 240,
        creditPrice: '21,75',
        info: 'Teclado Foda Gamer Novo Preto Foda Nerd Gamer LED FODA gamer '
    },
    {
        id: 10,
        image: imgProduct05,
        price: 229,
        oldPrice: 240,
        creditPrice: '21,75',
        info: 'Teclado Foda Gamer Novo Preto Foda Nerd Gamer LED FODA gamer '
    }
]

export function ProductListIT () {

    const sliderSettings = {
        spaceBetween: 35,
        slidesPerView: 5,
        slidesPerGroup: 5,
        allowTouchMove: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    }

    return (
        <> 
        <ProductListLayout>
        <ProductListTitle
            title = {productListTitleInfo.title}
            userInterest = {productListTitleInfo.userInterest}
        />
        
          <div id='carousel'>
            <a href=""> <div className='swiper-container'> 
            <Slider  sliderSettings = {sliderSettings}>  
                <i className="arrow-left swiper-button-prev"> <img src={listLeftBtn} alt="prev" /></i> 
               
                {productList.map( (product)=> (
                    <SwiperSlide key={product.id}>
                        <ProductList 
                            key = {product.id}
                            id = {product.id}
                            image= {product.image}
                            price= {product.price}
                            oldPrice= {product.oldPrice}
                            creditPrice= {product.creditPrice}
                            info= {product.info}
                        />
                    </SwiperSlide>
                ))}  
                <i className="arrow-right swiper-button-next"> <img src={listRightBtn} alt="next" /></i>                                   
            </Slider>
             </div> </a>
       </div>
        {/*productList.map(product => {
         return (<ProductList 
            key = {product.id}
            id = {product.id}
            image= {product.image}
            price= {product.price}
            oldPrice= {product.oldPrice}
            creditPrice= {product.creditPrice}
            info= {product.info}
        />)
        })} 
        */}
        
        </ProductListLayout>
        </>
    )
}
