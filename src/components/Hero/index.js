import React from 'react'
import { 
    HeroContainer, 
    HeroDescription,  
    HeroH1, 
    HeroP,  
} from './HeroELements'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroDescription>
                <HeroH1>
                    JUST FLOW
                </HeroH1>
                <HeroP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Vestibulum dictum, iaculis pretium.
                </HeroP>
            </HeroDescription>
        </HeroContainer>
    )
}

export default Hero
