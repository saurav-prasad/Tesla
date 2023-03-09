import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import menuContext from '../context/Menu/menuContext'
function Header() {
    var js = (function(x) {return x*x;}(2));
    console.log(js);
    console.log(1);
    const cars = useSelector(selectCars) 
    const items = useContext(menuContext)
    const [SideBar, setSideBar] = useState(false);
    const sideClose = () => {

        SideBar === false ? setSideBar(true) : setSideBar(false)
    }
    return (
        <Container>
            <a>
                <img alt="" src="images/logo.svg" />
            </a>
            <ModelMenu>
                {cars && cars.map((data, index) => (<p key={index}><a href="#">{data}</a></p>))}
            </ModelMenu>

            <RightMenu>
                <p><a href="#">Shop</a></p>
                <p><a href="#">Account</a></p>
                <p><a onClick={sideClose} href="#">Menu</a></p>
            </RightMenu>
            <CustomMenu><MenuIcon onClick={sideClose} /></CustomMenu>

            <Sidebar ScrollView={SideBar}>
                <CrossBtn onClick={sideClose} />
                <ul>
                    {items && items.map((data, index) => (<li key={index}><a href="#">{data}</a></li>))}
                </ul>
            </Sidebar>

        </Container>
    )
}

export default Header
const Container = styled.div`
z-index:1;
padding:15px 25px;
display:flex;
justify-content:space-between;
align-items:center;
width:100vw;
position:fixed;
top:0;
left:0;
img{height: 16px;
    width: 115px;}
`
const ModelMenu = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
p{
    font-size:0.9rem;
    margin:0px 10px;
}
@media (max-width:950px){
    display:none;
}
`
const RightMenu = styled(ModelMenu)``
const CustomMenu = styled.div`
cursor:pointer;
display:none;
@media (max-width:950px){
    display:block;
}
`

const Sidebar = styled.div`
transform: ${props => `${props.ScrollView ? 'translateX(0);' : 'translateX(100%);'}}`}
transition: transform 0.22s ease-in-out;
padding-left: 30px;
padding-top:80px;
width:290px;
font-size:0.9rem;
z-index:10;
position: fixed;
top: 0;
bottom : 0;
right: 0;
background-color: white;
ul{
list-style:none;
text-align:left;
}
ul li{
    width:100%;
    margin: 30px 0;
}
`
const CrossBtn = styled(CloseIcon)`
cursor:pointer;
position: absolute;
top:30px;
right:30px;
`