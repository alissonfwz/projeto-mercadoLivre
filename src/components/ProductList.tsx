import { ProductListLayout } from "../layouts/ProductListStyle"
import truckIcon from '../assets/truck.svg'


export interface ProductListInfo {
    id: number, 
    image: string,
    price: number,
    oldPrice: number,
    creditPrice: string,
    info: string
}

export function ProductList (props: ProductListInfo){
    return(
    <ProductListLayout> 
        <div id='product'>
            <img src={props.image}/>
            <div id='line'> </div>
            <div id='circle'> 
                <div id='truck'> <img src={truckIcon} alt="" /></div>
            </div>
            <div id='product-info'> 
                <div id='oldPrice'> 
                    <strong> R$ {props.oldPrice} </strong>
                </div>
                <div id='price'> 
                    <strong> R$ {props.price} </strong>
                </div>
                <div id='creditPrice'> 
                    <strong> 12x de {props.creditPrice} </strong>
                </div>
                <div id='info'> 
                    <strong> {props.info} </strong>
                </div>
            </div>
        </div> 
    </ProductListLayout>

    )
}