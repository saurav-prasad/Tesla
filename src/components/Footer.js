import React from 'react'
import styled from 'styled-components'
function Footer() {
    return (
        <>
        <FooterBox>
            <li>Tesla © 2023</li>
            <li>Privacy & Legal</li>
            <li>Vehicle Recalls</li>
            <li>Careers</li>
            <li>News</li>
        </FooterBox>
        </>
    )
}

export default Footer;
const FooterBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    li{
        list-style: none;
        font-weight: 500;
        font-size: 0.78em;
        color: rgb(139 141 144);
        margin: 8px 0;
    }
    @media (min-width: 600px){
        flex-direction: row;
        li{
            margin: 0px 10px;
        }
    }
`