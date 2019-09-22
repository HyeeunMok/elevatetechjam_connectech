import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';
import styled from 'styled-components';

class StoreBuy extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <HeaderBar page="Purchase a New Device"></HeaderBar>
                {/* <Title>STORE PAGE</Title> */}
                <Content>
                    <h3>Closest store</h3>
                    <img src="/img/store.PNG" alt="rogers store location" />
                    <ul>
                        <li><strong>Address:</strong> 100 City Centre Dr Unit 1-731, Mississauga, ON L5B 2C9</li>
                        <li><strong>Hours:</strong> Open ⋅ Opens 11 a.m</li>
                        <li><strong>Phone:</strong> (905) 272-9899</li>
                    </ul>
                    <Button bg='#4489b6' darken='#296e8f' >Buy Online</Button>
                    <Button
                        bg='#61ab17' darken='#4c8415'
                        style={{ float: 'right' }}
                    >Reserve in Store</Button>
                </Content>
                <BottomBar></BottomBar>
            </div>
           
        )
    }
}

export default StoreBuy;

const Content = styled.div`
    padding: 15px;
    h3,ul{
        margin: 0;
    }
    img{
        width:100%;
    }

    ul{
        padding: 0;
        margin-bottom: 20px;
        list-style:none;
    }
`;

const Title = styled.h3`
    margin: 0;
    padding:0;
    color: #fff;
    line-height: 1.8em;
    text-align:center;
    background:#041b2b;
`;

const Button = styled.button`
    font-weight: bold;
    font-size: 1em;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: none;
    color:#fff;
    background: ${props => props.bg};

    &:hover{
        background: ${props => props.darken};
    }
`;