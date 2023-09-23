import styled from "styled-components";

export const AdSliderLayout = styled.div`
    margin: 0 auto;
    max-width: 90rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2.5rem;
    :hover{
        cursor: pointer;
        .swiper-button-next img, .swiper-button-prev img{
            display: flex;
        }
    }
    img {
    }
`