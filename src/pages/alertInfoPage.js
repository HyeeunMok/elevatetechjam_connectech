import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';

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
                 <h1>ALERT INFO</h1>
                <BottomBar></BottomBar>
            </div>
           
        )
    }
}

export default AlertInfo;