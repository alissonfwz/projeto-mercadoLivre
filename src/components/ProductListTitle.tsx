import { ProductListLayout } from "../layouts/ProductListStyle";

export interface ProductListTitleInfo {
    title: string,
    userInterest?: string
}


export function ProductListTitle (props: ProductListTitleInfo){
    return(
    <ProductListLayout> 
        <div id='title'>
            <strong> {props.title} {props.userInterest} </strong> 
            {props.userInterest ? <a href="#"> Ver histórico  </a> : <a href="#"> Ver todas  </a>}
         </div>
    </ProductListLayout>

    )
}