import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Popup from 'reactjs-popup';

class SchedulePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <HeaderBar page="Troubleshoot"></HeaderBar>
                <CenterBox>
                    <label>Swptember 22, 2019</label>
                    <Calendar value={this.state.date} />
                    <Steps>
                        <List component="nav" aria-label="main mailbox folders">
                            <label>Available time slots</label>
                            <ListItem button>
                                <ListItemText primary="9AM - 12PM" />
                                <Popup trigger={<Button bg='#61ab17' darken='#4c8415'>Schedule</Button>}
                                 position="right center" modal closeOnDocumentClick>
                                    <h5>Schedule a technician</h5>
                                    <br/>
                                    <CenterBox>
                                    <label>Date: September 22, 2019</label>
                                    <label>Time: 9AM - 12PM</label>
                                    <br></br>
                                    </CenterBox>
                                    <ButtonMin bg='#61ab17' darken='#4c8415'>Cancel</ButtonMin>
                                    <ButtonMin bg='#61ab17' darken='#4c8415'>Schedule</ButtonMin>
                                </Popup>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="1PM - 2PM" />
                                <Button bg='#61ab17' darken='#4c8415'>Schedule</Button>
                            </ListItem>
                        </List>
                    </Steps>
                </CenterBox>
                <BottomBar></BottomBar>
            </div>

        )
    }
}

export default SchedulePage;


const CenterBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #eaeef1;
    justify-content:center;
    align-items:center;
    padding-bottom:10px;
`;

const Button = styled.button`
    width: 25%;
    font-weight: bold;
    font-size: 1em;
    line-height: 1.5em;
    border-radius: 5px;
    margin-bottom: 10px;
    border: none;
    color:#fff;
    background: red;
`;

const ButtonMin = styled.button`
    width: 30%;
    font-weight: bold;
    font-size: 0.8em;
    line-height: 1.5em;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-right: 10px;
    border: none;
    color:#fff;
    background: red;
`;

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