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
                <HeaderBar></HeaderBar>
                 <h1>LANDING PAGE</h1>
                 <BottomBar></BottomBar>
            </div>
           
        )
    }
}

export default LandingPage;