import styled from "styled-components";
import ImgBg from "../../images/Hero.jpg";

export const HeroContainer = styled.div`
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
    ),
    url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;

    @media screen and (max-width: 600px) {
        height: 60vh;
    }
`

export const HeroDescription = styled.div`
    height: calc(100vh -80px);
    max-height: 100%;
    width: 100vw;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
    text-align: center;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const HeroH1 = styled.h1`
    font-size: 9rem;
    font-style: italic;
    width: 70%;
    margin: 0 auto;

    @media screen and (max-width: 1148px) {
        font-size: 7rem;
    }
    @media screen and (max-width: 879px) {
        font-size: 6rem;
    }
    @media screen and (max-width: 754px) {
        font-size: 5rem;
    }
    @media screen and (max-width: 628px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 503px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 377px) {
        font-size: 2rem;
    }
`

export const HeroP = styled.p`
    font-size: .8rem;
    font-weight: 400;
    letter-spacing: 1px;
    width: 35%;
    text-transform: uppercase;
    margin: 0 auto;

    @media screen and (max-width: 754px) {
        font-size: .7rem;
    }
    @media screen and (max-width: 628px) {
        font-size: .5rem;
    }
    @media screen and (max-width: 400px) {
        font-size: .4rem;
    }
`