import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';


class TroubleShooting extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <HeaderBar page="Troubleshooting"></HeaderBar>
                 <h1>TROUBLE SHOOTING</h1>
                 <BottomBar></BottomBar>
            </div>
           
        )
    }
}

export default TroubleShooting;