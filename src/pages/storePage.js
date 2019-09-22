import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';

class StoreBuy extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <HeaderBar page="Store"></HeaderBar>
                 <h1>STORE PAGE</h1>
                 <BottomBar></BottomBar>
            </div>
           
        )
    }
}

export default StoreBuy;