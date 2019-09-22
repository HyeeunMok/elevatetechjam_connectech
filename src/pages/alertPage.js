import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';

class Alert extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <HeaderBar  page="Alerts"></HeaderBar>
                 <h1>ALERT</h1>
                <BottomBar></BottomBar>
            </div>
           
        )
    }
}

export default Alert;