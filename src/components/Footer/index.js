import React from 'react'
import FooterBg from '../../images/image-4.jpg'
import {
    FooterContainer, 
    FooterWrap, 
    FooterDesc, 
    FooterHeading, 
    FooterInput, 
    Footerbtn, 
    FooterImg, 
    Image
} from './FooterElement'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>

            <FooterDesc>
                <FooterHeading>Write me</FooterHeading>
                <FooterInput />
                <Footerbtn>Send</Footerbtn>
            </FooterDesc>

            <FooterImg>
                <Image src={FooterBg} />
            </FooterImg>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
