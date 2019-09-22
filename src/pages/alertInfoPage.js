import React from 'react';
import styled from 'styled-components';
import {Card, Icon } from "antd";
import 'antd/dist/antd.css';

import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';
import {Link} from 'react-router-dom';

const { Meta } = Card;

class AlertInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <HeaderBar page="AlertInfo"></HeaderBar>
                <Card
                    style={{ width: 330 }}
                    cover={
                    <img
                        alt="lightbulb"
                        src="https://www.rogers.com/cms/page-specific/shm/feb/images/210-4H8400700.jpg"  height="160" width="170"
                    />
                    }
                >
                    <Meta
                    title="Light bulb in kitchen"
                    description="Status: Offline"
                    />
                        
                    <div className="additional">
                    <p>Last Online: September 1st 2019</p>
                    </div>
                </Card>
                <Link to="/troubleshooting"><Button bg='red' darken='#8b0000' >
                        Trouble Shooting 
                    </Button></Link>
                    <Link to="/storebuy"><Button bg='red' darken='#8b0000' >
                        Purchase
                    </Button></Link>
                <BottomBar></BottomBar>
            </div>
           
        )
    }
}

export default AlertInfo;

const Button = styled.button`
    width: 50%;
    font-weight: bold;
    font-size: 1.3em;
    line-height: 1.5em;
    border-radius: 5px;
    margin-bottom: 10px;
    border: none;
    color:#fff;
    margin-right: 10px;
    background: ${props => props.bg};

    &:hover{
        background: ${props => props.darken};
    }
`;