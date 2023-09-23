import { PaymentInfoLayout } from "../layouts/PaymentInfoStyle"
import creditCard from '../assets/credit-card.svg'
import cash from '../assets/cash.svg'
import plus from '../assets/plus.svg'

export function PaymentInfo(){
    return(
    <> 
    <PaymentInfoLayout> 
    <div id="white-box"> 
    <div id="blue-rectangle"></div>
    <div id="payment-options"> 
        <div id="title"> 
        <strong> Pagamento rápido e seguro </strong> 
        <span> Com Mercado Pago </span>
        </div>
    <div id="gray-rectangle"></div>
        <strong> 
            <p> <img src={creditCard} alt="Cartão de Crédito" /> </p>
            <span> <div> Até 12 vezes sem juros </div>
            <a href="#"> Ver mais </a>   </span>
                         
        </strong>
        <strong> 
            <p> <img src={cash} alt="Dinheiro" />  </p>
            <span> <div> À vista no boleto bancário </div>
            <a href="#"> Ver mais </a>            
            </span> 
                         
        </strong>
        <strong> 
            <p> <img src={plus} alt="Mais formas de pagamento" /> </p>
            <span> <div> Mais formas de pagamento </div> 
                <a href="#"> Ver mais </a>
            </span> 
        </strong>
        </div>
    </div>
    </PaymentInfoLayout> 
    </>
    )
}