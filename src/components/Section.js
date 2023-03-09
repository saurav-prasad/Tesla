import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";

function Section(props) {
    return (
        <>
            <Wrap bgImg={props.bgImage}>
                <Fade duration={1700} direction="bottom">
                    <ItemText>
                        <h1>{props.heading}</h1>
                        <p style={{ fontWeight: '500', fontSize: '1.1rem', marginTop: "8px" }}>{props.title}</p>
                    </ItemText>
                </Fade>

                <ButtonGroup>
                    <Fade duration={1700} direction="bottom">
                        <ButtonBox>

                            {
                                props.BottomButton ? <TopButton>{props.TopButton}</TopButton> : <TopButton style={{ backgroundColor: 'rgb(23 26 32)', opacity: 1 }}>{props.TopButton}</TopButton>
                            }
                            {
                                props.BottomButton &&
                                <BottomButton >{props.BottomButton}</BottomButton>
                            }
                        </ButtonBox>
                    </Fade>
                    {
                        props.BottomButton &&
                        <DownArrow src="/images/down-arrow.svg"></DownArrow>
                    }
                </ButtonGroup>

            </Wrap>
        </>

    )
}

export default Section
const Wrap = styled.div`
width:100vw;
height:100vh;
background-image:url(/images/model-s.jpg);
background-image: ${props => `url('images/${props.bgImg}');`}
background-repeat:no-repeat;
background-position:center;
background-size:cover;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`

const ButtonGroup = styled.div`
padding-bottom:2vh;
@media (min-width:600px){
    padding-bottom:3vh;
}
`
const ButtonBox = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
@media (max-width:600px){
    flex-direction:column;
}
`
const TopButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:10px 10px;
font-weight:550;
border-radius:4px;
min-width: 90vw;
font-size:0.94rem;
height:40px;
color:rgb(250 250 251);
background-color:rgb(69 71 76);
border:none;
opacity:0.93;
cursor:pointer;
@media (min-width:600px){
    min-width:270px;
    margin:0px 10px;
    opacity:1;
    font-size:0.97rem;
    }
`
const BottomButton = styled(TopButton)`
margin-top:20px;
color:rgb(57 60 65);
background-color:rgb(244 244 244 / 65%);
border:none;
@media (min-width:600px){
    margin-top:0px;
}
`
const DownArrow = styled.img`
margin-top:10px;
width:36px;
animation: arrowUpDown infinite 1.5s;
`