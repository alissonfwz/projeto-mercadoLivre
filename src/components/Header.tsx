import { HeaderStyle } from "../layouts/HeaderStyle"
import logoMercadoLivre from "../assets/logo-ml.png"
import searchIcon from "../assets/search.svg"
import barraIcon from "../assets/barra.svg"
import bagIcon from "../assets/sacola.svg"
import { MapPin } from 'phosphor-react'
import bellIcon from "../assets/bell.svg"
import shoppingCartIcon from "../assets/shopping-cart.svg"
import userIcon from "../assets/user.svg"
import dropdownIcon from "../assets/dropdown.svg"


export function Header(){

    const handleNewSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.currentTarget.value);
    } 
    return (
    <HeaderStyle>
        <div id="header-box">
            <nav id="top"> 
                <div id="logo"> 
                    <a href=''> <img src={logoMercadoLivre} alt="Mercado Livre - Home" /> </a>
                </div>
                <form onSubmit={handleNewSearch}>
                    <input placeholder="Buscar produtos marcas e muito mais..." 
                    onChange={event => console.log(event.target.value)}/>  
                    <img src={barraIcon} />
                    <button id="search" type="submit"> <img src={searchIcon} /> </button> 
                </form> 
                <a href=''>  <img src={bagIcon} alt="Promoção" /></a>
                <a href=''> <div id="ad"> 
                     <strong>  Venda com 50% off </strong> 
                </div> </a>
            </nav>
            <nav id="bottom">
                <MapPin size={20}/>
                <div id="location"> 
                    <span>  Enviar para phillipe </span>   
                    <strong> Praça Almida de M... </strong>
                </div>
                <div id="menu-item"> 
                    <ul> 
                        <li> Categorias <img src={dropdownIcon} /></li>
                        <li> Ofertas do dia </li>
                        <li> Histórico </li>
                        <li> Supermercado </li>
                        <li> Moda </li>
                        <li> Vender </li>
                        <li> Contato </li>
                    </ul>
                </div>
                <div id="menu-user"> 
                    <ul> 
                        <li> <img src={userIcon} />  User <img src={dropdownIcon} /> </li>
                        <li> Compras </li>
                        <li> Favoritos <img src={dropdownIcon} /> </li>
                        <li> <img src={bellIcon} /> </li>
                        <li> <img src={shoppingCartIcon} /> </li>
                    </ul>
                </div>
            </nav>
        </div>
    </HeaderStyle>
    )
}