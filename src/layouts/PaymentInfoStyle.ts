import styled from "styled-components";

export const PaymentInfoLayout = styled.div`
    #white-box{
        display: flex;
        flex-direction: row;
        border-radius: 0.25rem;
        background-color: white;
        margin: 0 auto;
        width: 78rem;
        height: 5.5rem;
    }
    #title{
        display: flex;
        flex-direction: column;
        justify-content: left;  
        padding: 1.5rem 2rem;
        padding-left: 1rem;
    }
    #title span{
        font-size: .875rem;
        opacity: 0.7;
    }
    #title strong{
        font-size: 1rem;
        font-weight: 400;
    }
    #blue-rectangle{
        width: 0.18rem;
        height: 4.5rem;
        background-color: ${(props) => props.theme['blue-500']};
        margin: auto 0;
        margin-left: 0.5rem;
    }
    #gray-rectangle{
        width: 0.13rem;
        background-color: ${(props) => props.theme['gray-100']};
        margin-right: 1rem;
        margin-left: 0.5rem;
    }
    #payment-options {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: left;
        gap: 2.1rem;
        strong{
            display: flex;
            font-weight: 400;
            align-items: center;
            justify-content: center; 
        }
        p{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            margin-right: 1rem;
            border: 1px solid #EBEBEB;
            border-radius: 50rem;
            height: 3rem;
            width: 3rem;            
        }
        a{
            color:  ${(props) => props.theme['blue-500']};
            font-size: 0.875rem;
            font-weight: 400;
            text-decoration: none;  
        }
        }
`