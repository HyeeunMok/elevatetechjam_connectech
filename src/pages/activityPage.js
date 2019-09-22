import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';
import { Icon } from "antd";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <HeaderBar page="Activity"></HeaderBar>
                {/* <Title>Activity</Title> */}
                <UnorderList>
                    <Link to="/alertinfo">
                        <ListItem>
                            <Icon type="bulb" style={{ color: '#feb41d' }} />
                            <Name >Lightbulb kitchen</Name>
                            <Time >1:33pm</Time>
                            <State >On</State>
                        </ListItem>
                    </Link>
                    <ListItem>
                        <Icon type="lock" style={{ color: '#ac4395' }} />
                        <Name >Front door lock</Name>
                        <Time >1:18pm</Time>
                        <State >Lock</State>
                    </ListItem>
                    <ListItem>
                        <Icon type="eye" style={{ color: '#feb41d' }} />
                        <Name >Baby Cam</Name>
                        <Time >1:05pm</Time>
                        <State >Motion Detected</State>
                    </ListItem>
                    <ListItem>
                        <Icon type="eye" style={{ color: '#1d1d1d' }} />
                        <Name >Baby Cam</Name>
                        <Time >1:00pm</Time>
                        <State >Still</State>
                    </ListItem>
                    <ListItem>
                        <Icon type="play-square" style={{ color: '#1b73c4' }} />
                        <Name >Baby Cam</Name>
                        <Time >12:43pm</Time>
                        <State >Video clip</State>
                    </ListItem>
                    <ListItem>
                        <Icon type="picture" style={{ color: '#1b73c4' }} />
                        <Name >Baby Cam</Name>
                        <Time >12:28pm</Time>
                        <State >(5) Pictures</State>
                    </ListItem>
                </UnorderList>
                <BottomBar></BottomBar>
            </div>

        )
    }
}

export default Activity;

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
    display:grid;
    width: 100%;
    grid-template-columns: 2fr 6fr 2fr;
    grid-template-areas:
    "icon name time"
    "icon state time";
    grid-gap:5px;
    padding: .9em 1.5em;
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
    color:#949494;
    font-size: .9em;
`;

const Time = styled.span`
    grid-area: time;
    color:#949494;
    font-size: .9em;
`;