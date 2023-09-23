import styled from 'styled-components'

export const HeaderStyle = styled.div`
background-color: ${(props) => props.theme['yellow-500']};
    #header-box {
    width: 82rem;
    height: 7rem;
    color: black;
    background-color: ${(props) => props.theme['yellow-500']};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    nav[id='top']{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.75rem;
        width: auto;
        a{
            text-decoration: none;
            color: black;
        }
        strong {
            font-weight: 400;
            font-size: 1.25rem;
            margin-left: 1.75rem;
            text-align: center;
        }
        #ad {
            position: relative;
            vertical-align: middle;
            text-align: center; 
            line-height: 2rem;
        }
    }
    #logo{
        width: 9rem;
        margin-right: 4rem;
        img{
            width: 9rem;
            height: auto;
        }
    }
    form{
        margin-right: 7.5rem;
        display: inline-flex;
        
    }
    form img{
        margin-left: -3rem;
    }
    input{
        background-color: white;
        text-decoration: none;
        outline: 0;
        border: none;
        border-radius: 0.15rem;
        width: 40rem;
        height: 2rem;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.75rem;   
    }
    button img{
        width: 1.25rem;
        height: 1.25rem;
        justify-content: center;
    }
    button {
        text-decoration: none;
        border: none;
        background-color: transparent;
        align-items: center;
        justify-content: center;    
        margin-left: 2.9rem;
        &:hover{
            cursor: pointer;
        }
    }
    nav[id='bottom']{
        margin-top: 0.75rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    #location{
        display:flex;
        flex-direction: column;
        margin-left: 0.5rem;
        margin-right: 2.5rem;
        width: 9rem;
        height: 2.5rem;

        strong{
            font-weight: 400;
            font-size: 0.875rem;
        }
        span{
            font-size: 0.75rem;
            color: #333333;
        }
    }
    #menu-item {
        width: 34rem;
    }
    #menu-item ul{
        opacity: 0.7;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        gap: 1.25rem;
        padding: 0;
        font-size: 0.875rem;
        color: #333333;
        width: 37.75rem;
        justify-content: center;
        align-items: center;
        line-height: 1.25rem;
    }
    #menu-item li{
        cursor: pointer;
        &:hover{
            opacity: 1;
            color: black;
        }
    }
    #menu-user ul{
        margin-left: 5.5rem;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        gap: 1.25rem;
        font-size: 0.875rem;
        color: #333333;
    }
    #menu-user li{
        cursor: pointer;
        img{
            vertical-align: middle;
        }
    }}
`