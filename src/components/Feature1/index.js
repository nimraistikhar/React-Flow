import React from 'react'
import WaterImg from '../../images/image-1.jpg'
import {
    Feature1Container, 
    Feature1Wrap, 
    Description, 
    DescriptionHeading, 
    DescriptionDetail, 
    Feature1Image, 
    Image
} from './Feature1Element'

const Feature1 = () => {
    return (
        <Feature1Container>
            <Feature1Wrap>
            <Description>
                <DescriptionHeading>
                    Our Photography
                </DescriptionHeading>
                <DescriptionDetail>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum, quam quis iaculis pretium, orci libero sodales diam, vel condimentum augue odio vitae metus. Aliquam et lorem et dui hendrerit auctor. Nunc eget neque sit amet turpis porttitor aliquet. Donec faucibus risus arcu, vitae pharetra risus tincidunt id. Nam ornare pulvinar quam.
                </DescriptionDetail>
                </Description>
                <Feature1Image>
                    <Image src={WaterImg} />
                </Feature1Image>
            </Feature1Wrap>
        </Feature1Container>
    )
}

export default Feature1
