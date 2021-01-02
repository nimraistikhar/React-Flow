import styled from "styled-components";

export const Feature2Container = styled.div`

`

export const Feature2Wrap = styled.div`
    display:flex;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const Feature2Image = styled.div`
    flex: 0 0 50%;
    width: 100%;
`

export const Image1 = styled.img`
    width: 100%;
    height: 75vh;

    @media screen and (max-width: 600px) {
        height: 55vh;
    }

    @media screen and (max-width: 500px) {
        height: 45vh;
    }
`

export const Feature2Description = styled.div`
    display: flex;

    @media screen and (max-width: 410px) {
        flex-direction: column;
    }
`

export const F2Detail = styled.div`
    padding: 2.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
`

export const F2Heading = styled.h1`
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    font-style: italic;
    margin-bottom: 1rem;

    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`

export const F2desc = styled.p`
    text-align: justify;
    font-size: .7rem;

    @media screen and (max-width: 500px) {
        font-size: .6rem;
    }

    @media screen and (max-width: 410px) {
        padding: 0 4rem;
    }
`

export const F2btn = styled.button`
    text-decoration: none;
    font-size: 1.1rem;
    color: #232324;
    margin-top: 2rem;
    padding: 3px 3.5rem;
    cursor: pointer;
    border: 1px solid #3d3d3d;
    outline: none;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: #e0e0e0;
    }
`

export const F2Machine = styled.div`
    flex: 0 0 50%;
    width: 100%;
`

export const Image = styled.img`
    width: 100%;
    height: 75vh;

    @media screen and (max-width: 600px) {
        height: 60vh;
    }

    @media screen and (max-width: 500px) {
        height: 50vh;
    }

    @media screen and (max-width: 410px) {
        height: 40vh;
    }
`