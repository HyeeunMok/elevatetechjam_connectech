import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';
import styled from 'styled-components';
import Popup from 'reactjs-popup';

class StoreBuy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <HeaderBar page="Purchase a New Device"></HeaderBar>
                {/* <Title>STORE PAGE</Title> */}
                <Content>
                    <h3>Closest store</h3>
                    <img src="/img/store.PNG" alt="rogers store location" />
                    <br></br>
                    <label>Reserve at Rogers store near you</label>
                    <br></br>
                    <UnorderList>
                        <ListItem>
                            <label>130 King St W Unit CW 0.9mi</label>
                            <label>Opens 9AM Monday</label>
                            <Button
                                bg='red' darken='#8b0000'
                                style={{ float: 'right' }}
                            >Reserve </Button>
                        </ListItem>
                        <ListItem>
                            <label>130 King St W Unit CW 0.9mi</label>
                            <label>Opens 9AM Monday</label>
                            <Popup trigger={<Button bg='red' darken='#8b0000'>Reserve</Button>}
                                position="right center" modal closeOnDocumentClick>
                                <h5>Schedule a technician</h5>
                                <br />
                                <CenterBox>
                                    <label>Device: |LG Smart Bulb 9834</label>
                                    <label>Location: 130 King St W Unit CW</label>
                                    <br></br>
                                </CenterBox>
                                <ButtonMin bg='red' darken='#8b0000'>Cancel</ButtonMin>
                                <ButtonMin bg='red' darken='#8b0000'>Confirm</ButtonMin>
                            </Popup>
                        </ListItem>
                        <ListItem>
                            <label>130 King St W Unit CW 0.9mi</label>
                            <label>Opens 9AM Monday</label>
                            <Button
                                bg='red' darken='#8b0000'
                                style={{ float: 'right' }}
                            >Reserve </Button>
                        </ListItem>
                    </UnorderList>
                    <label>Or tap to buy online</label>
                    <br></br>
                    <Button bg='red' darken='#8b0000' >Shop Online</Button>
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

// const Title = styled.h3`
//     margin: 0;
//     padding:0;
//     color: #fff;
//     line-height: 1.8em;
//     text-align:center;
//     background:#041b2b;
// `;

const CenterBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #eaeef1;
    justify-content:center;
    align-items:center;
    padding-bottom:10px;
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