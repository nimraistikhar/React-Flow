import styled from "styled-components";
import PhotographyImg from '../../images/photography-img.jpg'

export const Feature1Container = styled.div`
    background: #fff;
`

export const Feature1Wrap = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Description = styled.div`
    flex: 0 0 50%;
    background:linear-gradient(
        to bottom,
        rgb(255, 255, 255, 0.95),
        rgb(255, 255, 255, 0.8)
    ), url(${PhotographyImg});
    background-position: center;
    background-size: cover;
    padding: 5.5rem;
    text-align: justify;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
`

export const DescriptionHeading = styled.h1`
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 1.2rem;

    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 410px) {
        font-size: 1rem;
    }
`

export const DescriptionDetail = styled.p`
    font-style: italic;
    font-size: .95rem;
    font-weight: 400;

    @media screen and (max-width: 600px) {
        font-size: 80%;
    }

    @media screen and (max-width: 410px) {
        font-size: .6rem;
    }
`

export const Feature1Image = styled.div`
    flex: 0 0 50%;
    width: 100%;
`

export const Image = styled.img`
    width: 100%;
    height: 75vh;
    opacity: 0.85;
    scale: 1.015;

    @media screen and (max-width: 600px) {
        height: 50vh;
    }

    @media screen and (max-width: 410px) {
        height: 40vh;
    }
`