import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Footer from './Footer';
function Home() {
    return (
        <Container>
            <Section heading="Model 3" title="Leasing starting at $349/mo" bgImage="model-3.jpg" TopButton="Custom Order" BottomButton="Demo Drive" />
            <Section heading="Model Y" title="" bgImage="model-y.jpg" TopButton="Custom Order" BottomButton="Demo Drive" />
            <Section heading="Model S" title="Schedule a Demo Drive" bgImage="model-s.jpg" TopButton="Custom Order" BottomButton="View Inventory" />
            <Section heading="Model X" title="Schedule a Demo Drive" bgImage="model-x.jpg" TopButton="Custom Order" BottomButton="View Inventory" />
            <Section heading="Solar Panels" title="Lowest Cost Solar Panels in America" bgImage="solar-panel.jpg" TopButton="Order Now" BottomButton="Learn More" />
            <Section heading="Solar Roof" title="Produce Clean Energy From Your Roof" bgImage="solar-roof.jpg" TopButton="Order Now" BottomButton="Learn More" />
            <Section heading="Accessories" title="" bgImage="accessories.jpg" TopButton="Shop Now" />
            <Footer/>
        </Container>
    )
}

export default Home
const Container = styled.div`
    height:100vh;
`
