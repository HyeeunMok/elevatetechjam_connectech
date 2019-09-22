import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';
import { Icon } from "antd";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <HeaderBar page="Alerts"></HeaderBar>
                <ColNames>
                    <span>Detected Issues</span>
                    <Right>Severity</Right>
                </ColNames>
                <UnorderList>
                    <Link to="/alertinfo">
                        <ListItem>
                            <Icon type="bulb" style={{ color: '#feb41d' }} />
                            <Name >Backyard Door Lightbulb</Name>
                            <Cause>Unresponsive</Cause>
                            <Time >Last Detected: Sept 12th 2019</Time>
                            <State color='#feb41d'>Medium</State>
                        </ListItem>
                    </Link>
                    <ListItem>
                        <Icon type="lock" style={{ color: '#ac4395' }} />
                        <Name >Basement Carbon Monoxide</Name>
                        <Cause>Due for Replacement</Cause>
                        <Time >Last Detected: 3 days ago</Time>
                        <State color="red" >High</State>
                    </ListItem>
                    <ListItem>
                        <Icon type="eye" style={{ color: '#1d1d1d' }} />
                        <Name >2nd Floor Motion</Name>
                        <Cause>Unresponsive</Cause>
                        <Time >Last Detected: 3 hrs ago</Time>
                        <State color='#6cb763'>Low</State>
                    </ListItem>
                </UnorderList>
                <BottomBar></BottomBar>
            </div>

        )
    }
}

export default Alert;

const UnorderList = styled.ul`
    margin: 0;
    padding:0;
    width: 100%;
    height: 80vh;
    padding: .1em 0;
    list-style: none;
    background: #eaeef1;
    color:#727272;
`;

const ListItem = styled.li`
    display:grid;
    width: 100%;
    grid-template-columns: 1.4fr 6.5fr 2fr;
    grid-template-areas:
    "icon name state"
    "icon cause state"
    "icon time state";
    padding: .9em 1.3em;
    background: #fff;
    box-sizing:border-box;
    align-items:center;
    font-weight:bold;
    border-bottom: 1px solid #dedcdc;

    & i{
        display:flex;
        grid-area: icon;
        font-size: 1.8em;
        justify-content:center;
    }
`;

const Name = styled.span`
    grid-area: name;
    color:#1d1d1d;
    font-size: 1em;
`;

const State = styled.span`
    grid-area: state;
    color:${props => props.color};
    font-size: .8em;
    text-align:center;
`;

const Time = styled.span`
    grid-area: time;
    color:#949494;
    font-size: .8em;
`;
const Cause = styled.span`
grid-area: cause;
color:#949494;
font-size: .8em;
margin-bottom: 5px;
`;

const ColNames = styled.div`
color:#949494;
font-size: .8em;
background: #f3f3f3;
border-bottom: 1px solid #dedcdc;
font-weight:bold;
padding: .9em 1.3em;
`;

const Right = styled.span`
    float:right;
`;