import React from 'react';
// import styled from 'styled-components';
import { Button, Card, Icon } from "antd";
import 'antd/dist/antd.css';

import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';

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
                    <Button type="primary" block>
                        Trouble Shooting 
                    </Button>
                    <Button type="danger" block>
                        Purchase
                    </Button>
                <BottomBar></BottomBar>
            </div>
           
        )
    }
}

export default AlertInfo;