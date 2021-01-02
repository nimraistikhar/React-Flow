import styled from "styled-components";
import { FaTwitter } from 'react-icons/fa'

export const Feature3Container = styled.div`
    margin-top: -.3rem;
`

export const Feature3Wrap = styled.div`
    display: flex;
    flex: 0 0 50%;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const Feature3Description = styled.div`
    display: flex;

    @media screen and (max-width: 410px) {
        flex-direction: column-reverse;
    }
`

export const F3Machine = styled.div`
    flex: 0 0 50%;
    width: 100%;
    height: 100%;
`

export const Image = styled.img`
    width: 100%;

    @media screen and (max-width: 600px) {
        height: 55vh;
    }

    @media screen and (max-width: 500px) {
        height: 45vh;
    }
`

export const F3Detail = styled.div`
    flex: 0 0 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
`

export const F3Heading = styled.h1`
    font-weight: 400;
    font-size: 2rem;
    text-transform: uppercase;
    font-style: italic;
    margin-bottom: 2rem;
    color: #4d4d4d;

    @media screen and (max-width: 500px) {
        font-size: 1.2rem;
    }
`

export const F3btn = styled.button`
    outline: none;
    border: 2px solid #b3b3b3;
    padding: .5rem 4rem;
    font-size: 1.1rem;

    @media screen and (max-width: 500px) {
        font-size: .9rem;
    }
`

export const Feature3Twitter = styled.div`
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;

    padding: 6rem;
    background-color: #80d4ff;
`
export const F3TwitterDesc = styled.p`
    color: #fff;
    font-weight: 600;
    text-align: justify;
    font-size: 1rem;

    @media screen and (max-width: 500px) {
        font-size: .6rem;
    }
`

export const Bars = styled(FaTwitter)`
    font-size: 3.5rem;
    color: #fff;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
    }
`

