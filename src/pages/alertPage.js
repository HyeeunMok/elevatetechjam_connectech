import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';
import { Icon } from "antd";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

class Alert extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <HeaderBar page="Alerts"></HeaderBar>
                {/* <Title>ALERTS</Title> */}
                <UnorderList>
                    <Link to="/alertinfo"><ListItem>
                        <Icon type="bulb" style={{ color: '#feb41d' }} />Lightbulb kitchen
                    </ListItem></Link>
                    <ListItem>
                        <Icon type="lock" style={{ color: '#ac4395' }} /> Front door lock
                    </ListItem>
                    <ListItem>
                        <Icon type="alert" style={{ color: '#58af10' }} /> Motion detector clear
                    </ListItem>
                </UnorderList>
                <BottomBar></BottomBar>
            </div>
           
        )
    }
}

export default Alert;

// const Title = styled.h3`
//     margin: 0;
//     padding:0;
//     color: #fff;
//     line-height: 1.8em;
//     text-align:center;
//     background:#041b2b;
// `;

const UnorderList = styled.ul`
    margin: 0;
    padding:0;
    width: 100%;
    padding: .1em 0;
    list-style: none;
    background: #eaeef1;
    color:#727272;
`;

const ListItem = styled.li`
    display:flex;
    width: 100%;
    padding: .9em 1.7em;
    background: #fff;
    margin: .5em 0;
    box-sizing:border-box;
    font-size: 1.2em;
    align-items:center;

    & i{
        font-size: 1.8em;
        margin-right: 10px;
    }
`;