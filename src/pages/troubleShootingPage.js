import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from "antd";

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
                    <h3>Try these steps</h3>
                    <Steps>
                        <OrderList>
                            <li>Remove the mounting bracket from the base</li>
                            <li>Plug the power connector into the back of the Smoke Alarm</li>
                            <li>Check all connections</li>
                            <li>The Green power indicator light will shine continuously</li>
                        </OrderList>
                    </Steps>

                    <h3>Still Having Issue?</h3>
                    <Button  >
                        <Icon type="phone" />
                        Contact Us
                        </Button>
                    <Link to="/schedule">
                        <Button >
                            <Icon type="calendar" />
                            Schedule a Visit from Rogers Technician
                        </Button>
                    </Link>
                </CenterBox>

                <BottomBar></BottomBar>
            </div>

        )
    }
}

export default TroubleShooting;


const CenterBox = styled.div`
    padding-bottom:10px;
    height: 90vh;
    h3{
        margin:0;
        background: #eaeef1;
        font-weight:bold;
        padding: 5px 20px;
        color:#525252;
    }
`;

const Steps = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

const OrderList = styled.ol`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 30px;
    li{
        width: 100%;
        list-style-position: inside;
        box-sizing: border-box;
        line-height: 2em;
        overflow-wrap: break-word;
    }
`;

const Button = styled.button`
    width: 100%;
    font-size: 1.1em;
    padding: 20px 15px 20px 30px;
    border: none;
    border-bottom: 1px solid #848484;
    margin-right: 10px;
    background: #fff;
    color:#848484;
    text-align:left;

    & i{
        font-size: 2em;
        margin-right: 15px;
        font-weight:bold;
        color:#525252;
    }
`;