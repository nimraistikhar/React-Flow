import styled from "styled-components";

export const FooterContainer = styled.div`

`

export const FooterWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: -2rem;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const FooterDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
    flex: 0 0 25%;

    @media screen and (max-width: 600px) {
        margin-bottom: 2rem;
    }
`

export const FooterHeading = styled.h4`
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 400;
    font-style: italic;
    color: #404040;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.2rem;
        margin-top: 1rem;
    }
`

export const FooterInput = styled.input`
    margin: 2rem 0;
    outline: 0;
    font-size: 1rem;
    padding: 1.5rem;
    width: 73%;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
    border-right: 2px solid transparent;
    border-left: 2px solid transparent;

    @media screen and (max-width: 600px) {
        width: 60%;
    }

    @media screen and (max-width: 500px) {
        width: 40%;
        padding: .5rem;
    }
`

export const Footerbtn = styled.button`
    font-size: 1.2rem;
    outline: none;
    border: 2.5px solid #737373;
    padding: .8rem 4rem;

    @media screen and (max-width: 600px) {
        font-size: 1rem;
        padding: .5rem 2rem;
    }

    @media screen and (max-width: 500px) {
        font-size: .6rem;
    }
`

export const FooterImg = styled.div`
    width: 100%;
    flex: 0 0 75%;
`

export const Image = styled.img`
    width: 100%;
    height: 75vh;

    @media screen and (max-width: 500px) {
        height: 50vh;
    }
`