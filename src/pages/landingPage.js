import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';

class LandingPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <HeaderBar page="Home"></HeaderBar>
                <div>
                <img src="/img/landing.jpeg" height="510px" width="360px" alt="rogers store location" />
                </div>
                <BottomBar></BottomBar>
            </div>
           
        )
    }
}

export default LandingPage;