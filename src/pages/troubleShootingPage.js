import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';
import styled from 'styled-components';

class TroubleShooting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <HeaderBar page="Trouble shooting"></HeaderBar>
                {/* <Title>TROUBLE SHOOTING</Title> */}
                <CenterBox>
                    <Steps>
                        <h3>Steps</h3>
                        <OrderList>
                            <li>Remove the mounting bracket from the base</li>
                            <li>Plug the power connector into the back of the Smoke Alarm</li>
                            <li>Check all connections</li>
                            <li>The Green power indicator light will shine continuously</li>
                        </OrderList>
                    </Steps>
                    <Button bg='#4489b6' darken='#296e8f' >Contact Us</Button>
                    <Button bg='#61ab17' darken='#4c8415'>Schedule Visit</Button>
                </CenterBox>
                 <BottomBar></BottomBar>
            </div>

        )
    }
}

export default TroubleShooting;


const CenterBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #eaeef1;
    justify-content:center;
    align-items:center;
    padding-bottom:10px;
`;

// const Title = styled.h3`
//     margin: 0;
//     padding:0;
//     color: #fff;
//     line-height: 1.8em;
//     text-align:center;
//     background:#041b2b;
// `;

const Steps = styled.div`
    margin: 10px auto;
    width: 90%;
    padding: 6px 10px;
    box-sizing: border-box;
    background: #fff;
    padding: .5em .8em;
    h3,ol{
        margin:0;
        padding:0;
    }
`;

const OrderList = styled.ol`
    width: 100%;
    box-sizing: border-box;

    li{
        width: 100%;
        list-style-position: inside;
        box-sizing: border-box;
        line-height: 2em;
        overflow-wrap: break-word;
    }
`;

const Button = styled.button`
    width: 50%;
    font-weight: bold;
    font-size: 1.3em;
    line-height: 1.5em;
    border-radius: 5px;
    margin-bottom: 10px;
    border: none;
    color:#fff;
    background: ${props => props.bg};

    &:hover{
        background: ${props => props.darken};
    }
`;