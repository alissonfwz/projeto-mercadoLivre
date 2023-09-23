import styled from "styled-components";

export const SearchBarLayout = styled.div`
    display: inline-block;
    overflow: hidden;
    background-color: white;
    width: 38rem;
    height: 2.5rem;
    margin-left: 3.875rem;
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    justify-content: center;
    align-items: center;
       
    form{
        display: flex;
        flex-direction:row;
        
    }
    input{
        text-decoration: none;
        outline: 0;
        border: none;
        width: 38rem;
        height: 2.5rem;   
        align-items: center;
        justify-content: center;
        background-color: white;
    }
    button img{
        width: 1.25rem;
        height: 1.25rem;
    }
    img {
        height: 1.5rem;
        width: auto;
        align-items: center;
    }
    button{
        text-decoration: none;
        border: none;
        background-color: white;
        margin-left: 0.75rem;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 2.5rem; 
        &:hover{
            cursor: pointer;
        }
    }
    color: #333333;
;

`