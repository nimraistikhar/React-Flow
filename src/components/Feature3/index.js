import React from 'react'
import Image3 from '../../images/image-3.jpg'
import {
    Feature3Container, 
    Feature3Wrap, 
    Feature3Description, 
    F3Machine, 
    Image, 
    F3Detail, 
    F3Heading, 
    F3btn, 
    Feature3Twitter, 
    F3TwitterDesc, 
    Bars
} from './Feature3Elements'

const Feature3 = () => {
    return (
        <Feature3Container>
            <Feature3Wrap>
                <Feature3Description>
                    <F3Detail>
                        <F3Heading>Just shadow</F3Heading>
                        <F3btn>Follow</F3btn>
                    </F3Detail>
                    <F3Machine>
                        <Image src={Image3} />
                    </F3Machine>
                </Feature3Description>

                <Feature3Twitter>
                    <Bars />
                    <F3TwitterDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum, quam quis iaculis pretium, orci libero sodales diam, vel condimentum augue odio vitae metus Lorem ipsum dolor sit amet, consectetur adipiscing elit.</F3TwitterDesc>
                </Feature3Twitter>
            </Feature3Wrap>
        </Feature3Container>
    )
}

export default Feature3
