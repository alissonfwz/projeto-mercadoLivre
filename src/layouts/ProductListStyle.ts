import styled from "styled-components";

export const ProductListLayout = styled.div `
    margin: 0 auto;
    margin-top: 1rem;
    width: 78rem;
    #title{
        margin-top: 2.5rem;
        display: flex;
        align-items: center; 
    }
    strong{
        font-weight: 400;
        font-size: 1.5rem;
        color: #666666;
        margin-right: 1rem;  
    }
    a{
        text-decoration: none;
        color: #3483FA;
        font-size: 0.875rem;
    }
    #carousel{
        width: 78rem;
        margin: 0 auto;
    }
    #product{
        cursor: pointer;
        border-radius: 0.25rem;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,.14);
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 14rem;
        height: auto;
        &:hover {
            #oldPrice strong{
                display: flex;
            }
            #info strong{
                display: flex;
            }
            #price strong{
                margin-top: 0rem;
            }
            #creditPrice strong {
                margin-bottom: 0rem;
            }            
        }
        img {
            width: 14rem;
            height: 14rem;
        }
        #line {
            width: 14rem;
            height: 0.06rem;
            background-color: #EBEBEB;
            margin-bottom: -1.2rem;
        }
        #circle {
            display: flex;
            background-color: white;
            height: 2.4rem;
            width: 2.4rem;
            border: 1.5px solid #EBEBEB;
            border-radius: 100%;
            margin-left: 10rem;
        }
        #truck {
            display: flex;
            margin: 0 auto;
            align-items: center;
            img{
                width: 1.25rem;
                height: 1.25rem;
            }
        }
        #product-info{
            padding: 1rem 1.25rem;
            margin-top: -1rem;
        }
        #price strong{
            font-size: 1.5rem;
            color: black;
            margin-top: -2.5rem;
        }
        #creditPrice {
            margin-bottom: 0.75rem;
        }
        #creditPrice strong{
            font-size: 0.875rem;
            color: black;
        }
        #oldPrice strong {
            display: none;
            color: #8C8C8C;
            font-size: 0.75rem;
            text-decoration: line-through;
            margin-bottom: 0.5rem;
        }
        #info strong{
            color: #8C8C8C;
            font-size: 0.875rem;
            display: none;
        }
    }  
    .swiper-container{
        margin: 0 auto;
        display: flex;
        position: relative;
        width: 78rem;
        height: 26rem;
        margin-bottom: -2rem;
    }
    .swiper-button-prev {
        background: white;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,.14);
        border-radius: 50rem;
        width: 4rem;
        height: 4rem;
        margin-top: -4rem;
    }
    .swiper-button-next {
        margin-top: -4rem;
        background: white;
        box-shadow: 0 4px 4px 0 rgba(0,0,0,.14);
        border-radius: 50rem;
        width: 4rem;
        height: 4rem;
    }
`