import React from 'react'
import Image2 from '../../images/image-2.jpg'
import TypeWritter from '../../images/typewritter.jpg'
import {
    Feature2Container, 
    Feature2Wrap, 
    Feature2Image,
    Image1, 
    Feature2Description, 
    F2Detail, 
    F2Heading, 
    F2desc, 
    F2Machine, 
    F2btn,  
    Image
} from './Feature2Elements'

const Feature2 = () => {
    return (
        <Feature2Container>
            <Feature2Wrap>
                <Feature2Image>
                    <Image1 src={Image2} />
                </Feature2Image>

                <Feature2Description>
                    <F2Detail>
                        <F2Heading>Gebrell Rejik</F2Heading>
                        <F2desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum, quam quis iaculis pretium, orci libero sodales diam, vel condimentum augue odio vitae metus.</F2desc>
                        <F2btn>Click</F2btn>
                    </F2Detail>
                    <F2Machine>
                        <Image src={TypeWritter} />
                    </F2Machine>
                </Feature2Description>
            </Feature2Wrap>
        </Feature2Container>
    )
}

export default Feature2
